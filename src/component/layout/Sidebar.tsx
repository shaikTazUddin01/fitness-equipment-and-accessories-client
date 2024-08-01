// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, Menu } from "antd";
// import { createElement } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import SidebarGenarator from "../../utiles/sidebarGenarator";
import { adminPaths } from "../../route/admin.routes";
const { Sider } = Layout;

const items =SidebarGenarator(adminPaths,'admin')

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical ">
        <div className="flex justify-center items-center mt-4">
          <img src={logo} alt="" className="w-[80%]" />
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        className="h-[100%] sticky top-0"
        
      />
    </Sider>
  );
};

export default Sidebar;
