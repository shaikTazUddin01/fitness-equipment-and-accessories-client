// import Swal from "sweetalert2";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";

import { isErrorResponse, isFetchBaseQueryError, TOrder } from "../../../Type";
// import { toast } from "sonner";

import { Col, Select, Table, TableColumnsType, TableProps } from "antd";
import {
  useGetOrderQuery,
  useUpdateOrderStatusMutation,
} from "../../../redux/features/order/orderapi";

import { OrderStatusOptions } from "../../../constant/Options";
import { status } from "../../../constant/Status.constant";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const ShipingOrder = () => {
  const { data, isLoading } = useGetOrderQuery(status.shipped);
  // update order status
  const [updateOrder] = useUpdateOrderStatusMutation();

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

  const shipingproduct: TOrder[] = data?.data;

  // console.log(newOrder);

  const handleChange = async (data: string,id:string|undefined) => {
    console.log("data-->", data,id);
    const toastId = toast.loading("Loading...");
    try {
      const res = await updateOrder({ id,status:data });

      console.log("res--->", res);

      if (res.data) {
        toast.success("update successfully", {
          id: toastId,
          duration: 1500,
        });
      } else if ("error" in res && isFetchBaseQueryError(res.error)) {
        const errorData = (res.error as FetchBaseQueryError).data;
        if (isErrorResponse(errorData)) {
          toast.error(errorData.message, {
            id: toastId,
            duration: 1500,
          });
        }
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };

  const columns: TableColumnsType<TOrder> = [
    {
      title: "No .",
      dataIndex: "no",
      key: "no",
      width: 100,
      fixed: "left",
    },

    {
      title: "Customer Name",
      dataIndex: "customerName",
    },
    {
      title: "Customer Email",
      dataIndex: "customerEmail",
    },
    {
      title: "Customer Number",
      dataIndex: "customerNumber",
    },
    {
      title: "Customer Address",
      dataIndex: "customerAddress",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Product Category",
      dataIndex: "productCategory",
    },
    {
      title: "Product price",
      dataIndex: "productPrice",
    },
    {
      title: "Total Item",
      dataIndex: "totalItem",
    },
    {
      title: "Total price",
      dataIndex: "totalPrice",
    },
    {
      title: "payment status",
      dataIndex: "paymentStatus",
      render: (item) => (
        <span
          className={
            item == "cash on delivery" ? "text-red-600" : "text-green-600"
          }
        >
          {item}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item,record) => (
        // <THForm onSubmit={onSubmit}>
        <Select
          defaultValue={item}
          style={{ width: 120 }}
          onChange={(value)=>handleChange(value,record.key)}
          className="capitalize"
          // {...register('status')}
        >
          {OrderStatusOptions?.map((item: any, idx) => {
            return (
              <option key={idx} value={item?.name} className="capitalize">
                {item?.name}
              </option>
            );
          })}
        </Select>
        // </THForm>
      ),
    },
  ];

  const tableData: TOrder[] = shipingproduct?.map(
    (
      {
        _id,
        customerName,
        customerEmail,
        customerNumber,
        customerAddress,
        productName,
        productCategory,
        productPrice,
        totalItem,
        totalPrice,
        paymentStatus,
        status,
      },
      idx
    ) => ({
      key: _id,
      no: `00${idx + 1}`,
      customerName,
      customerEmail,
      customerNumber,
      customerAddress,
      productName,
      productCategory,
      productPrice,
      totalItem,
      totalPrice,
      paymentStatus,
      status,
    })
  );

  const onChange: TableProps<TOrder>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Col>
      <Table
        columns={columns}
        scroll={{ x: 1500 }}
        dataSource={tableData}
        onChange={onChange}
      />
    </Col>
  );
};

export default ShipingOrder;
