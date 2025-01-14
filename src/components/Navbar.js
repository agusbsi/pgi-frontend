import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown, Space, Drawer } from "antd";
import {
  UserOutlined,
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  MenuOutlined,
  DashboardOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  ReconciliationOutlined,
  CheckCircleOutlined,
  ProductOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const { SubMenu } = Menu;
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
      <Link to="/akun">Akun</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        <Link to="/">Logout</Link>
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
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.ItemGroup key="gro-m" title="Permodalan">
            <Menu.Item key="investor" icon={<AppstoreOutlined />}>
              <Link to="/investor">Investor</Link>
            </Menu.Item>
            <Menu.Item key="proyek" icon={<TeamOutlined />}>
              <Link to="/proyek">Proyek</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="gro-m" title="Master Data">
            <Menu.Item key="2" icon={<ProductOutlined />}>
              <Link to="/barang">Stok Barang</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}>
              <Link to="/user">User</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ShopOutlined />}>
              <Link to="/supplier">Supplier</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ShoppingOutlined />}>
              <Link to="/pelanggan">Pelanggan</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="grp" title="Menu Utama">
            <SubMenu
              key="6"
              icon={<ShoppingCartOutlined />}
              title="Barang Masuk"
            >
              <Menu.Item key="6-1" icon={<ReconciliationOutlined />}>
                <Link to="/pembelian">Pembelian</Link>
              </Menu.Item>
              <Menu.Item key="6-2" icon={<ShoppingCartOutlined />}>
                <Link to="/penerimaan">Penerimaan Barang</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="10"
              icon={<ShoppingCartOutlined />}
              title="Barang Keluar"
            >
              <Menu.Item key="10-1" icon={<ReconciliationOutlined />}>
                <Link to="/barang-masuk/pembelian">Operasional</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<ShoppingCartOutlined />}>
              <Link to="/penjualan">Penjualan</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<ReconciliationOutlined />}>
              <Link to="/retur">Packing</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<ReconciliationOutlined />}>
              <Link to="/retur">Retur</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<CheckCircleOutlined />}>
              <Link to="/cek-garansi">Cek Garansi</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="gro-m" title="Laporan">
            <Menu.Item key="investor" icon={<AppstoreOutlined />}>
              <Link to="/investor">Investor</Link>
            </Menu.Item>
            <Menu.Item key="proyek" icon={<TeamOutlined />}>
              <Link to="/proyek">Kas Besar</Link>
            </Menu.Item>
            <Menu.Item key="proyek" icon={<TeamOutlined />}>
              <Link to="/proyek">Neraca</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.Divider />
          <Menu.Item key="1" icon={<SettingOutlined />}>
            Akun
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2" icon={<LogoutOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navbar;
