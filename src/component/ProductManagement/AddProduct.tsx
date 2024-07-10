import React from "react";

const AddProduct = () => {
  return (
    <div>
      <button
        className="btn btn-primary "
        onClick={() => {
          const modal = document.getElementById("my_modal_3");
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Create Product
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Write Product Name"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddProduct;
