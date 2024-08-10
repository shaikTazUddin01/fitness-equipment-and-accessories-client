import { Col, Table, TableColumnsType, TableProps } from "antd";

import { TUserData } from "../../../Type";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import { useGetCustomerQuery } from "../../../redux/features/auth/User/userApi";
import { ReactNode } from "react";

interface DataType {
  key: ReactNode;
  name: string;
  email: string;

  phoneNumber: string;

  address: string;
}

const ManageCustomer = () => {
  const { data, isLoading } = useGetCustomerQuery(undefined);
  //   const [deleteAdmin] = useDeleteAdminMutation();

  const user: TUserData[] = data?.data;
  console.log(user);

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "Customer No .",
      dataIndex: "cNo",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },

    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const tableData: DataType[] = user?.map(({ _id, customerId }, idx) => ({
    key: _id,
    cNo: idx + 1,
    name: customerId?.name || "N/A",
    email: customerId?.email || "N/A",
    phoneNumber: customerId?.phoneNumber || "N/A",
    address: customerId?.address || "N/A",
    age: customerId?.age || "N/A",
    gender: customerId?.gender || "N/A",
  }));

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Col className="shadow-xl">
      <Table
        columns={columns}
        scroll={{ x: 500 }}
        dataSource={tableData}
        onChange={onChange}
      />
    </Col>
  );
};

export default ManageCustomer;
