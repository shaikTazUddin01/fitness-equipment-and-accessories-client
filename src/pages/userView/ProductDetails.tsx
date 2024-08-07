import { useParams } from "react-router-dom";

import { toast } from "sonner";
import { useGetSingleProductsQuery } from "../../redux/features/products/products.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import Spring from "../../component/shared/Loading/Spring";
import { productCart } from "../../redux/features/myCart/myCart.slice";


const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductsQuery({ _id: id });

  const product = data?.data;

  const dispatch = useAppDispatch();
  // get my cart
  const mycartProduct = useAppSelector(
    (state) => state.productCard?.productCart
  );

  if (isLoading) {
    return <Spring></Spring>;
  }
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
      <div className=" hero bg-base-200 min-h-screen ">
        <div className="flex  flex-col gap-10 lg:flex-row px-5 md:px-20 my-16 xl:my-0 items-center ">
          <div className="w-full lg:w-[40%] md:bg-white lg:bg-none md:shadow-2xl flex justify-center rounded-xl">
            <img src={product?.images} className="max-w-sm rounded-lg w-full" />
          </div>
          <div className=" lg:w-[60%]">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              {product?.name}
            </h1>
            <h1 className="text-lg ">category : {product?.category}</h1>
            <p className="py-6 text-justify">{product?.detail}</p>
            <p className=" text-xl">
              {" "}
              <span className="font-bold">Price :</span> ${product?.price}
            </p>
            <p className="pb-2 text-xl">
              <span className="font-bold">StockQuentity :</span>{" "}
              {product?.stockQuentity} piece
            </p>
            <button
              className="btn btn-neutral"
              onClick={() => handleAddToCart()}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
