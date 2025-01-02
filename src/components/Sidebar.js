import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
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
          <SubMenu key="6" icon={<ShoppingCartOutlined />} title="Barang Masuk">
            <Menu.Item key="6-1" icon={<ReconciliationOutlined />}>
              <Link to="/barang-masuk/pembelian">Pembelian</Link>
            </Menu.Item>
            <Menu.Item key="6-2" icon={<ShoppingCartOutlined />}>
              <Link to="/barang-masuk/penerimaan-beli">Penerimaan Beli</Link>
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
      </Menu>
    </Sider>
  );
};

export default Sidebar;
