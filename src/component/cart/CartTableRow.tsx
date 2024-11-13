import { toast } from "sonner";
import {
  decrementProductInToCart,
  productCart,
  removedItem,
} from "../../redux/features/myCart/myCart.slice";
import { useGetSingleProductsQuery } from "../../redux/features/products/products.api";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import Swal from "sweetalert2";
import { TProduct } from "../../Type";
import { MdDelete, MdOutlineRemoveShoppingCart, MdShoppingCartCheckout } from "react-icons/md";

const CartTableRow = ({ mycart }: { mycart: TProduct }) => {
  const { images, name, price, _id, stockQuentity } = mycart;
  const { data } = useGetSingleProductsQuery({ _id });
  const productCard = useAppSelector((state) => state.productCard.productCart);
  const dispatch = useAppDispatch();

  const productStock = data?.data?.stockQuentity ?? 0;
  const myProduct = productCard.find((item: any) => item?._id === _id);

  // Decrease Product Quantity
  const handleDecrease = () => {
    const decrease = dispatch(decrementProductInToCart(mycart));

    if (decrease.payload.stockQuentity == 1) {
      toast.warning("You can't decrease under 1");
    }
  };

  // Increase Product Quantity
  const handleIncrease = () => {
    if (productStock > myProduct!.stockQuentity) {
      return dispatch(productCart(mycart));
    } else {
      toast.warning("No more product in the stock");
    }
  };

  // Remove Product
  const handleRemoveProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will remove the product from your cart.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removedItem(mycart));
        toast.success("Item removed successfully");
      }
    });
  };

  return (
    <tr className="border-b last:border-0">
      <td>
        <div className="flex items-center">
          <div className="h-12 w-12 rounded overflow-hidden mx-auto">
            <img src={images} alt={`${name} image`} className="object-cover w-full h-full" />
          </div>
          
        </div>
      </td>
      <td>
      <span className="ml-4 font-medium">{name}</span>
      </td>
      <td className="text-center font-semibold">$ {price.toFixed(2)}</td>
      <td className="flex items-center justify-center gap-2">
        <button
          onClick={handleDecrease}
          className="btn btn-xs"
          // className={`btn btn-xs ${
          //   myProduct && myProduct.stockQuentity === 1 ? "btn-disabled" : ""
          // }`}
          // disabled={myProduct && myProduct.stockQuentity === 1}
        >
          -
        </button>
        <span className="border px-4 py-1 rounded-md text-center">
          {myProduct ? myProduct.stockQuentity : stockQuentity}
        </span>
        <button
          onClick={handleIncrease}
          className="btn btn-xs"
          // disabled={myProduct && myProduct.stockQuentity >= productStock}
        >
          +
        </button>
      </td>
      <td className="text-center font-semibold">$ {(price * (myProduct?.stockQuentity || 1)).toFixed(2)}</td>
      <td className="flex justify-center gap-2" >
        <button
          onClick={handleRemoveProduct}
          className="btn btn-error btn-xs text-white"
          title="Remove from cart"
        >
          <MdDelete />
        </button>
        {productStock >= (myProduct?.stockQuentity || 0) ? (
          <a
            href={`/checkout/${_id}`}
            className="btn btn-success btn-xs text-white"
            title="Order Now"
          >
            <MdShoppingCartCheckout />
          </a>
        ) : (
          <button className="btn btn-disabled btn-xs " title="Out of stock">
            <MdOutlineRemoveShoppingCart />
          </button>
        )}
      </td>
    </tr>
  );
};

export default CartTableRow;
