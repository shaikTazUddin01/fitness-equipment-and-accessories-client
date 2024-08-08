// import Swal from "sweetalert2";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";

import {  TOrder } from "../../../Type";
// import { toast } from "sonner";

import {  Col,  Table, TableColumnsType, TableProps } from "antd";
import { useGetOrderQuery } from "../../../redux/features/order/orderapi";

// interface DataType {
//   key: string | undefined;
//   no: number;
//   image: string;
//   category: string;
// }

const NewOrder = () => {
  const { data, isLoading } = useGetOrderQuery(undefined);

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

  const newOrder :TOrder[] = data?.data;

  console.log(newOrder);

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
    },
  ];

  const tableData: TOrder[] = newOrder?.map(
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

export default NewOrder;
