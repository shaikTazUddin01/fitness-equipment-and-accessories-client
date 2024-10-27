import { useCreateProductMutation } from "../../../redux/features/products/products.api";
import { useGetCategoryQuery } from "../../../redux/features/category/category.api";
// import Spring from "../../../component/shared/Loading/Spring";
import { toast } from "sonner";
import { Col, Row } from "antd";
import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import THTextArea from "../../../component/form/THTextArea";
import THSelect from "../../../component/form/THSelect";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [createProduct] = useCreateProductMutation();
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const navigate = useNavigate();
  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  const categoris = data?.data;
  //create a new product
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Loading...", {
      duration: 2000,
    });
    console.log(data);
    try {
      const productInFo = {
        name: data?.name,
        images: data?.image,
        price: data?.price,
        detail: data?.description,
        category: data?.category,
        stockQuentity: data?.stockQuentity,
      };
      const res = await createProduct(productInFo);

      if (res.data) {
        toast.success("successfully you create a new product", {
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
      <Col 
      
      xs={{ span: 24 }}
      sm={{ span: 24 }}
      md={{ span: 20 }}
      lg={{ span: 20 }}
      xxl={{ span: 18 }}
      >
          <h1 className="text-2xl font-semibold text-center mb-2">Add New Product</h1>
        <div className="card bg-base-100 w-full shadow-2xl mb-5">
          {/* <form className="card-body" onSubmit={handleSubmit(onSubmit)}> */}
          {/* <h1 className="text-3xl font-semibold text-center mt-4">Create New Product</h1> */}
          <THForm onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-2">

            <THInput
              name={"name"}
              label={"Product Name"}
              type={"text"}
            ></THInput>
            <THInput
              name={"image"}
              label={"Image Url"}
              type={"text"}
            ></THInput>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-2">
            <THInput
              name={"price"}
              label={"Product Price"}
              type={"number"}
            ></THInput>

            <THSelect
              label="Product Category"
              name="category"
              items={categoris}
            ></THSelect>
            </div>
            <THInput
              name={"stockQuentity"}
              label={"Stock Quentity"}
              type={"number"}
            ></THInput>
            <THTextArea
              label="Product description"
              name="description"
            ></THTextArea>

            <div className="form-control mt-6">
              <button className="btn btn-neutral" type="submit">
                Create Product
              </button>
            </div>
          </THForm>
        </div>
      </Col>
    </Row>
  );
};

export default CreateProduct;
