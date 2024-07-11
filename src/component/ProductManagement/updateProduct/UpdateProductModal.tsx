import UpdateDetalis from "./UpdateDetalis";

const UpdateProductModal = (id : Record<string,string>) => {
  console.log("object",id.id);
  return (
    <div>
      <button
        className="btn btn-primary "
        onClick={() => {
          const modal = document.getElementById("update_modal");
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Edit
      </button>
      <dialog id="update_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
              ✕
            </button>
          </form>
          <UpdateDetalis id={id.id} ></UpdateDetalis>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProductModal;
