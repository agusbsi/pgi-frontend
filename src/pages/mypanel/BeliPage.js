import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  ProductOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const BeliPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      transaksi: "PO-2024-001",
      proyek: "PYK-2024/XI/001",
      jumlah: 2500,
      biaya: 300000000,
      status: "On Progress",
      tgl: "02 Januari 2025",
    },
    {
      key: "2",
      nomor: "2",
      transaksi: "PO-2024-002",
      proyek: "PYK-2024/XI/002",
      jumlah: 6500,
      biaya: 650000000,
      status: "Diterima sebagian",
      tgl: "04 Januari 2025",
    },
    {
      key: "3",
      nomor: "3",
      transaksi: "PO-2024-003",
      proyek: "PYK-2024/XI/003",
      jumlah: 1500,
      biaya: 150000000,
      status: "Selesai",
      tgl: "04 Januari 2025",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    {
      title: "No Transaksi",
      key: "Transaksi",
      render: (text, record) => (
        <>
          <div className="font-bold">{record.transaksi}</div>
          <span className="text-xs text-gray-600">
            Proyek : {record.proyek}
          </span>
        </>
      ),
    },

    {
      title: "Jumlah",
      key: "jumlah",
      render: (text, record) => <div> {record.jumlah.toLocaleString()} </div>,
    },

    {
      title: "Biaya",
      key: "biaya",
      render: (text, record) => (
        <div> Rp. {record.biaya.toLocaleString()} </div>
      ),
    },
    {
      title: "Tanggal",
      dataIndex: "tgl",
      key: "tgl",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Aksi",
      key: "aksi",
      render: (text, record) => (
        <Dropdown overlay={menu(record)} trigger={["click"]}>
          <Button icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const totalItems = data.length;
  const menu = (record) => (
    <Menu>
      <Menu.Item key="Kartu" icon={<EyeOutlined />}>
        <Link to={`/pembelian/${record.key}`}>Detail</Link>
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Hapus
      </Menu.Item>
    </Menu>
  );

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
        <Title level={2}>Pembelian</Title>
        <Tooltip title="Pembelian Baru">
          <Link to="/pembelian/add">
            <Button type="primary" icon={<PlusCircleOutlined />}>
              Tambah Pembelian
            </Button>
          </Link>
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
                  style={{ color: "white", margin: 0 }}
                >
                  Total Pembelian
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {totalItems} Transaksi
                </Typography.Text>
              </Col>
              <Col>
                <ProductOutlined
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
                  On Progress
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  2 Transaksi
                </Typography.Text>
              </Col>
              <Col>
                <ProductOutlined
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
                  Selesai
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  1 Transaksi
                </Typography.Text>
              </Col>
              <Col>
                <ProductOutlined
                  style={{
                    fontSize: "36px",
                    color: "white",
                  }}
                />
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
          placeholder="Cari Barang"
          onSearch={handleSearch}
          allowClear
          style={{ flex: "1 1 auto", maxWidth: "300px", width: "100%" }}
        />
      </Row>
      <div className="container mx-auto p-0">
        <Table
          columns={columns}
          dataSource={data}
          components={{
            header: {
              cell: (props) => (
                <th
                  {...props}
                  style={{ backgroundColor: "#1890ff", color: "white" }}
                >
                  {props.children}
                </th>
              ),
            },
          }}
        />
      </div>
    </div>
  );
};

export default BeliPage;
