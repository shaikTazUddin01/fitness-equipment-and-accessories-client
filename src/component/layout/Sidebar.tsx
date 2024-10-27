// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, Menu } from "antd";
// import { createElement } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
// import { NavLink } from "react-router-dom";
import SidebarGenarator from "../../utiles/sidebarGenarator";

import { useAppSelector } from "../../redux/hooks/hooks";
// import { subadminPaths } from "../../route/subAdminRoutes";
import { adminPaths } from "../../route/admin.routes";
const { Sider } = Layout;


const Sidebar = () => {

const role =useAppSelector((state)=>state.adminLoginInfo.user?.role)

let items;
if (role === "Admin") {
  
  items = SidebarGenarator(adminPaths, "admin");
}
// else{
//   items = SidebarGenarator(subadminPaths, "subadmin");

// }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="hover:overflow-y-auto"
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
        <div className="">
          <a href="/">
          <img src={logo} alt="" className="w-[80%] mx-auto mt-4" />
          </a>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        // className=" overflow-y-auto"
        style={{
          minHeight: "100%",
          // overflowY: "auto", // Ensure the menu itself can scroll
        }}
      />
    </Sider>
  );
};

export default Sidebar;
