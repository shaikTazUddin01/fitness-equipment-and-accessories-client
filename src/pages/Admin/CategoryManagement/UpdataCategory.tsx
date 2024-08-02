import { FieldValues, SubmitHandler } from "react-hook-form";

// import { toast } from "sonner";
import { Col } from "antd";

import { useNavigate, useParams } from "react-router-dom";

import { toast } from "sonner";
import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../redux/features/category/category.api";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";

const UpdateCategory = () => {
  //   const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

  //get id by params
  const { id } = useParams();
  //get single product data
  const { data: Cdata, isLoading } = useGetSingleCategoryQuery(id);
  const [updateCategory] = useUpdateCategoryMutation();

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  const {_id , image, name } = Cdata.data;

  // handle update
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Loading...");
    try {
      const res = await updateCategory({data,_id});
      console.log(res);
      if (res?.data) {
        toast.success("Update SuccessFul", { id: toastId, duration: 1500 });
        navigate("/admin/manage-category")
      }
    } catch (error) {
      toast.error("something is wrong", { id: toastId, duration: 1500 });
    }
  };
  return (
    <div className="flex justify-center items-center ">
      <Col span={24} lg={{ span: 12 }}>
        <div className="card bg-base-100 w-full shadow-2xl mb-5">
          <THForm onSubmit={onSubmit}>
            <THInput
              type="text"
              name="name"
              label="Category Name"
              defaultFieldValue={name}
            ></THInput>
            <THInput
              type="text"
              name="image"
              label="Category Image"
              defaultFieldValue={image}
            ></THInput>

            <div className="form-control mt-6">
              <button className="btn btn-neutral" type="submit">
                Update Category
              </button>
            </div>
          </THForm>
        </div>
      </Col>
    </div>
  );
};

export default UpdateCategory;
