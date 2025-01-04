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
} from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const TerimaPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      transaksi: "PB-2024-001",
      no_beli: "PO-2024-001",
      proyek: "PYK-2024/XI/001",
      jumlah: 2500,
      tgl: "02 Januari 2025",
    },
    {
      key: "2",
      nomor: "2",
      transaksi: "PB-2024-002",
      no_beli: "PO-2024-002",
      proyek: "PYK-2024/XI/002",
      jumlah: 6500,
      tgl: "04 Januari 2025",
    },
    {
      key: "3",
      nomor: "3",
      transaksi: "PB-2024-003",
      no_beli: "PO-2024-003",
      proyek: "PYK-2024/XI/003",
      jumlah: 1500,
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
        </>
      ),
    },
    {
      title: "No Pembelian",
      key: "Pembelian",
      render: (text, record) => (
        <>
          <div className="font-bold">{record.no_beli}</div>
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
      title: "Tanggal",
      dataIndex: "tgl",
      key: "tgl",
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
        <Title level={2}>Penerimaan Barang</Title>
        <Tooltip title="Penerimaan Barang">
          <Link to="/penerimaan/add">
            <Button type="primary" icon={<PlusCircleOutlined />}>
              Tambah Penerimaan
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

export default TerimaPage;
