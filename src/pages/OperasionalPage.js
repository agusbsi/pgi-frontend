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

const OperasionalPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      transaksi: "OP-2024-001",
      deskripsi: "Pembelian alat packing lengkap",
      nominal: 250500,
      sumber: ["PYK-2024-001", "PYK-2024-002"],
      tgl: "02 Januari 2025",
    },
    {
      key: "2",
      nomor: "2",
      transaksi: "OP-2024-002",
      deskripsi: "Pembelian Alat tulis pembukuan",
      nominal: 20500,
      sumber: ["PYK-2024-001"],
      tgl: "02 Januari 2025",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    {
      title: "No Transaksi",
      key: "transaksi",
      dataIndex: "transaksi",
      render: (text) => <div className="font-bold">{text}</div>,
    },
    {
      title: "Deskripsi",
      key: "deskripsi",
      dataIndex: "deskripsi",
      render: (text) => <span className="text-xs text-gray-600">{text}</span>,
    },
    {
      title: "Nominal",
      key: "nominal",
      dataIndex: "nominal",
      render: (nominal) => <div>Rp. {nominal.toLocaleString()}</div>,
    },
    {
      title: "Sumber Dana",
      key: "sumber",
      dataIndex: "sumber",
      render: (sumber) => (
        <div>
          {sumber.map((item, index) => (
            <Tag color="magenta" key={index}>
              {item}
            </Tag>
          ))}
        </div>
      ),
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
        <Title level={2}>Operasional</Title>
        <Tooltip title="Penerimaan Barang">
          <Link to="/penerimaan/add">
            <Button type="primary" icon={<PlusCircleOutlined />}>
              Tambah Operasional
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

export default OperasionalPage;
