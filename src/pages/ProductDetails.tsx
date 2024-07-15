import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/shared/Loading/Loading";
import { TProduct } from "../Type";
import { useDispatch } from "react-redux";

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
    const isExists = mycartProduct?.find((item) => item?._id == product?._id);

    console.log(isExists);
    if (isExists) {
      const myCartProductQuentity = isExists?.stockQuentity;
      console.log(product?.stockQuentity);

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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{product?.name}</h1>
            <p className="py-6">{product?.detail}</p>
            <button
              className="btn btn-primary"
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
