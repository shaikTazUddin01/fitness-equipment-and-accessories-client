import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Col } from "antd";
import { toast } from "sonner";
import { useCreateCategoryMutation } from "../../../redux/features/category/category.api";

const CreateCategory = () => {
    const [createCategory]=useCreateCategoryMutation()
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast.loading("Loading...", {
        duration: 2000,
      });
     
      try {
      
        const res = await createCategory(data);
  
        if (res.data) {
          toast.success("successfully you create a new category", {
            id: toastId,
            duration: 1500,
          });
        }
      } catch (error) {
        toast.error("something is wrong please try again", {
          id: toastId,
          duration: 1500,
        });
      }
  };

  return (
    <div className="flex justify-center items-center ">
      <Col span={24} lg={{ span: 12 }}>
        <div className="card bg-base-100 w-full shadow-2xl mb-5">
          <THForm onSubmit={onSubmit}>
            <THInput type="text" name="name" label="Category Name"></THInput>
            <THInput type="text" name="image" label="Category Image"></THInput>

            <div className="form-control mt-6">
              <button className="btn btn-neutral" type="submit">
                Create Category
              </button>
            </div>
          </THForm>
        </div>
      </Col>
    </div>
  );
};

export default CreateCategory;
