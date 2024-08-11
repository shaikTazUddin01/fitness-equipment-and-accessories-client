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

const CartTableRow = ({ mycart }: { mycart: TProduct }) => {
  const { images, name, price, _id, stockQuentity } = mycart;
  // console.log(mycart);
  const { data } = useGetSingleProductsQuery({ _id });

  const productCard = useAppSelector((state) => state.productCard.productCart);

  const dispatch = useAppDispatch();

  //decrease product
  const handledecrease = () => {
    const decrease = dispatch(decrementProductInToCart(mycart));

    if (decrease.payload.stockQuentity == 1) {
      toast.warning("You can't decrease under 1");
    }
  };

  //product store
  const productStock = data?.data?.stockQuentity;
  // my cart
  const myProduct = productCard.find((item: any) => item?._id == _id);
  //increse product

  const handleIncrease = () => {
    if (productStock > myProduct!.stockQuentity) {
      return dispatch(productCart(mycart));
    } else {
      toast.warning(`only ${productStock} item left in the stock`);
    }

    console.log("incresh");
  };

  //removed product
  const handleRemoveProduct = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Removed This Product InTo Cart !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Removed it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removedItem(mycart));

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <tr className="">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={images} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>$ {price}</td>
      {/* <td>{category}</td> */}
      <td>
        <div className="flex gap-2 justify-center items-center">
          <button onClick={handledecrease}> - </button>
          <span className="border px-4 rounded-md ">{stockQuentity}</span>
          <button onClick={handleIncrease}> + </button>
        </div>
      </td>
      <td>$ {price * myProduct!.stockQuentity}</td>
      <td>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
          <button
            className="btn btn-error btn-md md:btn-xs"
            onClick={handleRemoveProduct}
          >
            Remove product
          </button>

          {productStock >= myProduct!.stockQuentity ? (
            <button className="btn btn-warning  btn-md md:btn-xs">
              <a href={`/cashout/${_id}`}>Order Now</a>
            </button>
          ) : (
            <button className="btn   btn-md md:btn-xs disabled">
              Stock Out
            </button>
          )}
        </div>
      </td>
    </tr>
  );
};

export default CartTableRow;
