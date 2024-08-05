import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Col } from "antd";
import bgImg from "../../assets/hero-5.jpg";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useLoginAdminMutation } from "../../redux/features/auth/AdminLogin";
import { toast, Toaster } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { isErrorResponse, isFetchBaseQueryError, TUser } from "../../Type";

import { useDispatch } from "react-redux";
import { adminInFo } from "../../redux/features/auth/AdminAuthSlice";
import verifyToken from "../../utiles/verifyToken";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [login] = useLoginAdminMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading..");
    try {
      const res = await login(data);

      if (res?.data) {
        toast.success("login in success", {
          id: toastId,
          duration: 1500,
        });
        //decoded token
        const token = res?.data?.data?.accessToken;
        const user = verifyToken(token) as TUser;

        //navigate after login
        navigate(`${location.state}`);

        dispatch(
          adminInFo({
            user: user,
            token: token,
          })
        );
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
      toast.error("something is wrong please try again",{
        id: toastId,
        duration: 1500,
      });
    }
  };
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover"
      style={{ backgroundImage: `URL(${bgImg})` }}
    >
      <Col
        xs={{ span: 20 }}
        sm={{ span: 16 }}
        md={{ span: 12 }}
        lg={{ span: 7 }}
        xxl={{ span: 5 }}
        className="bg-[#ffffff88] rounded-md font-semibold border-primaryColor border-2 "
      >
        <THForm onSubmit={onSubmit}>
          <h1 className="text-2xl text-center uppercase font-semibold">
            Admin Login
          </h1>
          {/* <Divider className=''></Divider> */}
          <THInput name="email" type="email" label="Email"></THInput>
          <THInput name="password" type="text" label="Password"></THInput>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Login
          </button>
        </THForm>
      </Col>
      <Toaster></Toaster>
    </div>
  );
};

export default Login;
