import { Layout, Menu } from "antd";

import logo from "../../assets/logo.png";

import SidebarGenarator from "../../utiles/sidebarGenarator";

import { useAppSelector } from "../../redux/hooks/hooks";
import { UserPath } from "../../route/userRoutes";
const { Sider } = Layout;

const Sidebar = () => {
  const role = useAppSelector((state) => state.userLoginInfo?.user?.role);

  let items;
  if (role === "user") {
    items = SidebarGenarator(UserPath, "user");
  }
  
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      // className="scrollbar"
      style={{
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        // overflowY: "auto",
      }}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical ">
        <div className="flex justify-center items-center mt-6 mb-2">
          <a href="/">
            <img src={logo} alt="" className="w-[80%] mx-auto" />
          </a>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        // className="min-h-[100%] sticky top-0 overflow-y-auto"
        style={{
          minHeight: "100%",
          // overflowY: "auto", // Ensure the menu itself can scroll
        }}
      />
    </Sider>
  );
};

export default Sidebar;
