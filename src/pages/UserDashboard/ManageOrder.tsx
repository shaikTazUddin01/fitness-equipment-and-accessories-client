

import {  Col, Table, TableColumnsType, TableProps } from "antd";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useGetOrderbySpUserQuery } from "../../redux/features/order/orderapi";
import { TOrder } from "../../Type";

interface DataType {
  key: string | undefined;
  no: number;
  image: string;
  name: string;
  status: string;
  address: string;
}

const ManageOrder = () => {
  const { id }: any = useAppSelector((state) => state.userLoginInfo.user);
  const { data: order, isLoading } = useGetOrderbySpUserQuery(id);

  console.log("categoris-->", order);
  if (isLoading) {
    return <p>loading...</p>;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "No .",
      dataIndex: "no",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image: string) => (
        <img
          src={image}
          style={{
            height: "70px",
            borderRadius: "10px",
            boxShadow: "0px 0px 4px 1px",
            width: "70px",
          }}
        />
      ),
    },

    {
      title: "product Name",
      dataIndex: "name",
    },
    {
      title: "Delivary Status",
      dataIndex: "status",
      render:(status) =>{
        // console.log(status);
        return(
            <span
            className={`${status === "onProcess" ? "bg-yellow-500 text-black" : ""}
                        ${status === "shipped" ? "bg-blue-500 text-white" : ""}
                        ${status === "delivered" ? "bg-green-500 text-white" : ""} 
                        px-2 py-1 rounded-full`}
          >
            {status}
          </span>
      )},
    },
    {
      title: "Delivary Address",
      dataIndex: "address",
    },
  ];

  const tableData: DataType[] = order?.data?.map(
    (item: TOrder, idx: number) => ({
      key: item?._id,
      no: idx + 1,
      image: item?.productId?.images,
      name: item?.productId?.name,
      status: item?.status,
      address: item?.customerAddress,
    })
  );

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Col className="">
    <h1 className="text-3xl text-center mb-5 font-medium">Tracking Your Order</h1>
      <Table
        className=""
        columns={columns}
        scroll={{ x: 400 }}
        dataSource={tableData}
        onChange={onChange}
      />
    </Col>
  );
};

export default ManageOrder;
