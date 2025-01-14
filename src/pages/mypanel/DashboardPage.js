import React, { useState, useEffect } from "react";
import { Breadcrumb} from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
  ControlOutlined,
  ProductOutlined,
  UsergroupAddOutlined,
  ShopOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
  RetweetOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  // State untuk loading data
  const [loading, setLoading] = useState(true);

  const data = [
    {
      icon: <TeamOutlined />,
      title: "Investor",
      value: "15",
      description: "Total Investor",
      link: "/investor",
      gradient: "bg-gradient-to-r from-green-400 to-green-600",
    },
    {
      icon: <ControlOutlined />,
      title: "Proyek",
      value: "5",
      description: "Total Proyek",
      link: "/proyek",
      gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
    },
    {
      icon: <ProductOutlined />,
      title: "Stok Barang",
      value: "1200",
      description: "Total Stok",
      link: "/barang",
      gradient: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      icon: <UsergroupAddOutlined />,
      title: "User",
      value: "5",
      description: "Total User",
      link: "/user",
      gradient: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      icon: <ShopOutlined />,
      title: "Supplier",
      value: "1",
      description: "Total Supplier",
      link: "/supplier",
      gradient: "bg-gradient-to-r from-blue-400 to-purple-600",
    },
    {
      icon: <ShoppingOutlined />,
      title: "Pelanggan",
      value: "10",
      description: "Total Pelanggan",
      link: "/pelanggan",
      gradient: "bg-gradient-to-r from-pink-400 to-yellow-600",
    },
    {
      icon: <ShoppingCartOutlined />,
      title: "Penjualan",
      value: "10",
      description: "Total Penjualan",
      link: "/penjualan",
      gradient: "bg-gradient-to-r from-green-400 to-purple-600",
    },
    {
      icon: <RetweetOutlined />,
      title: "Retur",
      value: "4",
      description: "Total Retur",
      link: "/retur",
      gradient: "bg-gradient-to-r from-pink-400 to-blue-600",
    },
  ];


  // Simulasi pengambilan data
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulate API call)
    }, 2000);
  }, []);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb style={{ marginBottom: 16, marginTop: 10 }}>
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <DashboardOutlined />
          <span>Dashboard</span>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div className="mb-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`${item.gradient} shadow-lg rounded-lg p-4 flex flex-col items-start justify-between text-white transition-transform transform hover:scale-95`}
            >
              <div className="flex items-center gap-2">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-3xl font-bold">{item.value}</p>
                </div>
              </div>
              <p className="text-sm mb-4 opacity-80">{item.description}</p>
              <a
                href={item.link}
                className="bg-white text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Dashboard;
