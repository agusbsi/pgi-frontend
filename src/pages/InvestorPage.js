import React, { useState } from "react";
import {
  Table,
  Typography,
  Card,
  Row,
  Col,
  Input,
  Tooltip,
  Button,
  Dropdown,
  Menu,
} from "antd";
import {
  UserOutlined,
  DollarOutlined,
  PlusCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const InvestorPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      name: "Investor A",
      alamat: "Jl. Merdeka No. 1",
      telp: "083892010575",
      proyekAktif: 2,
      amount: 10000000,
    },
    {
      key: "2",
      nomor: "2",
      name: "Investor B",
      alamat: "Jl. Sudirman No. 12",
      telp: "081234567890",
      proyekAktif: 3,
      amount: 15000000,
    },
    {
      key: "3",
      nomor: "3",
      name: "Investor C",
      alamat: "Jl. Gatot Subroto No. 8",
      telp: "085678910112",
      proyekAktif: 1,
      amount: 7500000,
    },
    {
      key: "4",
      nomor: "4",
      name: "Investor D",
      alamat: "Jl. Ahmad Yani No. 23",
      telp: "081356789012",
      proyekAktif: 4,
      amount: 20000000,
    },
    {
      key: "5",
      nomor: "5",
      name: "Investor E",
      alamat: "Jl. Pemuda No. 45",
      telp: "082345678912",
      proyekAktif: 2,
      amount: 12000000,
    },
    {
      key: "6",
      nomor: "6",
      name: "Investor F",
      alamat: "Jl. Kartini No. 6",
      telp: "085123456789",
      proyekAktif: 3,
      amount: 18000000,
    },
    {
      key: "7",
      nomor: "7",
      name: "Investor G",
      alamat: "Jl. Diponegoro No. 14",
      telp: "081478956321",
      proyekAktif: 5,
      amount: 25000000,
    },
    {
      key: "8",
      nomor: "8",
      name: "Investor H",
      alamat: "Jl. R.A. Kartini No. 9",
      telp: "084512369874",
      proyekAktif: 1,
      amount: 5000000,
    },
    {
      key: "9",
      nomor: "9",
      name: "Investor I",
      alamat: "Jl. Jenderal Sudirman No. 18",
      telp: "087654321098",
      proyekAktif: 2,
      amount: 10000000,
    },
    {
      key: "10",
      nomor: "10",
      name: "Investor J",
      alamat: "Jl. Imam Bonjol No. 7",
      telp: "089123456780",
      proyekAktif: 4,
      amount: 22000000,
    },
  ]);
  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    { title: "Nama", dataIndex: "name", key: "name" },
    {
      title: "Alamat & Telp",
      key: "alamat_telp",
      render: (text, record) => (
        <div>
          <div>{record.alamat}</div>
          <div style={{ color: "gray" }}>{record.telp}</div>
        </div>
      ),
    },
    {
      title: "Proyek & Modal",
      key: "proyek_modal",
      render: (text, record) => (
        <div>
          <div>{record.proyekAktif} Proyek</div>
          <div style={{ color: "gray" }}>
            Rp {record.amount.toLocaleString()}
          </div>
        </div>
      ),
    },
    {
      title: "Menu",
      key: "menu",
      render: (text, record) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];
  const totalInvestors = data.length;
  const totalInvestment = data.reduce((sum, item) => sum + item.amount, 0);
  const menu = (record) => (
    <Menu>
      <Menu.Item key="detail" icon={<EyeOutlined />}>
        Detail
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Hapus
      </Menu.Item>
    </Menu>
  );
  // Handlers for Search and Filter
  const handleSearch = (value) => {
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div>
      <Row
        style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title level={2}>Investor</Title>
        <Tooltip title="Buat Baru">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Buat Baru
          </Button>
        </Tooltip>
      </Row>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={8}>
          <Card
            style={{
              background: "linear-gradient(135deg, #6a11cb 10%, #2575fc 90%)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Row align="middle" gutter={[8, 8]}>
              <Col flex="auto">
                <Typography.Title
                  level={5}
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  Total Investors
                </Typography.Title>
                <Typography.Text
                  style={{
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  {totalInvestors} People
                </Typography.Text>
              </Col>
              <Col>
                <UserOutlined
                  style={{
                    fontSize: "36px",
                    color: "white",
                  }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            style={{
              background: "linear-gradient(135deg, #11998e 10%, #38ef7d 90%)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Row align="middle">
              <Col flex="auto">
                <Typography.Title
                  level={5}
                  style={{ color: "white", margin: 0 }}
                >
                  Top Investor
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  Jokowi
                </Typography.Text>
              </Col>
              <Col>
                <DollarOutlined style={{ fontSize: 36, color: "white" }} />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card
            style={{
              background:
                "linear-gradient(135deg, #4facfe  10%, #00f2fe   90%)",
              color: "white",
              borderRadius: "10px",
            }}
          >
            <Row align="middle">
              <Col flex="auto">
                <Typography.Title
                  level={5}
                  style={{ color: "white", margin: 0 }}
                >
                  Modal Tertinggi
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  Rp {totalInvestment.toLocaleString()}
                </Typography.Text>
              </Col>
              <Col>
                <DollarOutlined style={{ fontSize: 36, color: "white" }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Search
          placeholder="Search by Name"
          onSearch={handleSearch}
          allowClear
          style={{
            flex: "1 1 auto",
            maxWidth: "300px",
            width: "100%",
          }}
        />
      </Row>
      <div className="container mx-auto p-0">
        {/* Tampilkan Tabel di Desktop */}
        <div className="hidden lg:block">
          <Table columns={columns} dataSource={data} />
        </div>

        {/* Tampilkan Kartu di Mobile */}
        <div className="block lg:hidden space-y-4">
          {data.map((record) => (
            <Card
              key={record.key}
              className="shadow-lg border-l-emerald-700 border-l-4 p-0.5"
            >
              {/* Header Card */}
              <div className="flex justify-between items-center mb-1">
                <div>
                  <strong>No:</strong> {record.nomor}
                </div>
                <Dropdown overlay={menu(record)} trigger={["click"]}>
                  <Button icon={<MoreOutlined />} type="text" />
                </Dropdown>
              </div>

              {/* Nama */}
              <div className="mb-1">
                <strong>{record.name}</strong>
              </div>
              <div className="mb-1">
                <p className="mt-0.5">
                  {record.alamat} <br />
                  <span className="text-gray-500">{record.telp}</span>
                </p>
              </div>

              {/* Proyek Aktif dan Modal */}
              <div className="mb-1">
                <strong>Proyek Aktif:</strong>
                <p className="mt-0.5">
                  {record.proyekAktif} Proyek <br />
                  <span className="text-gray-500">
                    Rp {record.amount.toLocaleString()}
                  </span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorPage;
