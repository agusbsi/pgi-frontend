import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Typography, Row, Input, Button, Tag, Card } from "antd";

const { Title } = Typography;
const { Search } = Input;

const PackingPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      transaksi: "PJ-2024-001",
      proyek: "PYK-2024-001",
      pelanggan: "KDA Store",
      jumlah: 1000,
      kirim: "Kirim via Kalog",
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
      kirim: "Kirim Via JNE",
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
      kirim: "Ambil Langsung",
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
      title: "Tanggal",
      dataIndex: "tgl",
      key: "tgl",
    },
    {
      title: "Pengiriman",
      key: "kirim",
      dataIndex: "kirim",
      render: (text, record) => <div>{record.kirim}</div>,
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
        <Link to={`/packing/${record.key}`}>
          <Button type="primary">Proses</Button>
        </Link>
      ),
    },
  ];

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
        <Title level={2}>Packing Barang</Title>
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
        <div className="block lg:hidden space-y-4">
          {data.map((item, index) => (
            <Card key={index} bordered className="border-l-4 border-l-blue-500">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-medium text-gray-600">
                  {index + 1}
                </div>
                <div className="text-sm font-bold">{item.transaksi}</div>
              </div>
              <p className="mt-0.5">
                <span className="text-gray-500">Pelanggan :</span> <br />
                {item.pelanggan}
              </p>
              <div className="flex justify-between items-center">
                <p className="mt-0.5">
                  <span className="text-gray-500">Jumlah :</span> <br />
                  {item.jumlah}
                </p>
                <p className="mt-0.5">
                  <span className="text-gray-500">Tanggal :</span> <br />
                  {item.tgl}
                </p>
              </div>
              <p className="mt-0.5">
                <span className="text-gray-500">Status :</span> <br />
                {item.status}
              </p>
              <Link to={`/packing/${item.key}`}>
                <Button type="primary" block>
                  Proses
                </Button>
              </Link>
            </Card>
          ))}
        </div>
        <div className="hidden lg:block">
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
    </div>
  );
};

export default PackingPage;
