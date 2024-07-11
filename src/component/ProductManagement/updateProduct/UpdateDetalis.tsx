import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "../../../redux/features/products/products.api";
import { toast } from "sonner";

const UpdateDetalis = ({ id }: { id: string }) => {
  const { register, handleSubmit, reset } = useForm();

  const [updateProduct] = useUpdateProductMutation();
  const onSubmit = async (data: Record<string, string>) => {
    const toastId = toast.loading("Loading...");
    try {
      const updateProductInFo = {
        detail: data?.description,
      };
      console.log(updateProductInFo);
      const res = await updateProduct({ id, updateProductInFo });
      console.log(res);
      if (res.data) {
        toast.success("update successfully", {
          id: toastId,
          duration: 1500,
        });

        const modal = document.getElementById("update_modal");
        reset();
        if (modal) {
          (modal as HTMLDialogElement).close();
        }
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div className="card bg-base-100 w-full shadow-2xl mt-2">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            placeholder="Product description"
            className="input input-bordered text-black"
            {...register("description")}
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateDetalis;
