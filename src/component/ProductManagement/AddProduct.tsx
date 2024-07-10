import AddProductModal from "./AddProductModal";

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
          <AddProductModal></AddProductModal>
        </div>
      </dialog>
    </div>
  );
};

export default AddProduct;
