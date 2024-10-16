import CartTableRow from "../../component/cart/CartTableRow";
import { useAppSelector } from "../../redux/hooks/hooks";




const Cart = () => {
  const cartProduct = useAppSelector((state) => state.productCard?.productCart);


 
  console.log(cartProduct.length);
  return (
    <div className="min-h-screen px-3 xl:px-0 pb-20 max-w-7xl mx-auto" >
      {cartProduct?.length > 0 ? (
        <div className="overflow-x-auto mt-16">
          <table className="table text-white  text-center">
            {/* head */}
            <thead className="text-white">
              <tr className="font-bold text-[16px]">
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                {/* <th>Category</th> */}
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
      ) : (
        <div>
          <h1 className="text-center text-3xl text-white mt-10">
            No Item Added To The Cart..!
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
