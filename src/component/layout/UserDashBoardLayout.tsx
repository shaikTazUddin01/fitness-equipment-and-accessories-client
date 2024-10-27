import { Button, Col, Layout } from "antd";

import { Outlet } from "react-router-dom";
import { toast, Toaster } from "sonner";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { userLogout } from "../../redux/features/auth/User/userAuthSlice";
import Sidebar from "../UserDashboard/Sidebar";

const { Header, Content } = Layout;

const UserDashboard: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    toast.warning("our are logged out", {
      duration: 1500,
    });
    dispatch(
      userLogout()
    );
  };

  return (
    <Layout className="min-h-[100%]">
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <div className="flex justify-end pt-6 pr-5 items-center">
            <Button
              className="items-center btn btn-warning btn-sm -mt-2 mb-5"
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

export default UserDashboard;
