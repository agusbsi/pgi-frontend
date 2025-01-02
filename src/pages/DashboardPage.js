import React, { useState, useEffect } from "react";
import { Breadcrumb, Card, Row, Col, Typography, Skeleton } from "antd";
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
  ShoppingCartOutlined,
  UserOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Dashboard = () => {
  // State untuk loading data
  const [loading, setLoading] = useState(true);

  // Data dummy untuk total data
  const totalData = {
    barang: 150,
    user: 25,
    transaksi: 300,
  };

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

      {/* Data Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col span={8}>
          <Card
            bordered={false}
            style={{
              textAlign: "center",
              background: "linear-gradient(135deg, #f5a623, #fdb44b)",
              color: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            headStyle={{ color: "white" }}
          >
            {loading ? (
              <Skeleton active avatar paragraph={{ rows: 1 }} />
            ) : (
              <>
                <ShoppingCartOutlined
                  style={{ fontSize: 36, color: "white" }}
                />
                <Title level={3} style={{ color: "white", margin: 0 }}>
                  {totalData.barang}
                </Title>
                <Text style={{ color: "white" }}>Total Barang</Text>
              </>
            )}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            bordered={false}
            style={{
              textAlign: "center",
              background: "linear-gradient(135deg, #3f51b5, #6573c3)",
              color: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            headStyle={{ color: "white" }}
          >
            {loading ? (
              <Skeleton active avatar paragraph={{ rows: 1 }} />
            ) : (
              <>
                <UserOutlined style={{ fontSize: 36, color: "white" }} />
                <Title level={3} style={{ color: "white", margin: 0 }}>
                  {totalData.user}
                </Title>
                <Text style={{ color: "white" }}>Total User</Text>
              </>
            )}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            bordered={false}
            style={{
              textAlign: "center",
              background: "linear-gradient(135deg, #4caf50, #6fbf73)",
              color: "white",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            headStyle={{ color: "white" }}
          >
            {loading ? (
              <Skeleton active avatar paragraph={{ rows: 1 }} />
            ) : (
              <>
                <DollarOutlined style={{ fontSize: 36, color: "white" }} />
                <Title level={3} style={{ color: "white", margin: 0 }}>
                  {totalData.transaksi}
                </Title>
                <Text style={{ color: "white" }}>Total Transaksi</Text>
              </>
            )}
          </Card>
        </Col>
      </Row>

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
