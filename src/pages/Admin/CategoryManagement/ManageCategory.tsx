import Swal from "sweetalert2";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import {
  useDeleteCategoryMutation,
  useGetCategoryQuery,
} from "../../../redux/features/category/category.api";
import { TCategory } from "../../../Type";
import { toast } from "sonner";
import UpdateCategory from "./UpdataCategory";
import { Button, Col, Space, Table, TableColumnsType, TableProps } from "antd";

interface DataType {
  key: string | undefined;
  no: number;
  image: string;
  category: string;
}

const ManageCategory = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const [deleteCategory] = useDeleteCategoryMutation();
  const categorys: TCategory[] = data?.data;

  console.log("categoris-->", categorys);
  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  const handleDelete = async (id: string | undefined) => {
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
        const res = await deleteCategory(id);
        console.log(res);
        if (res?.data?.data) {
          toast.warning("Successfully you Delete This Product", {
            duration: 1500,
          });
        } else {
          toast.warning("something is wrong please try again..!", {
            duration: 1500,
          });
        }
      }
    });
  };

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
      title: "Category Name",
      dataIndex: "category",
     
    },

    {
      title: "Action",
      key: "action",
      render: (item) => {
        return (
          <Space>
            <UpdateCategory items={item}></UpdateCategory>

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
       width:"10%"
      //   width:'%'
    },
  ];

  const tableData: DataType[] = categorys?.map(({ _id, name, image }, idx) => ({
    key: _id,
    no: idx + 1,
    image: image,
    category: name,
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
    <Col>
      <Table
        columns={columns}
        scroll={{ x: 400 }}
        dataSource={tableData}
        onChange={onChange}
      />
    </Col>
  );

 
};

export default ManageCategory;
