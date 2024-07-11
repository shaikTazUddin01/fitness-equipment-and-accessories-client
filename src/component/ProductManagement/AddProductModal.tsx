import AddProduct from "./AddProduct";


const AddProductModal = () => {
  return (
    <div>
      <button
        className="btn btn-primary "
        onClick={() => {
          const modal = document.getElementById("create_product");
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Create Product
      </button>
      <dialog id="create_product" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <AddProduct></AddProduct>
        </div>
      </dialog>
    </div>
  );
};

export default AddProductModal;
