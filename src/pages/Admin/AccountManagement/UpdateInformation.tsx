/* eslint-disable no-unsafe-optional-chaining */
import THForm from "../../../component/form/THForm";
import THInput from "../../../component/form/THInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { Col, Row } from "antd";
import THSelect from "../../../component/form/THSelect";
import { genderOPtions } from "../../userView/constant";
import banner from "../../../assets/hero-5.jpg";
// import { roleOPtions } from "../../../constant/Options";
import {
  useGetAdminQuery,
  useUpdateAdminMutation,
} from "../../../redux/features/auth/User/userApi";
import { toast } from "sonner";
import { isErrorResponse, isFetchBaseQueryError } from "../../../Type";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
// import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks/hooks";
import DashboardSpring from "../../../component/shared/Loading/DashboardSpring";
import { HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
// import { toast } from "sonner";

const AdminProfile = () => {
  const [updateInformation] = useUpdateAdminMutation();
  // const navigate = useNavigate();
  const admin = useAppSelector((state) => state.adminLoginInfo.user!.user);
  const { data: currentLoggedInAdmin, isLoading } = useGetAdminQuery(admin);
  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  // console.log(currentLoggedInAdmin.data);
  const { _id, name, age, email, gender, phoneNumber, address ,image} =
    currentLoggedInAdmin?.data[0] ||[];
  // console.log(name);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Loading...");

    try {
      console.log(data);
      const { role } = data;
      console.log(_id);
      const res = await updateInformation({ id: _id, data });
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
    <div className="min-h-screen">
      <img src={banner} alt="" className="w-full h-[250px] object-cover" />
      <div className="flex gap-8 -mt-20 px-10">
        <div className="w-[25%] bg-white p-5 rounded-xl shadow">
          <div className="flex flex-col justify-center items-center">
            {
              image && image !=""?
              <img src={image} className="size-28 rounded-full" />
              :<img src={banner} className="size-28 rounded-full" />
            }
            <h1 className="text-xl">{name}</h1>
            <p>{email}</p>
          </div>

          <div className="bg-textSecondary h-[1px] w-full my-2"></div>
            <h1 className="text-2xl font-semibold mb-1">Intro</h1>
          <div className="space-y-2">
            <span className="flex items-center gap-1 text-[16px]"><span><HiOutlinePhone/></span>+880{phoneNumber}</span >
            <span className="flex items-center gap-1 text-[16px]"><span><IoLocationOutline/></span>{address}</span>
          </div>
        </div>
        {/* right side */}
        <div className="w-[75%] bg-white rounded-xl p-5 shadow">
          {/* <h1 className="text-2xl font-semibold mb-5">Intro</h1> */}
          {/*  */}
          <div
            className=" "
            //   style={{ backgroundbanner: `URL(${bgImg})` }}
          >
            <Col className="bg-[#ffffff88] rounded-md  border-primaryColor w-full">
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
                  name="image"
                  type="text"
                  label="image Url"
                  defaultFieldValue={image?image:""}
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
                  Update InFo
                </button>
              </THForm>
            </Col>
            {/* <Toaster></Toaster> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
