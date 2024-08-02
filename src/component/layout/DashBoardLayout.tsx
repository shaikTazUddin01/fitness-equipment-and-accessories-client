import React from "react";
import { Button, Col, Layout } from "antd";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="h-[100%]">
      <Sidebar></Sidebar>
      <Layout
      
      >
        <Header style={{ padding: 0 }}
        
        >
          <div className="flex justify-end">
            <Button className="items-center mt-4 mr-4 btn btn-warning btn-sm">Logout</Button>
          </div>
        </Header>
        <Col lg={{ span: 20, offset: 4 }}>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              position:"relative"
            
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
