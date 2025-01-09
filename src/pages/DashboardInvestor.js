import React from "react";
import { Card, Typography, Row, Col, Button, Avatar, Divider } from "antd";
import {
  BellOutlined,
  HomeOutlined,
  DollarOutlined,
  HistoryOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const DashboardInvestor = () => {
  return (
    <div style={{ padding: "16px", background: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: "24px" }}
      >
        <Col>
          <Title level={4}>Hi, Investor</Title>
          <Text>Senin, 7 Januari 2025</Text>
        </Col>
        <Col>
          <Avatar size="large" style={{ backgroundColor: "#f56a00" }}>
            <BellOutlined />
          </Avatar>
        </Col>
      </Row>

      {/* Balance Card */}
      <Card
        style={{
          backgroundColor: "#556ee6",
          color: "#fff",
          borderRadius: "12px",
          marginBottom: "5px",
        }}
        bodyStyle={{ padding: "24px" }}
      >
        <Row justify="space-between" align="middle">
          <Col>
            <Text className="text-white">Total Balance</Text>
            <Title level={2} style={{ color: "#fff", margin: 0 }}>
              Rp.300,000,000
            </Title>
          </Col>
          <Col>
            <Avatar
              size={64}
              style={{
                backgroundColor: "#fff",
                color: "#556ee6",
                fontWeight: "bold",
              }}
            >
              👀
            </Avatar>
          </Col>
        </Row>
      </Card>
      <Row
        gutter={[16, 16]} // Jarak antar elemen horizontal dan vertikal
        style={{
          marginBottom: 24,
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <Col
          xs={12} // Lebar penuh pada layar kecil
          sm={12} // Setengah lebar pada layar menengah
          lg={12} // Setengah lebar pada layar besar
        >
          <Card
            style={{
              background: "linear-gradient(135deg, #4facfe 10%, #00f2fe 90%)",
              color: "white",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            <Row align="middle">
              <Col flex="auto">
                <Typography.Title
                  level={5}
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  Total Proyek
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                   Rp. 100,000,000 ( 2 Proyek )
                </Typography.Text>
              </Col>
              <Col>
                <DollarOutlined style={{ fontSize: 30, color: "white" }} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={12}>
          <Card
            style={{
              background: "linear-gradient(135deg, #4facfe 10%, #00f2fe 90%)",
              color: "white",
              borderRadius: "10px",
              height: "100%",
            }}
          >
            <Row align="middle">
              <Col flex="auto">
                <Typography.Title
                  level={5}
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  Pinjaman
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  Rp. 100,000,000
                </Typography.Text>
              </Col>
              <Col>
                <DollarOutlined style={{ fontSize: 30, color: "white" }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Proyek Aktif */}
      <Card
        title="Proyek yang anda ikuti"
        style={{ borderRadius: "12px" }}
        className="mb-3"
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <Text className="font-bold">PYK-2024/XI/001</Text>
            <br />
            <Text>Proyek Import dan penjualan Modem Batch 1</Text>
            <br />
            <Text type="secondary">50 Lembar saham</Text>
          </Col>
          <Col>
          <Button color="primary" variant="filled">
              Detail
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <Text className="font-bold">PYK-2024/XI/002</Text>
            <br />
            <Text>Proyek Import dan penjualan Modem Batch 2</Text>
            <br />
            <Text type="secondary">50 Lembar saham</Text>
          </Col>
          <Col>
          <Button color="primary" variant="filled">
              Detail
            </Button>
          </Col>
        </Row>
      </Card>
      {/* Activity Section */}
      <Card
        title="Proyek Tersedia"
        style={{ borderRadius: "12px" }}
        className="mb-3"
      >
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <Text className="font-bold">PYK-2024/XI/0054</Text>
            <br />
            <Text>Proyek Import Batch 3</Text>
            <br />
            <Text type="secondary">Sisa 50 Lembar saham</Text>
          </Col>
          <Col>
            <Button color="primary" variant="filled">
              Join
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <Text className="font-bold">PYK-2024/XI/0055</Text>
            <br />
            <Text>Proyek Import Batch 4</Text>
            <br />
            <Text type="secondary">Sisa 160 Lembar saham</Text>
          </Col>
          <Col>
            <Button color="primary" variant="filled">
              Join
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <Text className="font-bold">PYK-2024/XI/0056</Text>
            <br />
            <Text>Proyek Import Batch 5</Text>
            <br />
            <Text type="secondary">Sisa 460 Lembar saham</Text>
          </Col>
          <Col>
            <Button color="primary" variant="filled">
              Join
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Footer Navigation */}
      <Row
        justify="space-around"
        align="middle"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          right: "0",
          padding: "8px 16px",
          background: "#fff",
          boxShadow: "0 -1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Button shape="circle" icon={<HomeOutlined />} />
        <Button shape="circle" icon={<HistoryOutlined />} />
      </Row>
    </div>
  );
};

export default DashboardInvestor;
