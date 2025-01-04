import React from "react";
import { Layout, Typography } from "antd";

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter = () => {
  return (
    <Footer className="bg-blue-700 flex items-center justify-center h-3 p-4">
      <Text className="text-white text-center">
        ©{new Date().getFullYear()} Created by IT-PGI
      </Text>
    </Footer>
  );
};

export default AppFooter;
