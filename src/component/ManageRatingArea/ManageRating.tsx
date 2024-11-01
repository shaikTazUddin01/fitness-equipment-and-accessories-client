import { Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks/hooks";
import { TProduct } from "../../Type";
import { useCreateReviewMutation, useGetReviewQuery } from "../../redux/features/review/reviewApi";
import { toast } from "sonner";
import { TReview } from "../../Type/review";

const ManageRating = ({ product }: { product: TProduct }) => {
  const [createReview] = useCreateReviewMutation();
  const user = useAppSelector((state) => state.userLoginInfo.user);
  const [rating, setRating] = useState<number>(5);

  const { data: review ,isLoading} = useGetReviewQuery(product?._id);

  if (isLoading) {
    return <p>loading...</p>
  }

  const reviews=review?.data?.review
// console.log(reviews);
  const sumOfTotalReview=reviews?.reduce((acc:number,curr:TReview)=>acc+Number(curr?.rating),0)
const aveRating=Number(sumOfTotalReview/reviews?.length);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const toastId=toast.loading("sending...")
    try {
      if (rating) {
        const message = e.target.review.value;
        // console.log(message);
        const reviewInFo = {
          user:user?.id,
          productId: product?._id,
          rating: rating,
          review: message,
        };
        const res = await createReview(reviewInFo);
        if (res.data) {
          toast.success("rating and review send success",{id:toastId,duration:1000});
          (e.target as HTMLFormElement).review.value = "";
        }else{
          toast.warning("something went wrong please try again",{id:toastId,duration:1000})
        }
      }
    } catch (error:any) {
      toast.error(error?.message);
    }
  };

  return (
    <div>
      {/* show rating area */}
      {/* <h1 className="pt-6">Reting of {product?.name}</h1> */}
      {
        reviews && aveRating ?
      
      <div className="flex gap-10 justify-center items-center pt-8">
        {/* rating area left side */}

        <div className="">
          <h1 className="text-6xl font-medium text-center">
            {aveRating}<span className="text-[#686868] text-5xl">/5</span>
          </h1>
          <Rate
            disabled
            allowHalf
            defaultValue={Number(aveRating)}
            className="custom-rate text-3xl"
          />
          <h1 className="text-center">{reviews?.length} Ratings </h1>
        </div>
      </div>
      :""
      }
      {/* right side */}
      {/* <div className="w-full mt-5">
        
        <div className="flex justify-center items-center gap-5">
          <div className="w-[50%]">
            <Rate
              disabled
              allowHalf
              defaultValue={5}
              className="custom-rate text-[16px]"
            />
          </div>
          <div className="bg-textSecondary h-3  rounded w-[80%]"></div>
          <div className="w-[10%]">
            <h1>15</h1>
          </div>
        </div>
      
        <div className="flex justify-center items-center gap-5">
          <div className="w-[50%]">
            <Rate
              disabled
              allowHalf
              defaultValue={4}
              className="custom-rate text-[16px]"
            />
          </div>
          <div className="bg-textSecondary h-3  rounded w-[80%]"></div>
          <div className="w-[10%]">
            <h1>10</h1>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-5">
          <div className="w-[50%]">
            <Rate
              disabled
              allowHalf
              defaultValue={3}
              className="custom-rate text-[16px]"
            />
          </div>
          <div className="bg-textSecondary h-3  rounded w-[80%]"></div>
          <div className="w-[10%]">
            <h1>0</h1>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-5">
          <div className="w-[50%]">
            <Rate
              disabled
              allowHalf
              defaultValue={2}
              className="custom-rate text-[16px]"
            />
          </div>
          <div className="bg-textSecondary h-3  rounded w-[80%]"></div>
          <div className="w-[10%]">
            <h1>1</h1>
          </div>
        </div>
       
        <div className="flex justify-center items-center gap-5">
          <div className="w-[50%]">
            <Rate
              disabled
              allowHalf
              defaultValue={1}
              className="custom-rate text-[16px]"
            />
          </div>
          <div className="bg-[#d2d2d2] h-3  rounded w-[80%]"></div>
          <div className="w-[10%]">
            <h1>0</h1>
          </div>
        </div>
      </div> */}
      {/* sent product rating */}
      <div className="pt-10">
        <h1>Leave a Rating & Review</h1>
        <div className="text-center pt-3">
          <Rate
            allowHalf
            defaultValue={5}
            className="custom-rate text-3xl"
            onChange={(value) => setRating(value)}
          />
        </div>
        <div className="max-auto flex justify-center ">
          <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit}>
            <TextArea
              rows={4}
              placeholder="Send Your review"
              className=""
              name="review"
              required
            />
            {
              user?
              <button
              className="w-full btn btn-sm bg-textSecondary hover:bg-hoverSecondart text-white py-1 px-3 rounded"
              type="submit"
            >
              Submit
            </button>
            :
            <a href="/login"
           
              className="w-full btn btn-sm bg-textSecondary hover:bg-hoverSecondart
               text-white py-1 px-3 rounded"
             
            >
              Submit
            
            </a>
            }
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageRating;
