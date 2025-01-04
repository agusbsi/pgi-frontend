import React from "react";
import { Link } from "react-router-dom";
import { Badge, Table, Space, Typography, Card } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const BeliDetail = () => {
  const formatRupiah = (value) => {
    if (!value) return "Rp 0";
    const formatted = value
      .toString()
      .replace(/[^,\d]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${formatted}`;
  };
  const barangList = [
    {
      namaBarang: "Modem A",
      jumlah: 10,
      harga_beli: 250000,
      harga_jual: 300000,
    },
    {
      namaBarang: "Modem B",
      jumlah: 5,
      harga_beli: 200000,
      harga_jual: 270000,
    },
    {
      namaBarang: "Router C",
      jumlah: 8,
      harga_beli: 400000,
      harga_jual: 450000,
    },
    {
      namaBarang: "Switch D",
      jumlah: 12,
      harga_beli: 150000,
      harga_jual: 180000,
    },
    {
      namaBarang: "Access Point E",
      jumlah: 7,
      harga_beli: 350000,
      harga_jual: 400000,
    },
  ];

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Nama Barang",
      dataIndex: "namaBarang",
      key: "namaBarang",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
    },
    {
      title: "Harga Beli",
      dataIndex: "harga_beli",
      key: "harga_beli",
      render: (text) => formatRupiah(text),
    },
    {
      title: "Sub Total",
      key: "sub_total",
      render: (_, record) => formatRupiah(record.jumlah * record.harga_beli),
    },
    {
      title: "@ Harga Jual",
      dataIndex: "harga_jual",
      key: "harga_jual",
      render: (text) => formatRupiah(text),
    },
  ];

  const calculateTotalQuantity = () => {
    return barangList.reduce((total, item) => total + item.jumlah, 0);
  };

  const calculateGrandTotal = () => {
    return barangList.reduce(
      (total, item) => total + item.jumlah * item.harga_beli,
      0
    );
  };

  return (
    <div className="mt-3">
      <Space>
        <Link to="/pembelian">
          <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </Link>
        <Title level={3} style={{ margin: 0 }}>
          Detail Pembelian
        </Title>
      </Space>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Nomor :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Proyek :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Supplier :</span> <br />
              Supplier A
            </p>
            <Title level={5}>Status Pembelian :</Title>
            <Badge status="processing" text="On Progress" />
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Biaya Kirim :</span> <br />
              Rp. 10.000.000
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Bea Cukai :</span> <br />
              Rp. 1.000.000
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Biaya Lainnya :</span> <br />
              Rp. 1.000.000
            </p>
          </div>
        </div>
      </Card>

      <Card className="shadow-md shadow-blue-300 mt-3">
        <p className="font-black">List Barang:</p>
        <Table
          columns={columns}
          dataSource={barangList}
          pagination={false}
          rowKey={(record) => record.key || record.namaBarang} // Pastikan key unik
          style={{ marginBottom: "16px" }}
          summary={() => (
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan={2} align="right">
                <strong>Total</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <strong>{calculateTotalQuantity()}</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell></Table.Summary.Cell>
              <Table.Summary.Cell>
                <strong>{formatRupiah(calculateGrandTotal())}</strong>
              </Table.Summary.Cell>
              <Table.Summary.Cell></Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </Card>
    </div>
  );
};

export default BeliDetail;
