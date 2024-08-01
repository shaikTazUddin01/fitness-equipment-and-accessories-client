import { useForm } from "react-hook-form";

// import { toast } from "sonner";
import { Col, Row } from "antd";
import { useGetCategoryQuery } from "../../../../redux/features/category/category.api";
import Spring from "../../../../component/shared/Loading/Spring";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleProductsQuery,
  useUpdateProductMutation,
} from "../../../../redux/features/products/products.api";
import { toast } from "sonner";

const UpdateProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  //get id by params
  const { id } = useParams();
  //get single product data
  const { data: SPdata } = useGetSingleProductsQuery({
    _id: id,
  });
  //update mutacion
  const [updateProduct] = useUpdateProductMutation();

  const { data: CData, isLoading: CisLoading } = useGetCategoryQuery(undefined);
  // use loading
  if ( CisLoading) {
    return <Spring></Spring>;
  }
  // destructring data
  const categoris = CData?.data;
  const { name, price, category, detail, images } = SPdata.data;

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
        navigate("/admin/manage-product");
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <Row justify={"center"} align={"middle"}>
      {/* {id} */}
      <Col sm={24} md={12} lg={{ span: 12, offset: 4 }}>
        <div className="card bg-base-100 w-full shadow-2xl mb-5">
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
                defaultValue={name}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                defaultValue={images}
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
                defaultValue={price}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Category</span>
              </label>

              <select
                className="select input input-bordered w-full "
                {...register("category")}
                defaultValue={category}
              >
                <option disabled selected>
                  Select Category
                </option>
                {categoris?.map((item: any) => {
                  return (
                    <option key={item?._id} value={item?.name}>
                      {item?.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description</span>
              </label>
              <textarea
                placeholder="Product description"
                className="input input-bordered"
                {...register("description")}
                defaultValue={detail}
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral" type="submit">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default UpdateProduct;
