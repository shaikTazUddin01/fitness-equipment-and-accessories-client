import { Button, Col, Space, Table, TableColumnsType, TableProps } from "antd";
// import adminsRow from "../../../component/ProductManagement/adminsRow";

// import {
//   useDeleteProductMutation,
//   useGetadminsQuery,
// } from "../../../redux/features/admins/admins.api";
// import { TProduct } from "../../../Type";
import Swal from "sweetalert2";
import { toast } from "sonner";
import {
  isErrorResponse,
  isFetchBaseQueryError,
  TAdminData,
} from "../../../Type";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import {
  useDeleteAdminMutation,
  useGetAdminQuery,
} from "../../../redux/features/auth/User/userApi";
import { ReactNode } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import UpdateAdmin from "./UpdateAdmin";

interface DataType {
  key: ReactNode;
  name: string;
  email: string;
  role: "Admin" | "SubAdmin" | undefined;
  phoneNumber: string;
  status: string;
}

const ManageAdmin = () => {
  const { data: AdminData, isLoading } = useGetAdminQuery({});
  const [deleteAdmin] = useDeleteAdminMutation();

  const admins: TAdminData[] = AdminData?.data;

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

  //handle delete product
  const handleDelete = async (id: string) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "To Delete This Product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const toastId = toast.loading("loading..");

        const res = await deleteAdmin(id);
        console.log(res);
        if (res?.data?.data) {
          toast.warning("Delete Success", {
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
      }
    });
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      // filters: [
      //   {
      //     text: "Joe",
      //     value: "Joe",
      //   },
      //   {
      //     text: "Category 1",
      //     value: "Category 1",
      //   },
      //   {
      //     text: "Category 2",
      //     value: "Category 2",
      //   },
      // ],
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.name.includes(value as string),
      // width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <div className="capitalize">
          <span
            className={status === "active" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}
          >

          {status}
          </span>
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        console.log("item", item);
        return (
          <Space>
            {/* <a href={`/admin/update-product/${item?.key}`}>
              <Button type="primary">Edit</Button>
            </a> */}
            <UpdateAdmin item={item}></UpdateAdmin>
            <Button
              type="primary"
              danger
              onClick={() => handleDelete(item?.key)}
            >
              Delete
            </Button>
          </Space>
        );
      },
      //   width:'%'
    },
  ];

  const tableData: DataType[] = admins?.map(
    ({ _id, email, name, role, phoneNumber, status }) => ({
      key: _id,
      name: name,
      email,
      role,
      phoneNumber,
      status,
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
        scroll={{ x: 400 }}
        dataSource={tableData}
        onChange={onChange}
      />
    </Col>
  );
};

export default ManageAdmin;
