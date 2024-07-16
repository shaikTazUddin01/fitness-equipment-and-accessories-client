import { useAppSelector } from "../redux/hooks/hooks";
import CartTableRow from "../component/cart/CartTableRow";
// import { AddProductToCart } from '../redux/features/myCart/myCart.slice';

const Cart = () => {
  const cartProduct = useAppSelector((state) => state.productCard?.productCart);

  console.log(cartProduct);
  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto mt-16">
        <table className="table text-white  text-center">
          {/* head */}
          <thead className="text-white">
            <tr className="font-bold text-[16px]">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Quentity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartProduct?.map((item: any) => (
              <CartTableRow key={item?._id} mycart={item}></CartTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
