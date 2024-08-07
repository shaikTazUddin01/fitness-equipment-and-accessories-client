import { toast } from "sonner";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useFinduserQuery } from "../../redux/features/auth/User/user";
import THForm from "../form/THForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import THInput from "../form/THInput";
import Spring from "../shared/Loading/Spring";

const PlaceOrder = () => {
  const user = useAppSelector((state) => state.userLoginInfo.user);
  // const email=user.e
  // console.log(user!.user);
  const { data: userinfo, isLoading } = useFinduserQuery(user!.user);

  if (isLoading) {
    return <Spring></Spring>;
  }

  console.log("data", userinfo.data);
  const { name, email, phoneNumber, address } = userinfo.data;
  console.log(name);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   toast.success("successFully you place this order");
  // const dialog=  document.getElementById("place_order_btn") as HTMLDialogElement
  // dialog.close()
  // };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    toast.success("successFully you place this order");
    // const dialog = document.getElementById(
    //   "place_order_btn"
    // ) as HTMLDialogElement;
    // dialog.close();
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
