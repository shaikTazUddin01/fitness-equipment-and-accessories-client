/* eslint-disable no-unsafe-optional-chaining */
import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useFinduserQuery } from "../../redux/features/auth/User/userApi";
import THForm from "../form/THForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import THInput from "../form/THInput";
import Spring from "../shared/Loading/Spring";
import { TProduct } from "../../Type";
import { useCreateOrderMutation } from "../../redux/features/order/orderapi";

const PlaceOrder = ({ CheckOutProduct }: { CheckOutProduct: TProduct }) => {
  const {
    name: pName,
    price,
    category,
    stockQuentity: quentity,
  } = CheckOutProduct;
  //get current user info
  const user = useAppSelector((state) => state.userLoginInfo.user);

  //create order product api
  const [orderProduct] = useCreateOrderMutation();
  // const email=user.e
  // console.log(user!.user);
  const { data: userinfo, isLoading } = useFinduserQuery(user!.user);

  console.log(userinfo);

  // const userData=useAppSelector((state)=>state.userLoginInfo)
  // console.log(userId.user.id);

  if (isLoading) {
    return <Spring></Spring>;
  }

  const { _id,name, email, phoneNumber, address } = userinfo?.data;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading...");
    // required information
    try {
      const orderInFo = {
        userId:_id,
        customerName: data.name,
        customerEmail: data.email,
        customerNumber: data.number,
        customerAddress: data.address,
        productName: pName,
        productCategory: category,
        productPrice: price,
        totalItem: quentity,
        delivaryFee: 2,
        totalPrice: quentity * price,
        paymentStatus: "cash on delivery",
      };
      const res = await orderProduct(orderInFo);
      console.log(res);
      if (res.data.data) {
        toast.success("successFully you place this order", {
          id: toastId,
        });
        const dialog = document.getElementById(
          "place_order_btn"
        ) as HTMLDialogElement;
        dialog.close();
      } else
        toast.error("something is wrong please try again", {
          id: toastId,
          duration: 1500,
        });
      //  const totalPayment= ,
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div className="mt-6">
      <button
        className="btn btn-success w-full"
        onClick={() =>
          (
            document.getElementById("place_order_btn") as HTMLDialogElement
          ).showModal()
        }
      >
        Place Order
      </button>
      <dialog id="place_order_btn" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* <form className="card-body" onSubmit={handleSubmit}> */}
          <THForm onSubmit={onSubmit}>
            <THInput
              label="Name"
              type="text"
              name="name"
              defaultFieldValue={name}
            ></THInput>
            <THInput
              label="Email"
              type="email"
              name="email"
              defaultFieldValue={email}
            ></THInput>
            <THInput
              label="Phone Number"
              type="text"
              name="number"
              defaultFieldValue={phoneNumber}
            ></THInput>
            <THInput
              label="Address"
              type="text"
              name="address"
              defaultFieldValue={address}
            ></THInput>
            <div className="flex mt-4">
              <button className="btn btn-success w-full">Order Now</button>
            </div>
            {/* </form> */}
          </THForm>
        </div>
      </dialog>
    </div>
  );
};

export default PlaceOrder;
