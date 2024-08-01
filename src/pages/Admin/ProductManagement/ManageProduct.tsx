import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import ProductsRow from "../../../component/ProductManagement/ProductsRow";
import Spring from "../../../component/shared/Loading/Spring";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/features/products/products.api";
import { TProduct } from "../../../Type";
import Swal from "sweetalert2";
import { toast } from "sonner";

interface DataType {
  key: React.Key;
  name: string;
  _id: string;
  images: string;
  price: number;
  category: string;
  stockQuentity: string;
}

const ManageProduct = () => {
  const { data: Pdata, isLoading } = useGetProductsQuery({});

  const products = Pdata?.data;

  if (isLoading) {
    return <Spring></Spring>;
  }

  const [deleteProductItem] = useDeleteProductMutation();
  //handle delete product
  const handleDelete = async (id: string) => {
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
        const res = await deleteProductItem(id);
        if (res) {
          toast.warning("Successfully you Delete This Product", {
            duration: 1500,
          });
        }
      }
    });
  };

  const columns: TableColumnsType<DataType> = [
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
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.name.includes(value as string),
      width: "30%",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Stock Quentity",
      dataIndex: "stockQuentity",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        console.log("item", item);
        return (
          <Space>
            <Button type="primary">Edit</Button>
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
    },
  ];

  const tableData: DataType[] = products.map(
    ({ _id, images, name, price, category, stockQuentity }) => ({
      key: _id,
      image: images,
      name: name,
      price: `$ ${price}`,
      stockQuentity: stockQuentity,
      category: category,
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

  return <Table columns={columns} dataSource={tableData} onChange={onChange} />;
};

export default ManageProduct;
