import { Button, Col, Space, Table, TableColumnsType, TableProps } from "antd";
// import ProductsRow from "../../../component/ProductManagement/ProductsRow";

import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../../redux/features/products/products.api";
// import { TProduct } from "../../../Type";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { TProduct } from "../../../Type";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import UpdateProduct from "./updateProduct/UpdateProduct";
import { MdDeleteOutline } from "react-icons/md";

interface DataType {
  key: React.Key;
  name: string;
  images: string;
  price: number;
  category: string;
  stockQuentity: number;
  isFeature: string;
}

const ManageProduct = () => {
  const { data: Pdata, isLoading } = useGetProductsQuery({});
  const [deleteProductItem] = useDeleteProductMutation();

  const products: TProduct[] = Pdata?.data?.result;
  // console.log(products);

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

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
      dataIndex: "images",
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
    },
    {
      title: " Price ",
      dataIndex: "price",
      render: (price) => <span>${price}</span>,
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "IsFeature",
      dataIndex: "isFeature",
    },
    {
      title: "Stock Quentity",
      dataIndex: "stockQuentity",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        // console.log("item", item);
        return (
          <Space>
            {/* <a href={`/admin/update-product/${item?.key}`}>
              <Button type="primary" >Edit</Button>
            </a> */}

            <UpdateProduct items={item}></UpdateProduct>

            <Button
            className="text-xl"
              type="primary"
              danger
              onClick={() => handleDelete(item?.key)}
            >
              <MdDeleteOutline/>
            </Button>
          </Space>
        );
      },
      //   width:'%'
    },
  ];

  const tableData: DataType[] = products?.map(
    ({ _id, images, name, price, category, stockQuentity, isFeature ,detail}) => ({
      key: _id,
      images: images,
      name: name,
      price: price,
      isFeature: isFeature,
      stockQuentity: stockQuentity,
      category: category,
detail:detail
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
    <Col>
    <h1 className="text-2xl font-medium text-center mb-2">Manage Product</h1>
      <Table
        columns={columns}
        scroll={{ x: 400 }}
        dataSource={tableData}
        onChange={onChange}
      />
    </Col>
  );
};

export default ManageProduct;
