import { FieldValues, SubmitHandler } from "react-hook-form";

// import { toast } from "sonner";
import { Button, Modal } from "antd";

import { toast } from "sonner";
import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import { useUpdateCategoryMutation } from "../../../redux/features/category/category.api";

import { useState } from "react";
import { TCategory } from "../../../Type";

const UpdateCategory = ({ items }: { items: TCategory }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateCategory] = useUpdateCategoryMutation();
  // console.log(items);
  const { key, image, category } = items;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // handle update
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Loading...");
    try {
      const res = await updateCategory({ data, _id: key });
      console.log(res);
      if (res?.data) {
        toast.success("Update SuccessFul", { id: toastId, duration: 1500 });

        handleOk();
      }
    } catch (error) {
      toast.error("something is wrong", { id: toastId, duration: 1500 });
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        // title="Up"
        open={isModalOpen}
        // onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
      >
        {/* <div className="flex justify-center items-center ">
      <Col span={24} lg={{ span: 12 }}>
        <div className="card bg-base-100 w-full shadow-2xl mb-5"> */}
        <THForm onSubmit={onSubmit}>
          <THInput
            type="text"
            name="name"
            label="Category Name"
            defaultFieldValue={category}
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
        {/* </div>
      </Col>
    </div> */}
      </Modal>
    </>
  );
};

export default UpdateCategory;
