import { FieldValues, SubmitHandler } from "react-hook-form";

// import { toast } from "sonner";
import { Button, Modal } from "antd";
import { useGetCategoryQuery } from "../../../../redux/features/category/category.api";

import { useUpdateProductMutation } from "../../../../redux/features/products/products.api";
import { toast } from "sonner";
import { useState } from "react";
import THForm from "../../../../component/form/THForm";
import THInput from "../../../../component/form/THInput";
import THSelect from "../../../../component/form/THSelect";

import DashboardSpring from "../../../../component/shared/Loading/DashboardSpring";
import { TProduct } from "../../../../Type";
// import { CiEdit } from "react-icons/ci";
import { RiEdit2Line } from "react-icons/ri";

const featureOption = [{ name: "True" }, { name: "False" }];

const UpdateProduct = ({ items }: { items: Partial<TProduct> }) => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //update mutacion
  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }

  const categoris = data?.data;
  //handle model open and close
  // console.log(categoris);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { key, name, price, images, category, stockQuentity, isFeature } =
    items;

  // handle update
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("data-->", data);
    const toastId = toast.loading("Loading...");
    try {
      const res = await updateProduct({ id: key, data: data });

      // console.log("res--->", res);

      if (res.data) {
        toast.success("update successfully", {
          id: toastId,
          duration: 1500,
        });
        setIsModalOpen(false);
      }
    } catch (error) {
      toast.error("something is wrong please try again", {
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div>
      <Button type="primary" onClick={showModal} className="text-xl">
        <RiEdit2Line/>
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <THForm onSubmit={onSubmit}>
          <THInput
            name={"name"}
            label={"Product Name"}
            type={"text"}
            defaultFieldValue={name}
          ></THInput>
          <THInput
            name={"image"}
            label={"Product Image"}
            type={"text"}
            defaultFieldValue={images}
          ></THInput>
          <THInput
            name={"price"}
            label={"Product Price"}
            type={"number"}
            defaultFieldValue={price}
          ></THInput>
          <THInput
            name={"stockQuentity"}
            label={"Stock Quentity"}
            type={"number"}
            defaultFieldValue={stockQuentity}
          ></THInput>
          <THSelect
            label="Feature"
            name="isFeature"
            items={featureOption}
            defaultFieldValue={isFeature}
          ></THSelect>
          <THSelect
            label="Product Category"
            name="category"
            items={categoris}
            defaultFieldValue={category}
          ></THSelect>

          <div className="form-control mt-6">
            <button className="btn btn-neutral" type="submit">
              update Product
            </button>
          </div>
        </THForm>
      </Modal>
    </div>
  );
};

export default UpdateProduct;
