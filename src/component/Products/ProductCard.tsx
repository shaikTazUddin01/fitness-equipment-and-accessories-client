import { Button, Rate } from "antd";
import { TProduct } from "../../Type";

import "./rate.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { toast } from "sonner";
import { productCart } from "../../redux/features/myCart/myCart.slice";
const ProductCard = ({ product }: { product: TProduct }) => {
  const { _id, name, price, images } = product;

  // ---

  const dispatch = useAppDispatch();
  // get my cart
  const mycartProduct = useAppSelector(
    (state) => state.productCard?.productCart
  );

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
  // ---

  return (
    <div className="card bg-base-100  shadow-xl rounded-md hover:shadow-2xl">
      <a href={`/productDetails/${_id}`}>
        <figure className="px-10 pt-10 h-[150px]">
          <img src={images} alt={name} className="rounded-xl w-[95%]" />
        </figure>
      </a>
      <div className="card-body">
        <a href={`/productDetails/${_id}`}>
          <h2 className="hover:text-textSecondary hover:underline">{name}</h2>
          {/* <h2 className="-mt-3 ">{category}</h2> */}
          <p className="text-textSecondary font-semibold">
            ৳{price}{" "}
            <span className="text-gray-400 line-through font-normal">
              ${price + 15}
            </span>
          </p>
        </a>
        <span className="flex items-center gap-2">
          <Rate disabled allowHalf defaultValue={4} className="custom-rate" />
          <p className="text-sm">(65)</p>
        </span>
        <Button
          className="bg-textSecondary text-white"
          onClick={() => handleAddToCart()}
        >
          {" "}
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
