import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Col, Row } from "antd";
import bgImg from "../../assets/hero-5.jpg";
import { FieldValues, SubmitHandler } from "react-hook-form";
// import { useLoginAdminMutation } from "../../redux/features/auth/AdminLogin";
import { toast, Toaster } from "sonner";

// import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useUserSignUpMutation } from "../../redux/features/auth/User/userApi";
import THSelect from "../../component/form/THSelect";
import { genderOPtions } from "./constant";
import { isErrorResponse, isFetchBaseQueryError } from "../../Type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

const SignUp = () => {
  const [userSignUp] = useUserSignUpMutation();
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  // const location = useLocation();

  // console.log(login);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("loading..");
    try {
      const res = await userSignUp(data);
      // console.log(data);
      // console.log(res);

      if (res?.data) {
        toast.success("Sign Up  success", {
          id: toastId,
          duration: 1500,
        });
        navigate("/login");
      } else if ("error" in res && isFetchBaseQueryError(res.error)) {
        const errorData = (res.error as FetchBaseQueryError).data;
        if (isErrorResponse(errorData)) {
          toast.error(errorData.message, {
            id: toastId,
            duration: 1500,
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
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{ backgroundImage: `URL(${bgImg})` }}
    >
      <Col
        xs={{ span: 20 }}
        sm={{ span: 16 }}
        md={{ span: 12 }}
        lg={{ span: 9 }}
        xxl={{ span: 5 }}
        className="bg-[#ffffff88] rounded-md font-semibold border-primaryColor border-2 my-10 "
      >
        <THForm onSubmit={onSubmit}>
          <h1 className="text-2xl text-center uppercase font-semibold">
            SignUp
          </h1>
          {/* <Divider className=''></Divider> */}
          <THInput name="name" type="text" label="Name"></THInput>
          <Row gutter={16}>
            <Col span={12}>
              <THInput name="age" type="number" label="Age"></THInput>
            </Col>

            <Col span={12}>
              <THSelect
                name="gender"
                label="Gender"
                items={genderOPtions}
              ></THSelect>
            </Col>
          </Row>
          <THInput name="email" type="email" label="Email"></THInput>
          <THInput
            name="phoneNumber"
            type="text"
            label="Phone Number"
          ></THInput>

          <THInput name="address" type="text" label="Address"></THInput>
          <THInput name="password" type="text" label="Set Password"></THInput>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            SignUp
          </button>
          <p className="text-center">
            Already i have an account.!
            <span className="text-[#0e07e6]">
              <a href="/login"> login</a>
            </span>
          </p>
        </THForm>
      </Col>
      <Toaster></Toaster>
    </div>
  );
};

export default SignUp;
