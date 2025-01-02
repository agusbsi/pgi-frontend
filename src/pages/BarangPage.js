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
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  ProductOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const BarangPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      deskripsi: "Modem Huawei 4G LTE",
      tipe: "E3372",
      merk: "Huawei",
      barcode: "1234567890123",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 10,
      hargaBeli: 350000,
      hargaJual: 400000,
      stok: 10,
    },
    {
      key: "2",
      nomor: "2",
      deskripsi: "Modem TP-Link WiFi",
      tipe: "M7200",
      merk: "TP-Link",
      barcode: "2345678901234",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 8,
      hargaBeli: 500000,
      hargaJual: 550000,
      stok: 15,
    },
    {
      key: "3",
      nomor: "3",
      deskripsi: "Modem ZTE MiFi",
      tipe: "MF920",
      merk: "ZTE",
      barcode: "3456789012345",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 5,
      hargaBeli: 480000,
      hargaJual: 520000,
      stok: 20,
    },
    {
      key: "4",
      nomor: "4",
      deskripsi: "Modem Alcatel LinkZone",
      tipe: "MW40",
      merk: "Alcatel",
      barcode: "4567890123456",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 6,
      hargaBeli: 450000,
      hargaJual: 500000,
      stok: 18,
    },
    {
      key: "5",
      nomor: "5",
      deskripsi: "Modem D-Link DWR",
      tipe: "932C",
      merk: "D-Link",
      barcode: "5678901234567",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 10,
      hargaBeli: 420000,
      hargaJual: 460000,
      stok: 12,
    },
    {
      key: "6",
      nomor: "6",
      deskripsi: "Modem Netgear Nighthawk",
      tipe: "M1",
      merk: "Netgear",
      barcode: "6789012345678",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 3,
      hargaBeli: 1200000,
      hargaJual: 1350000,
      stok: 5,
    },
    {
      key: "7",
      nomor: "7",
      deskripsi: "Modem Huawei 5G",
      tipe: "CPE Pro 2",
      merk: "Huawei",
      barcode: "7890123456789",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 4,
      hargaBeli: 1500000,
      hargaJual: 1650000,
      stok: 8,
    },
    {
      key: "8",
      nomor: "8",
      deskripsi: "Modem TP-Link Mobile WiFi",
      tipe: "M7350",
      merk: "TP-Link",
      barcode: "8901234567890",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 7,
      hargaBeli: 600000,
      hargaJual: 650000,
      stok: 14,
    },
    {
      key: "9",
      nomor: "9",
      deskripsi: "Modem ZTE 4G Pocket",
      tipe: "MF79",
      merk: "ZTE",
      barcode: "9012345678901",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 9,
      hargaBeli: 520000,
      hargaJual: 580000,
      stok: 10,
    },
    {
      key: "10",
      nomor: "10",
      deskripsi: "Modem Alcatel 4G",
      tipe: "IK40",
      merk: "Alcatel",
      barcode: "0123456789012",
      satuan_pertama: "pcs",
      satuan_kedua: "box",
      konversi: 8,
      hargaBeli: 470000,
      hargaJual: 520000,
      stok: 9,
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    {
      title: "Deskripsi",
      key: "deskripsi",
      render: (text, record) => (
        <>
          <div style={{ fontWeight: "bold" }}>{record.tipe}</div>
          <div style={{ color: "gray" }}>{record.barcode}</div>
          <div>{record.deskripsi}</div>
        </>
      ),
    },
    { title: "Merk", dataIndex: "merk", key: "merk" },
    {
      title: "Satuan",
      dataIndex: "satuan_pertama",
      key: "satuan_pertama",
    },
    {
      title: "Harga",
      key: "harga",
      render: (text, record) => (
        <>
          <p>
            Beli : <span style={{ color: "gray" }}>{record.hargaBeli}</span>
          </p>
          <p>
            Jual : <span style={{ color: "gray" }}>{record.hargaJual}</span>
          </p>
        </>
      ),
    },
    { title: "Stok", dataIndex: "stok", key: "stok" },
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
        <Title level={2}>Stok Barang</Title>
        <Tooltip title="Tambah Barang Baru">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Barang Baru
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
                  style={{ color: "white", margin: 0 }}
                >
                  Total Barang
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {totalItems} Jenis
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
                  Stok Tertinggi
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  ZPE-1497
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
                  Stok Terendah
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  ZPE-1497
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
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default BarangPage;
