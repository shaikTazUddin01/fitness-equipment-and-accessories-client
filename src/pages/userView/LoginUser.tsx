import THForm from "../../component/form/THForm";
import THInput from "../../component/form/THInput";
import { Button, Col } from "antd";
import bgImg from "../../assets/hero-5.jpg";
import { FieldValues, SubmitHandler } from "react-hook-form";

import { toast, Toaster } from "sonner";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { isErrorResponse, isFetchBaseQueryError, TUser } from "../../Type";

// import { useDispatch } from "react-redux";

import verifyToken from "../../utiles/verifyToken";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserLoginMutation } from "../../redux/features/auth/User/userApi";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { userInFo } from "../../redux/features/auth/User/userAuthSlice";
import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const LoginUser = () => {
  const [login] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [defaultUserInfo, setDefaultUserInfo] = useState({});

  const DemoUserInFo = () => {
    setDefaultUserInfo({
      email: "tihan@gmail.com",
      password: "123456",
    });
  };
  const location = useLocation();

  // console.log(login);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("loading..");
    try {
      const res = await login(data);
      console.log(data);

      // const res=null;

      if (res?.data) {
        toast.success("login in success", {
          id: toastId,
          duration: 1500,
        });
        //decoded token
        // console.log(res);
        const token = res?.data?.data?.accessToken;
        const user = verifyToken(token) as TUser;
        console.log(res);

        //navigate after login
        if (location?.state) {
          navigate(`${location.state}`);
        } else {
          navigate("/");
        }

        dispatch(
          userInFo({
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
      //   toast.error("something is wrong please try again",{
      //     id: toastId,
      //     duration: 1500,
      //   });
    }
  };
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover"
      style={{ backgroundImage: `URL(${bgImg})` }}
    >
      <a href="/">
        <span className="text-white font-medium absolute top-5 left-5 flex justify-center items-center gap-2">
          <span>
            <FaArrowLeft />
          </span>
          <span>Back To Home</span>
        </span>
      </a>

      <Col
        xs={{ span: 20 }}
        sm={{ span: 16 }}
        md={{ span: 12 }}
        lg={{ span: 7 }}
        xxl={{ span: 5 }}
        className="bg-[#ffffff88] rounded-md font-semibold "
      >
        <div className="flex justify-center">
         
        </div>
        <THForm onSubmit={onSubmit} defaultValues={defaultUserInfo}>
          <h1 className="text-2xl text-center uppercase font-semibold">
            Login
          </h1>
          <div className="text-center">
          <Button color="default" size="small" onClick={() => DemoUserInFo()}>
           Login with Demo User
          </Button>
          </div>
          {/* <Divider className=''></Divider> */}
          <THInput name="email" type="email" label="Email"></THInput>
          <THInput name="password" type="text" label="Password"></THInput>
          <button className="btn btn-neutral btn-md w-full mt-4 text-lg">
            Login
          </button>
          <p className="text-center">
            i don't have an account.!
            <span className="text-[#0e07e6]">
              <a href="/signup"> signUp</a>
            </span>
          </p>
        </THForm>
      </Col>
      <Toaster></Toaster>
    </div>
  );
};

export default LoginUser;
