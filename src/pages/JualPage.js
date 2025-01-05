import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Typography,
  Row,
  Input,
  Tooltip,
  Button,
  Dropdown,
  Menu,
  Tag,
} from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const JualPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      transaksi: "PJ-2024-001",
      proyek: "PYK-2024-001",
      pelanggan: "KDA Store",
      jumlah: 1000,
      nominal: 8500500,
      status: "Menunggu Packing",
      tgl: "02 Januari 2025",
    },
    {
      key: "2",
      nomor: "2",
      transaksi: "PJ-2024-002",
      proyek: "PYK-2024-001",
      pelanggan: "Umum",
      jumlah: 10,
      nominal: 85050,
      status: "Selesai",
      tgl: "02 Januari 2025",
    },
    {
      key: "3",
      nomor: "3",
      transaksi: "PJ-2024-003",
      proyek: "PYK-2024-001",
      pelanggan: "Mitra",
      jumlah: 100,
      nominal: 850050,
      status: "Dikirim",
      tgl: "02 Januari 2025",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    {
      title: "No Transaksi",
      key: "transaksi",
      render: (text, record) => (
        <div className="font-bold">{record.transaksi}</div>
      ),
    },
    {
      title: "Pelanggan",
      key: "pelanggan",
      render: (text, record) => <span>{record.pelanggan}</span>,
    },
    {
      title: "Jumlah",
      key: "jumlah",
      dataIndex: "jumlah",
      render: (jumlah) => <div>{jumlah}</div>,
    },
    {
      title: "Nominal",
      key: "nominal",
      dataIndex: "nominal",
      render: (nominal) => <div>Rp. {nominal.toLocaleString()}</div>,
    },

    {
      title: "Tanggal",
      dataIndex: "tgl",
      key: "tgl",
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => (
        <Tag color="magenta" bordered={false}>
          {record.status}
        </Tag>
      ),
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

  const menu = (record) => (
    <Menu>
      <Menu.Item key="detail" icon={<EditOutlined />}>
        <Link to={`/penjualan/${record.key}`}>Detail</Link>
      </Menu.Item>
      <Menu.Item key="cetak" icon={<EditOutlined />}>
        Cetak
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
        <Title level={2}>Penjualan</Title>
        <Tooltip title="Penerimaan Barang">
          <Link to="/penjualan/add">
            <Button type="primary" icon={<PlusCircleOutlined />}>
              Tambah Penjualan
            </Button>
          </Link>
        </Tooltip>
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

export default JualPage;
