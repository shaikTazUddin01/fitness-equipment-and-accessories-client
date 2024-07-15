import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/shared/Loading/Loading";
import { TProduct } from "../Type";
import { toast } from "sonner";
import { productCart } from "../redux/features/myCart/myCart.slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";

const ProductDetails = () => {
  const { id } = useParams();

  //   console.log(id);
  const [product, setProduct] = useState<TProduct | null>(null);
  const dispatch = useAppDispatch();
  // get my cart
  const mycartProduct = useAppSelector(
    (state) => state.productCard?.productCart
  );

  console.log("my cart-->", mycartProduct);
  // get products
  useEffect(() => {
    const product = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/product/${id}`);
        const data = await res.json();
        setProduct(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    product();
  }, [id]);
  // console.log(product);
  if (!product) {
    return <Loading></Loading>;
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
        <div className="flex  flex-col lg:flex-row px-20">
          <div className="w-[40%]">
            <img
              src={product?.images}
              className="max-w-sm rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="w-[60%]">
            <h1 className="text-5xl font-bold">{product?.name}</h1>
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
              className="bg-primaryColor text-white px-3 py-2 rounded-md hover:shadow-md hover:shadow-secondaryColor"
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
