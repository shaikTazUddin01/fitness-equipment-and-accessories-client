import { useParams } from "react-router-dom";
import { TProduct } from "../../Type";
import { useAppSelector } from "../../redux/hooks/hooks";
import PlaceOrder from "../../component/checkOut/PlaceOrder";
// import { useFinduserQuery } from "../../redux/features/auth/User/user";

const CheckOut = () => {
  const { id } = useParams();
  const products = useAppSelector((state) => state.productCard.productCart);

  

  const CheckOutProduct = products.find((item: TProduct) => item?._id == id);

  const {
    name,
    images,
    price,
    category,
    stockQuentity: quentity,
  } = CheckOutProduct as TProduct;

  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row gap-10 max-w-7xl mx-auto justify-center items-center p-5 lg:p-0">
      {/* order details section */}
      <div className="flex flex-col md:flex-row bg-white items-center w-full md:w-[70%] md:h-[350px] px-10 gap-8 ">
        <div>
          <img src={images} alt="" className="w-[350px]" />
        </div>
        <div className="w-full pr-10 ">
          <h1 className="text-2xl">Product Name : {name}</h1>
          <h3 className="pb-2">Category : {category}</h3>
          <div className="flex items-center justify-between py-2">
            <h1 className="text-[16px]">Qty : {quentity}</h1>
            <h3>${price}</h3>
          </div>
          <div className="flex items-center justify-between py-2">
            <h1 className="text-[16px]">Delivery Fee :</h1>
            <h3>$2</h3>
          </div>
          <div className="bg-primaryColor w-full h-[2px]"></div>
          <div className="flex justify-between pt-2">
            <h1>{quentity} Item(s) . Subtotal : </h1>
            <h1>${price * quentity + 2}</h1>
          </div>
        </div>
      </div>

      {/* order summery section */}
      <div className="bg-white w-full md:w-[30%] rounded-xl p-10 md:h-[350px] ">
        <h1 className="text-xl font-semibold pb-2">Order Summary</h1>
        <div className="bg-primaryColor w-full h-[2px]"></div>
        <div className="flex justify-between pt-2 text-[16px]">
          <h1>Price Per Product</h1>
          <h1>${price}</h1>
        </div>
        <div className="flex justify-between pt-2 text-[16px]">
          <h1>items</h1>
          <h1>{quentity}</h1>
        </div>
        <div className="flex justify-between py-2 text-[16px]">
          <h1>Delivery Fee</h1>
          <h1>$2</h1>
        </div>
        <div className="bg-primaryColor w-full h-[2px]"></div>
        <div className="flex justify-between pt-2 text-[16px]">
          <h1>Total Price </h1>
          <h1>${price * quentity + 2}</h1>
        </div>
        {/* <div className="flex justify-between pt-2 text-[16px] text-[#e76903]">
          <h1>Payment</h1>
          <h1>Cash On Delivary</h1>
        </div> */}

        <div>
          <PlaceOrder CheckOutProduct={CheckOutProduct as TProduct}></PlaceOrder>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
