import React, { useState } from "react";
import {
  Table,
  Typography,
  Card,
  Row,
  Input,
  Tooltip,
  Button,
  Dropdown,
  Menu,
  Divider,
  Steps,
  Badge,
  Popover,
  Avatar,
} from "antd";
import {
  PlusCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;
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
  const [data, setData] = useState([
    {
      key: "1",
      no: "1",
      nomor: "PYK-2024/XI/001",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      dana: "Rp. 500.000.000",
      Periode: "01 Juni 2024 s/d 01 Desember 2024",
    },
  ]);
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Proyek",
      key: "Proyek",
      render: (text, record) => (
        <div>
          <div>{record.nomor}</div>
          <div style={{ color: "gray" }}>{record.desc}</div>
        </div>
      ),
    },
    {
      title: "Pendanaan",
      key: "Pendanaan",
      render: (text, record) => (
        <div>
          <div style={{ color: "gray" }}>{record.dana}</div>
        </div>
      ),
    },
    {
      title: "Periode",
      key: "Periode",
      render: (text, record) => (
        <div>
          <div style={{ color: "gray" }}>{record.Periode}</div>
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
        <Title level={2}>Proyek</Title>
        <Tooltip title="Buat Baru">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Buat Baru
          </Button>
        </Tooltip>
      </Row>
      <Divider orientation="left" plain>
        Proyek Aktif
      </Divider>
      <Card className="shadow-md shadow-blue-300 border-l-8 border-l-blue-700 p-4">
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
            <Title level={5}>Investor :</Title>
            <Avatar.Group>
              <Tooltip title="Kang Sulton" placement="top">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                  }}
                >
                  KS
                </Avatar>
              </Tooltip>
              <Tooltip title="Kang Rois" placement="top">
                <Avatar
                  style={{
                    backgroundColor: "#bb2d3b",
                  }}
                >
                  KR
                </Avatar>
              </Tooltip>
              <Tooltip title="Kang Agus" placement="top">
                <Avatar
                  style={{
                    backgroundColor: "#007bff",
                  }}
                >
                  KA
                </Avatar>
              </Tooltip>
            </Avatar.Group>
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
            <p className="mt-0.5">
              <span className="text-gray-500">Durasi :</span> <br />
              01 Januari 2025 s/d 01 juni 2025
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
        <Divider />
        <Button type="primary" block>
          Detail
        </Button>
      </Card>

      <Divider orientation="left" plain>
        History
      </Divider>
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
