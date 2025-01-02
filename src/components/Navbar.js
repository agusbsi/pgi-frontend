import React, { useState } from "react";
import { Layout, Menu, Avatar, Dropdown, Space, Drawer } from "antd";
import {
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Dummy data user
  const user = {
    name: "Sulton F.",
    role: "Admin",
  };

  // Dropdown menu
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        Akun
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  // Handle drawer visibility for mobile
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Header className="p-0 bg-white fixed w-full z-40 shadow-sm ">
      <div className="flex justify-between items-center px-4 ">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Avatar
            src="/logo192.png" // Ganti dengan path logo Anda
            alt="Logo"
            size="large"
            className="mr-3"
          />
          <h2 className="text-2xl text-blue-500 m-0">PGI-Sistem</h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          <Dropdown overlay={menu} trigger={["click"]}>
            <Space className="cursor-pointer">
              <Avatar icon={<UserOutlined />} />
              <span>
                <strong>{user.name}</strong>
              </span>
              <DownOutlined />
            </Space>
          </Dropdown>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <MenuOutlined
            className="text-xl cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={toggleDrawer}
        visible={drawerVisible}
      >
        <Menu>
          <Menu.Item key="1" icon={<SettingOutlined />}>
            Akun
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2" icon={<LogoutOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navbar;
