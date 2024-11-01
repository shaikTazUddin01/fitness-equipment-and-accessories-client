import { Button, Col, Space, Table, TableColumnsType, TableProps } from "antd";
import { useAppSelector } from "../../redux/hooks/hooks";

import {
  useDeleteSpecificReviewMutation,
  useGetReviewByUserQuery,
} from "../../redux/features/review/reviewApi";
// import UpdateCategory from "../Admin/CategoryManagement/UpdataCategory";
import { toast } from "sonner";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";

interface DataType {
  key?: string | undefined;
  no: number;
  productImg: string;
  productname: string;
  rating: string;
  review: string;
}

const MyReviews = () => {
  const { id }: any = useAppSelector((state) => state.userLoginInfo.user);
  const { data: review, isLoading } = useGetReviewByUserQuery(id);
  const [deleteReview] = useDeleteSpecificReviewMutation();
  // console.log(review);
  if (isLoading) {
    return <p>loading...</p>;
  }
  console.log("review-->", review?.data);

  const handleDelete = async (reviewId: string, userReviewId: string) => {
    const toastId = toast.loading("deleting...");
    try {
      console.log(userReviewId);
      const data = {
        userReviewId: userReviewId,
        reviewId: reviewId,
      };
      const res = await deleteReview(data);
      if (res?.data) {
        toast.success("delete your review", { id: toastId, duration: 1000 });
      } else {
        toast.error("something went wrong", { id: toastId, duration: 1000 });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "No .",
      dataIndex: "no",
    },
    {
      title: "productImg",
      dataIndex: "productImg",
      render: (productImg: string) => (
        <img
          src={productImg}
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
      dataIndex: "productname",
    },

    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Review",
      dataIndex: "review",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => {
        console.log("object", item?.userReviewId);
        return (
          <Space>
            <Button
              type="primary"
              danger
              className="text-xl"
              onClick={() => handleDelete(item?.reviewId, item?.userReviewId)}
            >
              <MdDelete />
            </Button>
            <a href={`/productDetails/${item?.productId}`}>
              <Button type="primary" className="text-xl">
                <MdRemoveRedEye />
              </Button>
            </a>
          </Space>
        );
      },
      width: "10%",
      //   width:'%'
    },
  ];

  const tableData: DataType[] = review?.data?.map((item: any, idx: number) => ({
    key: idx,
    userReviewId: item?.review?._id,
    productId: item?.productId,
    reviewId: item?._id,
    no: idx + 1,
    productImg: item?.productDetails[0]?.images,
    productname: item?.productDetails[0]?.name,
    rating: item?.review?.rating,
    review: item?.review?.review,
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
    <Col className="">
      <h1 className="text-3xl text-center mb-5 font-medium">
        All Given Reviews
      </h1>
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

export default MyReviews;
