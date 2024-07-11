import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../redux/features/products/products.api";
import { toast } from "sonner";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const [createProduct] = useCreateProductMutation();
  //create a new product
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Loading...");
    try {
      const productInFo = {
        name: data?.name,
        images: data?.image,
        price: data?.price,
        detail: data?.description,
        category: data?.category,
      };
      const res = await createProduct(productInFo);

      if (res.data) {
        toast.success("successfully you create a new product", {
          id: toastId,
          duration: 1500,
        });

        const modal = document.getElementById("create_product");
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
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered"
            {...register("name")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="text"
            placeholder="Product Image Link"
            className="input input-bordered"
            {...register("image")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="number"
            placeholder="Product Price"
            className="input input-bordered"
            {...register("price")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <input
            type="text"
            placeholder="Product Category"
            className="input input-bordered"
            {...register("category")}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            placeholder="Product description"
            className="input input-bordered"
            {...register("description")}
            required
          />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
