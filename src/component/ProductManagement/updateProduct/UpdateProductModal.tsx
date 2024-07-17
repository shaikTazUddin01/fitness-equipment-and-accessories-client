// import { TProduct } from "../../../Type";
import UpdateDetalis from "./UpdateDetalis";

const UpdateProductModal = ({ product }: { product: any }) => {

  console.log("------->>",product);
 
  return (
    <div>
      <button
        className="btn btn-warning "
        onClick={() => {
          const modal = document.getElementById(`${product?._id}`);
          if (modal) {
            (modal as HTMLDialogElement).showModal();
          }
        }}
      >
        Edit
      </button>
      <dialog id={`${product?._id}`} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">
              ✕
            </button>
          </form>
          <UpdateDetalis product={product} ></UpdateDetalis>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProductModal;
