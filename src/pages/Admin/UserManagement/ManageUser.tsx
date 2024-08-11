import {  Col, Table, TableColumnsType, TableProps } from "antd";


import {  TUserData } from "../../../Type";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import {
  //   useDeleteAdminMutation,
  //   useGetAdminQuery,
  useGetUserQuery,
} from "../../../redux/features/auth/User/userApi";
import { ReactNode } from "react";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import UpdateAdmin from "./UpdateAdmin";

interface DataType {
  key: ReactNode;
  name: string;
  email: string;
  role: "user" | undefined;
  phoneNumber: string;
  gender: string;
  address: string;
}

const ManageUser = () => {
  const { data, isLoading } = useGetUserQuery(undefined);
  //   const [deleteAdmin] = useDeleteAdminMutation();

  const user: TUserData[] = data?.data;
  // console.log(user);

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

  //handle delete product
  //   const handleDelete = async (id: string) => {
  //     console.log(id);
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "To Delete This Product",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         const toastId = toast.loading("loading..");

  //         const res = await deleteAdmin(id);
  //         console.log(res);
  //         if (res?.data?.data) {
  //           toast.warning("Delete Success", {
  //             id: toastId,
  //             duration: 1500,
  //           });
  //         } else if ("error" in res && isFetchBaseQueryError(res.error)) {
  //           const errorData = (res.error as FetchBaseQueryError).data;
  //           if (isErrorResponse(errorData)) {
  //             toast.error(errorData.message, {
  //               id: toastId,
  //               duration: 1500,
  //             });
  //           }
  //         }
  //       }
  //     });
  //   };

  const columns: TableColumnsType<DataType> = [
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
      title: "Role",
      dataIndex: "role",
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

  const tableData: DataType[] = user?.map(
    ({ _id, email, name, role, phoneNumber, address, gender }) => ({
      key: _id,
      name: name,
      email,
      role,
      phoneNumber,
      address,
      gender,
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

export default ManageUser;
