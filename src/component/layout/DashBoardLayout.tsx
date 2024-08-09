import React from "react";
import { Button, Col, Layout } from "antd";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { adminInFo } from "../../redux/features/auth/AdminAuthSlice";

const { Header, Content } = Layout;

const App: React.FC = () => {
  const dispatch = useAppDispatch();

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
          <div className="flex justify-end">
            <Button
              className="items-center mt-4 mr-4 btn btn-warning btn-sm"
              onClick={handleLogout}
            >
              Logout
            </Button>
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
              <Outlet></Outlet>
              <Toaster></Toaster>
            </div>
          </Content>
        </Col>
      </Layout>
    </Layout>
  );
};

export default App;
