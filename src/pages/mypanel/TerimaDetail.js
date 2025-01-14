import React from "react";
import { Link } from "react-router-dom";
import { Table, Space, Typography, Card } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const TerimaDetail = () => {
  const barangList = [
    {
      deskripsi: "Modem TP-Link WiFi",
      tipe: "M7200",
      merk: "TP-Link",
      barcode: "2345678901234",
      satuan_pertama: "pcs",
      jumlah: 10,
    },
  ];

  const columns = [
    {
      title: "No",
      key: "no",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Barang",
      key: "barang",
      render: (text, record) => (
        <>
          <div style={{ fontWeight: "bold" }}>{record.tipe}</div>
          <div style={{ color: "gray" }}>{record.barcode}</div>
          <div>{record.deskripsi}</div>
        </>
      ),
    },
    {
      title: "Merk",
      dataIndex: "merk",
      key: "merk",
    },
    {
      title: "Satuan",
      dataIndex: "satuan_pertama",
      key: "satuan",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
    },
  ];



  return (
    <div className="mt-3">
      <Space>
        <Link to="/penerimaan">
          <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </Link>
        <Title level={3} style={{ margin: 0 }}>
          Detail Penerimaan
        </Title>
      </Space>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Nomor Transaksi :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">No Pembelian :</span> <br />
              PYK-2024/XI/120
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">No Proyek :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Tanggal :</span> <br />
              05 Januari 2025
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
          rowKey={(record) => record.key}
          style={{ marginBottom: "16px" }}
          
        />
      </Card>
    </div>
  );
};

export default TerimaDetail;
