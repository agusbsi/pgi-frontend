import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  Typography,
  Card,
  Row,
  Tooltip,
  Button,
  Dropdown,
  Menu,
  Divider,
  Steps,
  Badge,
  Popover,
  Space,
} from "antd";
import {
  LeftCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const ProyekPage = () => {
  const [data] = useState([
    {
      key: "1",
      no: "1",
      nomor: "PYK-2024/XI/001",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      dana: "Rp. 500.000.000",
      Periode: "01 Juni 2024 s/d 01 Desember 2024",
    },
  ]);
  const [investor] = useState([
    {
      key: "1",
      no: "1",
      kontrak: "PYK-2024/XI/001/001",
      investor: "Kang Sulton",
      saham: "50 Lembar",
      modal: 50000000,
    },
    {
      key: "2",
      no: "2",
      kontrak: "PYK-2024/XI/001/002",
      investor: "Kang Rois",
      saham: "240 Lembar",
      modal: 240000000,
    },
    {
      key: "3",
      no: "3",
      kontrak: "PYK-2024/XI/001/003",
      investor: "Kang Salam",
      saham: "150 Lembar",
      modal: 150000000,
    },
  ]);
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Investor",
      key: "Investor",
      render: (text, record) => <p>{record.investor}</p>,
    },
    {
      title: "No Kontrak",
      key: "Kontrak",
      render: (text, record) => <p>{record.kontrak}</p>,
    },
    {
      title: "Jumlah Saham",
      key: "saham",
      render: (text, record) => <p>{record.saham}</p>,
    },
    {
      title: "Modal",
      key: "Modal",
      render: (text, record) => (
        <p className="font-bold">Rp. {record.modal.toLocaleString()}</p>
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
  const menu = (record) => (
    <Menu>
      <Menu.Item key="detail" icon={<EyeOutlined />}>
        Cetak Surat
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Hapus
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="mt-3">
      <Space>
        <Link to="/proyek">
          <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </Link>
        <Title level={3} style={{ margin: 0 }}>
          Detail Proyek
        </Title>
      </Space>
      <Card className="shadow-md shadow-blue-300 border-l-8 border-l-blue-700 p-4 mt-3">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Nomor :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Deskripsi :</span> <br />
              Projek Import dan Penjualan Modem Batch 1
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Target Dana :</span> <br />
              Rp. 500.000.000 (lima ratus juta)
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Durasi :</span> <br />
              01 Januari 2025 s/d 01 juni 2025
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Jumlah Saham :</span> <br />
              100 dari 500 Lembar
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Harga Saham :</span> <br />
              Rp. 1.000.000 / Lembar
            </p>
            <Title level={5}>Status Proyek :</Title>
            <Badge status="processing" text="On Progress" />
          </div>
        </div>
        <Title level={5} style={{ marginBottom: 24 }}>
          Progres Proyek :
        </Title>
        <Steps
          current={0}
          progressDot={customDot}
          items={[
            {
              title: <span className="text-sm">Pengumpulan Modal</span>,
            },
            {
              title: <span className="text-sm">Pembelian Barang (Import)</span>,
            },
            {
              title: <span className="text-sm">Penerimaan Barang</span>,
            },
            {
              title: <span className="text-sm">Penjualan Barang</span>,
            },
            {
              title: <span className="text-sm">Pembagian Dana Investor</span>,
            },
            {
              title: <span className="text-sm">Proyek Selesai</span>,
            },
          ]}
        />
      </Card>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <p className="font-black">Pengaturan Penjualan :</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500"> Profit :</span> <br />
              Rp. 30.000 / Barang
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500"> Minimal Grosir 1 :</span> <br />
              50 - 99 Pcs
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Minimal Grosir 2:</span> <br />
              100 pcs - tak terhingga
            </p>
          </div>
        </div>
      </Card>
      <Divider />
      <Row
        style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title level={3}>List Investor</Title>
        <Tooltip title="Tambah Investor">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Tambah Investor
          </Button>
        </Tooltip>
      </Row>

      <div className="container mx-auto p-0">
        {/* Tampilkan Tabel di Desktop */}
        <div className="hidden lg:block">
          <Table columns={columns} dataSource={investor} />
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
                  <strong>No:</strong> {record.no}
                </div>
                <Dropdown overlay={menu(record)} trigger={["click"]}>
                  <Button icon={<MoreOutlined />} type="text" />
                </Dropdown>
              </div>

              {/* Nama */}
              <div className="mb-1">
                <strong>{record.nomor}</strong>
              </div>
              <div className="mb-1">
                <p className="mt-0.5">
                  <span className="text-gray-500">{record.desc}</span>
                </p>
              </div>

              {/* Proyek Aktif dan Modal */}
              <div className="mb-1">
                <strong>Pendanaan:</strong>
                <p className="mt-0.5">
                  <span className="text-gray-500">{record.dana}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProyekPage;
