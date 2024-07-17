import { useForm } from "react-hook-form";
import { useUpdateProductMutation } from "../../../redux/features/products/products.api";
import { toast } from "sonner";
import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
// import { TProduct } from "../../../Type";

const UpdateDetalis = ({ product }: { product: any }) => {
  const currentProduct = product;
  // console.log("current-->", currentProduct);
  const { _id: id, name,category, images, price, detail } = currentProduct;
  //use reack hook form
  const { register, handleSubmit, reset } = useForm();
  // get category data
  const { data } = useGetCategoryQuery(undefined);
  const categoris = data?.data;
  // console.log("car-->", categoris);
  // update slice
  const [updateProduct] = useUpdateProductMutation();
  // handle update
  const onSubmit = async (data: Record<string, string>) => {
    const toastId = toast.loading("Loading...");
    try {
      const updateProductInFo = {
        name: data?.name,
        images: data?.image,
        price: data?.price,
        detail: data?.description,
        category: data?.category,
      };

      const res = await updateProduct({ id, updateProductInFo });

      if (res.data) {
        toast.success("update successfully", {
          id: toastId,
          duration: 1500,
        });

        const modal = document.getElementById(`${id}`);
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
      <form className="card-body text-black" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            placeholder="Product Name"
            defaultValue={name}
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
            defaultValue={images}
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
            defaultValue={price}
            {...register("price")}
            required
          />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>

          <select
            className="select input input-bordered w-full "
            {...register("category")}
            defaultValue={category}
          >
            <option disabled>Select Category</option>
            {categoris?.map((item: any) => {
              return <option key={item?._id} value={item?.name}>{item?.name}</option>;
            })}
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea
            placeholder="Product description"
            className="input input-bordered "
            defaultValue={detail}
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
