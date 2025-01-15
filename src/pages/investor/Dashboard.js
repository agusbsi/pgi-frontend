import React from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Button,
  Avatar,
  Divider,
  List,
} from "antd";
import {
  BellOutlined,
  HomeOutlined,
  DollarOutlined,
  HistoryOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const DashboardInvestor = () => {
  const transaksiData = [
    {
      tanggal: "13 Jan 2025",
      nama: "PJ-9161956",
      nominal: "IDR 38,000.00",
      metode: "Cash",
    },
    {
      tanggal: "11 Jan 2025",
      nama: "PJ-1952791",
      nominal: "IDR 30,000.00",
      metode: "Transfer BCA",
    },
    {
      tanggal: "11 Jan 2025",
      nama: "PJ-129561956",
      nominal: "IDR 17,000.00",
      metode: "Cash",
    },
    {
      tanggal: "11 Jan 2025",
      nama: "PJ-109751075",
      nominal: "IDR 44,000.00",
      metode: "Piutang",
    },
  ];
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
        gutter={[8, 8]}
        style={{
          marginBottom: 24,
          display: "flex",
        }}
      >
        <Col xs={24} sm={12} lg={12}>
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
        <Col xs={24} sm={12} lg={12}>
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
          <Col style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Text className="font-bold">PYK-2024/XI/001</Text>
            <Text>Proyek Import dan penjualan Modem Batch 1</Text>
            <Text type="secondary">50 Lembar saham</Text>
          </Col>
          <Col style={{ marginLeft: "16px" }}>
            <Link to={`/detail-proyek-investor/1`}>
              <Button color="primary" variant="filled">
                Detail
              </Button>
            </Link>
          </Col>
        </Row>

        <Divider />
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "16px" }}
        >
          <Col style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <Text className="font-bold">PYK-2024/XI/002</Text>
            <Text>Proyek Import dan penjualan Modem Batch 2</Text>
            <Text type="secondary">150 Lembar saham</Text>
          </Col>
          <Col style={{ marginLeft: "16px" }}>
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
      <Card
        title="5 Transaksi terbaru"
        extra={<Link to={`/laporan-jual`}>Lebih lengkap</Link>}
        style={{ borderRadius: "12px" }}
        className="mb-3"
      >
        <List
          dataSource={transaksiData}
          renderItem={(item) => (
            <>
              <div className="flex justify-between items-center cursor-pointer hover:bg-blue-50 p-1 rounded-lg">
                {/* Bagian Tanggal */}
                <div className="text-center">
                  <div className="font-extrabold text-lg text-neutral-500">
                    {item.tanggal.split(" ")[0]}
                  </div>
                  <div className="text-neutral-500">
                    {item.tanggal.split(" ")[1]}
                  </div>
                  <div className="text-neutral-500">
                    {item.tanggal.split(" ")[2]}
                  </div>
                </div>

                {/* Bagian Detail Transaksi */}
                <div style={{ flex: 1, marginLeft: "25px" }}>
                  <h4 className="font-bold text-blue-600">{item.nama}</h4>
                  <span className="font-semibold">{item.nominal}</span>
                  <p style={{ margin: "0", fontSize: "12px", color: "#888" }}>
                    {item.metode}
                  </p>
                </div>

                {/* Ikon Panah */}
                <RightOutlined style={{ color: "#888", fontSize: "16px" }} />
              </div>
              <Divider />
            </>
          )}
        />
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
