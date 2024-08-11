import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Col, Row } from "antd";
import THSelect from "../../../component/form/THSelect";
import { genderOPtions } from "../../userView/constant";
// import { roleOPtions } from "../../../constant/Options";
import {
  useGetAdminQuery,
  useUpdateAdminMutation,
} from "../../../redux/features/auth/User/userApi";
import { toast } from "sonner";
import { isErrorResponse, isFetchBaseQueryError } from "../../../Type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks/hooks";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
// import { toast } from "sonner";

const UpdateInformation = () => {
  const [updateInformation] = useUpdateAdminMutation();
  const navigate = useNavigate();
  const admin = useAppSelector((state) => state.adminLoginInfo.user!.user);
  const { data: currentLoggedInAdmin, isLoading } = useGetAdminQuery(admin);
  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  // console.log(currentLoggedInAdmin.data);
  const { _id, name, age, email, gender, phoneNumber, address } =
    currentLoggedInAdmin.data[0];
  // console.log(name);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Loading...");

    try {
      console.log(data);
      const { role } = data;
      console.log((_id));
      const res = await updateInformation({id:_id,data});
      console.log(res);
      if (res.data) {
        toast.success(`successfully you create a new ${role}`, {
          id: toastId,
          duration: 1500,
        });
        // navigate("/admin/manage-admin");
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
      className="flex justify-center items-center min-h-screen "
      //   style={{ backgroundImage: `URL(${bgImg})` }}
    >
      <Col
        xs={{ span: 20 }}
        sm={{ span: 17 }}
        md={{ span: 15 }}
        lg={{ span: 13 }}
        xxl={{ span: 9 }}
        className="bg-[#ffffff88] rounded-md  border-primaryColor shadow-2xl my-10 "
      >
        <THForm onSubmit={onSubmit}>
          {/* <h1 className="text-2xl text-center uppercase font-semibold">
            Create Admin
          </h1> */}
          {/* <Divider className=''></Divider> */}
          <THInput
            name="name"
            type="text"
            label="Name"
            defaultFieldValue={name}
          ></THInput>
          <THInput
            name="email"
            type="email"
            label="Email"
            defaultFieldValue={email}
          ></THInput>

          <THInput
            name=" phoneNumberNumber"
            type="text"
            label=" phoneNumber Number"
            defaultFieldValue={phoneNumber}
          ></THInput>
          <Row gutter={16}>
            <Col span={12}>
              <THInput
                name="age"
                type="number"
                label="Age"
                defaultFieldValue={age}
              ></THInput>
            </Col>

            <Col span={12}>
              <THSelect
                name="gender"
                label="Gender"
                items={genderOPtions}
                defaultFieldValue={gender}
              ></THSelect>
            </Col>
          </Row>

          <THInput
            name="address"
            type="text"
            label="Address"
            defaultFieldValue={address}
          ></THInput>

          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Update Admin
          </button>
        </THForm>
      </Col>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default UpdateInformation;
