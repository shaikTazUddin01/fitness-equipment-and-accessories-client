import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Col, Row } from "antd";
import THSelect from "../../../component/form/THSelect";
import { genderOPtions } from "../../userView/constant";
import { roleOPtions } from "../../../constant/Options";
import { useCreateAdminMutation } from "../../../redux/features/auth/User/user";
import { toast } from "sonner";
import { isErrorResponse, isFetchBaseQueryError } from "../../../Type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { toast } from "sonner";


const CreateAdmin = () => {
    const[createAdmin]=useCreateAdminMutation()
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast.loading("Loading...");
     
      try {
      
        console.log(data);
        const {role}=data
    const res =await createAdmin(data)
    console.log(res);
        if (res.data) {
          toast.success(`successfully you create a new ${role}`, {
            id: toastId,
            duration: 1500,
          });
        }else if ("error" in res && isFetchBaseQueryError(res.error)) {
            const errorData = (res.error as FetchBaseQueryError).data;
            if (isErrorResponse(errorData)) {
              toast.error(errorData.message, {
                id: toastId,
                duration: 2500,
              });
            }
          }
      } catch (error) {
        // toast.error("something is wrong please try again", {
        //   id: toastId,
        //   duration: 1500,
        // });
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
          <h1 className="text-2xl text-center uppercase font-semibold">
            Create Admin
          </h1>
          {/* <Divider className=''></Divider> */}
          <THInput name="name" type="text" label="Name"></THInput>
          <THInput name="email" type="email" label="Email"></THInput>
          <THSelect name='role' label="Role" items={roleOPtions}></THSelect>
          <THInput
            name="phoneNumber"
            type="text"
            label="Phone Number"
          ></THInput>
          <Row gutter={16}>
            <Col span={12}>
              <THInput name="age" type="number" label="Age"></THInput>
            </Col>

            <Col span={12} >
              <THSelect name='gender' label="Gender" items={genderOPtions}></THSelect>
            </Col>
          </Row>

          <THInput name="address" type="text" label="Address"></THInput>
          <THInput name="password" type="text" label="Set Password"></THInput>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Create Admin
          </button>
          
        </THForm>
      </Col>
      {/* <Toaster></Toaster> */}
    </div>
  );
};

export default CreateAdmin;
