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
  UserOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const PelangganPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      nama: "Sulton Store",
      kontak: "081234567890",
      alamat: "Jl. Anggrek No. 123, Jakarta",
      email: "Toko Online",
    },
    {
      key: "2",
      nomor: "2",
      nama: "Ade Store",
      kontak: "081987654321",
      alamat: "Jl. Melati No. 45, Bandung",
      email: "Mitra",
    },
    {
      key: "3",
      nomor: "3",
      nama: "KDA Store",
      kontak: "081223344556",
      alamat: "Jl. Mawar No. 67, Surabaya",
      email: "Toko Online",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    { title: "Nama Pelanggan", dataIndex: "nama", key: "nama" },
    { title: "Kontak", dataIndex: "kontak", key: "kontak" },
    { title: "Alamat", dataIndex: "alamat", key: "alamat" },
    { title: "Tipe", dataIndex: "email", key: "email" },
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
      item.nama.toLowerCase().includes(value.toLowerCase())
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
        <Title level={2}>Pelanggan</Title>
        <Tooltip title="Tambah Pelanggan Baru">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Pelanggan Baru
          </Button>
        </Tooltip>
      </Row>
      <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
        <Col xs={24} sm={12} lg={6}>
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
                  Total Pelanggan
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {data.length} Pelanggan
                </Typography.Text>
              </Col>
              <Col>
                <UserOutlined
                  style={{
                    fontSize: "36px",
                    color: "white",
                  }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
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
                  Toko Online
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {data.length} Toko
                </Typography.Text>
              </Col>
              <Col>
                <UserOutlined
                  style={{
                    fontSize: "36px",
                    color: "white",
                  }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
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
                  Mitra
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {data.length} Mitra
                </Typography.Text>
              </Col>
              <Col>
                <UserOutlined
                  style={{
                    fontSize: "36px",
                    color: "white",
                  }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
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
                  Umum
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {data.length}
                </Typography.Text>
              </Col>
              <Col>
                <UserOutlined
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
          placeholder="Cari Pelanggan"
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

export default PelangganPage;
