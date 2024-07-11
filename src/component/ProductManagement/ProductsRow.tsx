import Swal from "sweetalert2";
import { useDeleteProductMutation } from "../../redux/features/products/products.api";
import { TProduct } from "../../Type";
import UpdateProductModal from "./updateProduct/UpdateProductModal";
import { toast } from "sonner";

const ProductsRow = ({ product }: { product: TProduct }) => {
  const { images, name, price, _id, category, stockQuentity } = product;

  const [deleteProductItem] = useDeleteProductMutation();
//handle delete product
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "To Delete This Product",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProductItem(id);
        if (res) {
          toast.warning("Successfully you Delete This Product", {
            duration: 1500,
          });
        }
      }
    });
  };
  return (
    <tr className="">
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img
              src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>${price}</td>
      <td>{category}</td>
      <td>{stockQuentity}</td>
      <td>
        <div className="flex gap-2 justify-center items-center">
          <button
            className="btn btn-error btn-xs"
            onClick={() => handleDelete(_id)}
          >
            Delete
          </button>
          <UpdateProductModal id={_id}></UpdateProductModal>
        </div>
      </td>
    </tr>
  );
};

export default ProductsRow;
