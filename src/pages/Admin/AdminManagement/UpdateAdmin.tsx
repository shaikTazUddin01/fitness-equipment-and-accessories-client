import { Button, Modal } from "antd";
import { useState } from "react";
import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import THSelect from "../../../component/form/THSelect";

import { roleOPtions, statusOPtions } from "../../../constant/Options";
import { FieldValues, SubmitHandler } from "react-hook-form";
import {
  isErrorResponse,
  isFetchBaseQueryError,
  TAdminData,
} from "../../../Type";
import { useUpdateAdminMutation } from "../../../redux/features/auth/User/userApi";
import { toast } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const UpdateAdmin = ({ item }: { item: Partial<TAdminData> }) => {
  console.log("item", item);
  const { key } = item;

  // console.log(key);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [updateAdmin] = useUpdateAdminMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Loading...");

    try {
      const res = await updateAdmin({ id: key, data });
      console.log("response--<>", res);
      if (res.data) {
        toast.success(`update success`, {
          id: toastId,
          duration: 1500,
        });
        setIsModalOpen(false)
      } else if ("error" in res && isFetchBaseQueryError(res.error)) {
        const errorData = (res.error as FetchBaseQueryError).data;
        if (isErrorResponse(errorData)) {
          toast.error(errorData.message, {
            id: toastId,
            duration: 2500,
          });
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
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal open={isModalOpen} footer={null}
      >
        <div className="">
        <THForm onSubmit={onSubmit}>
          <h1 className="text-2xl text-center uppercase font-semibold">
            update Admin
          </h1>
          {/* <Divider className=''></Divider> */}
          <THInput
            name="name"
            type="text"
            label="Name"
            defaultFieldValue={item?.name}
          ></THInput>
          <THInput
            name="email"
            type="email"
            label="Email"
            defaultFieldValue={item?.email}
          ></THInput>
          <THSelect
            name="role"
            label="Role"
            defaultFieldValue={item?.role}
            items={roleOPtions}
          ></THSelect>
          <THInput
            name="phoneNumber"
            type="text"
            label="Phone Number"
            defaultFieldValue={item?.phoneNumber}
          ></THInput>

          <THSelect
            name="status"
            items={statusOPtions}
            label="Status"
            defaultFieldValue={item?.status}
          ></THSelect>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Update Admin
          </button>
        </THForm>
        </div>
      </Modal>
    </>
  );
};

export default UpdateAdmin;
