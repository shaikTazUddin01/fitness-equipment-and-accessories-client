import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../../redux/features/products/products.api";

const AddProductModal = () => {
  const { register, handleSubmit } = useForm();

  const [createProduct] = useCreateProductMutation();
  const onSubmit = async (data: any) => {
    const productInFo = {
      name: data?.name,
      images: data?.image,
      price: data?.price,
      productDetail: data?.description,
      category: data?.category,
    };
    const res = await createProduct(productInFo);
    console.log(res);
    if (res.data) {
      const modal = document.getElementById("my_modal_3");
      if (modal) {
        (modal as HTMLDialogElement).close();
      }
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

export default AddProductModal;
