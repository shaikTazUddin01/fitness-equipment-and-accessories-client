import { useParams } from "react-router-dom";

import { toast } from "sonner";
import { useGetSingleProductsQuery } from "../../redux/features/products/products.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import Spring from "../../component/shared/Loading/Spring";
import { productCart } from "../../redux/features/myCart/myCart.slice";
import { Rate } from "antd";
import ManageRating from "../../component/ManageRatingArea/ManageRating";
import ProductReview from "../../component/ManageRatingArea/ProductReview";
import { useGetReviewQuery } from "../../redux/features/review/reviewApi";
import { TReview } from "../../Type/review";
import { FaHome } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductsQuery({ _id: id });

  const product = data?.data;
  // get review section
  const { data: review, isLoading: pLoading } = useGetReviewQuery(id);

  const dispatch = useAppDispatch();
  // get my cart
  const mycartProduct = useAppSelector(
    (state) => state.productCard?.productCart
  );

  if (isLoading) {
    return <Spring></Spring>;
  }
  if (pLoading) {
    return <Spring></Spring>;
  }
  // calculate review
  const reviews = review?.data?.review;
  const sumOfTotalReview = reviews?.reduce(
    (acc: number, curr: TReview) => acc + Number(curr?.rating),
    0
  );
  const aveRating = Number(sumOfTotalReview / reviews?.length);

  // add product to cart
  const handleAddToCart = () => {
    //check product is exists or not
    const isExists = mycartProduct?.find(
      (item: any) => item?._id == product?._id
    );
    if (isExists) {
      // get product quentity
      const myCartProductQuentity = isExists?.stockQuentity;
      //check stock is full or not
      if (product?.stockQuentity > myCartProductQuentity) {
        toast.success("This Product is added to cart", {
          duration: 1000,
        });
        return dispatch(productCart({ ...product, stockQuentity: 1 }));
      } else {
        return toast.warning("This Product is Stock Out", {
          duration: 1000,
        });
      }
    }

    dispatch(productCart({ ...product, stockQuentity: 1 }));
    toast.success("This Product is added to cart", {
      duration: 1000,
    });
  };
  return (
    <div>
      <div className=" max-w-7xl mx-auto min-h-screen pb-10">
        {/*page navigator */}
        <div className="flex gap-2 text-sm items-center my-5 text-[#545454]">
          <a href="/" className="hover:text-textSecondary">
          <span className="text-[16px]">
          <FaHome />
          </span>
          </a>
          <span className="text-[12px]">/</span>
          <a href="/products" className="hover:text-textSecondary">
          <span>Products</span>
          </a>
          <span className="text-[12px]">/</span>
          <a href={`/products/${product?.category}`} className="hover:text-textSecondary">
          <span>{product?.category}</span>
          </a>

          <span className="text-[12px]">/</span>
          <span>{product?.name}</span>
        </div>
        {/* --- */}
        <div className="flex  flex-col gap-10 lg:flex-row px-5 md:px-20 my-16 xl:my-0 items-center bg-white  py-10">
          <div className="w-full lg:w-[40%] md:bg-white lg:bg-none flex justify-center rounded-xl">
            <img src={product?.images} className="max-w-sm rounded-lg w-full" />
          </div>
          <div className=" lg:w-[60%]">
            <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold">
              {product?.name}
            </h1>
            <h1 className="text-lg text-[#474747]">{product?.category}</h1>
            <p className="py-6 text-justify">{product?.detail}</p>
            <p className=" ">
              {" "}
              <span className="font-bold">Brand :</span> No Brand
            </p>
            <p className=" ">
              {" "}
              <span className="font-bold">Price :</span> ${product?.price}
            </p>
            <span className="flex items-center gap-2">
              <Rate
                disabled
                allowHalf
                defaultValue={Number(aveRating)}
                className="custom-rate"
              />
              <p className="text-sm">{reviews?.length}</p>
            </span>
            <p className="pb-2 ">
              <span className="font-bold">StockQuentity :</span>{" "}
              {product?.stockQuentity} piece
            </p>
            <button
              className="rounded-md bg-textSecondary hover:bg-[#d66d17] text-white btn-sm"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>
          </div>
        </div>
        {/* second section */}
        {/* product rating and review area */}
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-3 relative gap-5">
          {/* right side */}
          <div className="p-5 md:max-h-screen  md:sticky md:top-20 md:col-span-1 bg-white rounded ">
            {/* show rating area */}
            <ManageRating product={product} />
          </div>
          {/* left side */}
          <div className=" md:col-span-2 overflow-auto bg-white rounded">
            <ProductReview id={product?._id as string} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
