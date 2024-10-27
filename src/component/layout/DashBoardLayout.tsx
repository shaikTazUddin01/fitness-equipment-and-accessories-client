import React, { useState } from "react";
import { Button, Col, Layout } from "antd";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { adminInFo } from "../../redux/features/auth/AdminAuthSlice";
import userImage from "../../assets/Userimage.png";
import { useGetAdminQuery } from "../../redux/features/auth/User/userApi";
import DashboardSpring from "../shared/Loading/DashboardSpring";

const { Header, Content } = Layout;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.adminLoginInfo);

  const admin = user!.user;
  const { data: currentLoggedInAdmin, isLoading } = useGetAdminQuery(admin);
  const [openCollapse, SetOpenCollapse] = useState(false);

  if (isLoading) {
    return <DashboardSpring></DashboardSpring>;
  }
  // console.log(currentLoggedInAdmin.data);
  const { role, image ,email} = currentLoggedInAdmin?.data[0] || [];

  // console.log(name, image, role,);

  const handleLogout = () => {
    toast.warning("our are logged out", {
      duration: 1500,
    });
    dispatch(
      adminInFo({
        user: null,
        token: null,
      })
    );
  };

  return (
    <Layout className="min-h-[100%]">
      <Sidebar></Sidebar>
      <Layout>
        <Header style={{ padding: 0 }}>
          <div className="flex justify-end pt-3 pr-5">
            {image && image != "" ? (
              <img
                src={image}
                alt="name"
                className="size-10 rounded-full cursor-pointer"
                onClick={() => SetOpenCollapse(!openCollapse)}
              />
            ) : (
              <img
                src={userImage}
                alt="name"
                className="size-10 rounded-full cursor-pointer"
                onClick={() => SetOpenCollapse(!openCollapse)}
              />
            )}

            <div
              className={`collapse-container ${
                openCollapse ? "open " : ""
              } bg-[#001529] border-2 border-secondaryColor absolute top-14 rounded end-0 text-center flex flex-col text-white px-5 z-20`}
            >
              <span className="text-[16px]"> {email}</span>
              <span className="-mt-8 text-[16px] ">
                Role : {role}
              </span>
              <Button
                className="items-center btn-sm -mt-2 mb-5"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </Header>
        <Col lg={{ span: 20, offset: 4 }}>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                position: "relative",
              }}
            >
              <div className="min-h-[78vh]">
                <Outlet></Outlet>
              </div>
              <Toaster></Toaster>
            </div>
          </Content>
        </Col>
      </Layout>
    </Layout>
  );
};

export default App;
