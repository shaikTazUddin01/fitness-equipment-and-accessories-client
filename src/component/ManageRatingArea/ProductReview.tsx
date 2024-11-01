import { Rate } from "antd";
import userImage from "../../assets/Userimage.png";
import { LiaCommentsSolid } from "react-icons/lia";
import { useGetReviewQuery } from "../../redux/features/review/reviewApi";
import { TReview } from "../../Type/review";
import { useState } from "react";

const ProductReview = ({ id }: { id: string }) => {
  const [seeAll, setSeeAll] = useState(false);
  const { data: review } = useGetReviewQuery(id);
  console.log( review);
  return (
    <div className="p-5 mt-5">
      <h1>Product Review</h1>
      {/* review section */}

      {
        review?.data== null  && <p className="text-center text-xl pt-10">Share the First Review..!</p>
      }

      {seeAll
        ? review?.data?.review?.map((item: TReview) => {
            return (
              <div key={item?._id}>
                <div className="flex items-center pt-5">
                  <div>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={item?.rating}
                      className="custom-rate "
                    />
                    <div className="flex items-center gap-1">
                      {
                        item?.userId?.image?
                        <img
                          src={item?.userId?.image}
                          className="size-8 rounded-full"
                          alt=""
                        />
                        :
                        <img
                          src={userImage}
                          className="size-8 rounded-full"
                          alt=""
                        />
                      }
                      <h1>{item?.userId?.name}</h1>
                    </div>
                  </div>
                </div>
                {/* user comment */}
                <div className="">
                  <p className="flex items-center gap-1 pt-1 px-2">
                    <span className="text-xl">
                      <LiaCommentsSolid />
                    </span>{" "}
                    {item?.review}
                  </p>
                  <div className="bg-slate-300 h-[1px] mx-auto mt-5 w-full"></div>
                </div>
              </div>
            );
          })
        : review?.data?.review?.slice(0, 4)?.map((item: TReview) => {
            return (
              <div key={item?._id}>
                <div className="flex items-center pt-5">
                  <div>
                    <Rate
                      disabled
                      allowHalf
                      defaultValue={item?.rating}
                      className="custom-rate "
                    />
                    <div className="flex items-center gap-1">
                      <img
                        src={item?.userId?.image}
                        className="size-8 rounded-full"
                        alt=""
                      />
                      <h1>{item?.userId?.name}</h1>
                    </div>
                  </div>
                </div>
                {/* user comment */}
                <div className="">
                  <p className="flex items-center gap-1 pt-1 px-2">
                    <span className="text-xl">
                      <LiaCommentsSolid />
                    </span>{" "}
                    {item?.review}
                  </p>
                  <div className="bg-slate-300 h-[1px] mx-auto mt-5 w-full"></div>
                </div>
              </div>
            );
          })}
      {review?.data?.review?.length > 5 && seeAll==false && (
        <div className="flex justify-center mt-5">
          <button
            className="btn btn-sm bg-textSecondary hover:bg-hoverSecondart text-white"
            onClick={() => setSeeAll(true)}
          >
            See more..
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductReview;
