import React from "react";
import { Layout, Grid } from "antd";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AppFooter from "../components/Footer";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const MainLayout = ({ children }) => {
  const screens = useBreakpoint(); // Mendapatkan informasi breakpoint

  return (
    <Layout>
      <Navbar />
      <Layout>
        {!screens.xs && <Sidebar />}
        <Layout style={{ padding: "10px 10px 10px 10px" }}>
          <Content
            style={{
              padding: "50px 10px 10px 10px",
              minHeight: 280,
              maxHeight: "90vh",
              overflow: "auto",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default MainLayout;
