import React, { useState, useEffect } from "react";
import { Breadcrumb, Card, Skeleton } from "antd";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
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

  // Data dummy untuk grafik realtime
  const realtimeData = [
    { time: "10:00", barang: 50, transaksi: 100 },
    { time: "10:01", barang: 52, transaksi: 110 },
    { time: "10:02", barang: 53, transaksi: 115 },
    { time: "10:03", barang: 54, transaksi: 120 },
    { time: "10:04", barang: 55, transaksi: 125 },
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

      {/* Realtime Data Chart */}
      <Card
        title="Grafik Data Transaksi"
        bordered={false}
        style={{
          marginBottom: 24,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {loading ? (
          <Skeleton active paragraph={{ rows: 8 }} />
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={realtimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="barang" stroke="#8884d8" />
              <Line type="monotone" dataKey="transaksi" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Card>
    </>
  );
};

export default Dashboard;
