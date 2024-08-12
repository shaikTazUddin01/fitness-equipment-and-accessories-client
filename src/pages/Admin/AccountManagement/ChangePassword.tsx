/* eslint-disable no-unsafe-optional-chaining */
import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Col } from "antd";

// import { roleOPtions } from "../../../constant/Options";
import {
  useUpdateAdminPasswordMutation,
} from "../../../redux/features/auth/User/userApi";
import { toast } from "sonner";
import { isErrorResponse, isFetchBaseQueryError } from "../../../Type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { adminLogout } from "../../../redux/features/auth/AdminAuthSlice";

// import { toast } from "sonner";

const ChangePassword = () => {
  const [updateAdminPass] = useUpdateAdminPasswordMutation();
  const dispatch=useAppDispatch()
//   const navigate = useNavigate();
  const adminEmail = useAppSelector((state) => state.adminLoginInfo.user!.user);
//  console.log(admin);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
 
    const toastId = toast.loading("Loading...");

    try {
    //   console.log(data);
    
 
      const res = await updateAdminPass({ email: adminEmail, data });
      console.log(res);
      if (res.data) {
        toast.success(`Password is updated`, {
          id: toastId,
          duration: 1500,
        });
        // navigate("/admin/manage-admin");
        dispatch(adminLogout())
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
    <div
      className="min-h-screen "
      //   style={{ backgroundImage: `URL(${bgImg})` }}
    >
      <div className="flex justify-center">
      <Col
        xs={{ span: 20 }}
        sm={{ span: 17 }}
        md={{ span: 15 }}
        lg={{ span: 13 }}
        xxl={{ span: 9 }}
        className="bg-[#ffffff88] rounded-md  border-primaryColor shadow-2xl my-10  "
      >
        <THForm onSubmit={onSubmit}>
          <THInput
            name="oldPassword"
            type="text"
            label="Old Password"
          ></THInput>

          <THInput
            name="newPassword"
            type="text"
            label="New Password"
          ></THInput>

          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Update Password
          </button>
        </THForm>
      </Col>
      </div>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default ChangePassword;
