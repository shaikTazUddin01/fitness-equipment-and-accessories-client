import { toast } from "sonner";

const PlaceOrder = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    toast.success("successFully you place this order");
  const dialog=  document.getElementById("place_order_btn") as HTMLDialogElement
  dialog.close()
  };
  return (
    <div className="mt-6">
      <button
        className="btn btn-success w-full"
        onClick={() => (document.getElementById("place_order_btn") as HTMLDialogElement).showModal()}
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
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Address</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                className="input input-bordered"
                required
              />
            </div>
            <button className="btn btn-success">Order Now</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default PlaceOrder;
