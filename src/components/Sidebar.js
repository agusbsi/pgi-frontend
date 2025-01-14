import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  TeamOutlined,
  ShopOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  ReconciliationOutlined,
  CheckCircleOutlined,
  ProductOutlined,
  ControlOutlined,
  UsergroupAddOutlined,
  CloudDownloadOutlined,
  CloudUploadOutlined,
  RetweetOutlined,
  BuildOutlined,
  FileDoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
  return (
    <Sider width={200} className="mt-20 ml-3 rounded-lg mb-2">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{
          minHeight: 280,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<CheckCircleOutlined />}>
          <Link to="/mobile">Dashboard Investor</Link>
        </Menu.Item>
        <Menu.ItemGroup key="gro-m" title="Permodalan">
          <Menu.Item key="investor" icon={<TeamOutlined />}>
            <Link to="/investor">Investor</Link>
          </Menu.Item>
          <Menu.Item key="proyek" icon={<ControlOutlined />}>
            <Link to="/proyek">Proyek</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="gro-m" title="Master Data">
          <Menu.Item key="2" icon={<ProductOutlined />}>
            <Link to="/barang">Stok Barang</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
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
            icon={<CloudDownloadOutlined />}
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
            icon={<CloudUploadOutlined />}
            title="Barang Keluar"
          >
            <Menu.Item key="10-1" icon={<ReconciliationOutlined />}>
              <Link to="/operasional">Operasional</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="7" icon={<ShoppingCartOutlined />}>
            <Link to="/penjualan">Penjualan</Link>
          </Menu.Item>
          <Menu.Item key="8" icon={<BuildOutlined />}>
            <Link to="/packing">Packing</Link>
          </Menu.Item>
          <Menu.Item key="9" icon={<RetweetOutlined />}>
            <Link to="/retur">Retur</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<CheckCircleOutlined />}>
            <Link to="/cek-garansi">Cek Garansi</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="setting" title="Pengaturan">
          <Menu.Item key="investor" icon={<SettingOutlined />}>
            <Link to="/investor">Pengaturan Umum</Link>
          </Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="gro-m" title="Laporan">
          <Menu.Item key="investor" icon={<FileDoneOutlined />}>
            <Link to="/investor">Penjualan</Link>
          </Menu.Item>
          <Menu.Item key="investor" icon={<FileDoneOutlined />}>
            <Link to="/investor">per Investor</Link>
          </Menu.Item>
          <Menu.Item key="proyek" icon={<FileDoneOutlined />}>
            <Link to="/proyek">per Proyek</Link>
          </Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
