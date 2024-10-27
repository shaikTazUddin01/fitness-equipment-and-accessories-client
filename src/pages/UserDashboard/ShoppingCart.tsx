import CartTableRow from "../../component/cart/CartTableRow";
import { useAppSelector } from "../../redux/hooks/hooks";


const ShoppingCart = () => {
    const cartProduct = useAppSelector((state) => state.productCard?.productCart)||[];


 
    // console.log(cartProduct.length);
    return (
      <div className="min-h-[80vh] max-w-7xl flex flex-col" >
        {cartProduct?.length > 0 ? (
            <div>
              <h1 className="text-3xl font-semibold text-center mb-5">Shopping Cart</h1>
            <div className="overflow-x-auto bg-white rounded-xl w-full px-10 ">
            <table className="table   text-center">
              {/* head */}
              <thead className="">
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
          </div>
        ) : (
          <div>
            <h1 className="text-center text-3xl mt-10">
              No Item Added To The Cart..!
            </h1>
          </div>
        )}
      </div>
    );
  
};

export default ShoppingCart;