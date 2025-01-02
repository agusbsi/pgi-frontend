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
  TeamOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const SupplierPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      nama: "PT Sumber Elektronik",
      kontak: "081234567890",
      alamat: "Jl. Elektronik No. 123, Jakarta",
      email: "info@sumberelektronik.com",
    },
    {
      key: "2",
      nomor: "2",
      nama: "CV Teknologi Abadi",
      kontak: "081987654321",
      alamat: "Jl. Teknologi No. 45, Surabaya",
      email: "sales@teknologiabadi.com",
    },
    {
      key: "3",
      nomor: "3",
      nama: "UD Makmur Jaya",
      kontak: "081223344556",
      alamat: "Jl. Makmur No. 67, Bandung",
      email: "support@makmurjaya.com",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    { title: "Nama Supplier", dataIndex: "nama", key: "nama" },
    { title: "Kontak", dataIndex: "kontak", key: "kontak" },
    { title: "Alamat", dataIndex: "alamat", key: "alamat" },
    { title: "Email", dataIndex: "email", key: "email" },
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
        <Title level={2}>Supplier</Title>
        <Tooltip title="Tambah Supplier Baru">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Supplier Baru
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
                  Total Supplier
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {data.length} Supplier
                </Typography.Text>
              </Col>
              <Col>
                <TeamOutlined
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
          placeholder="Cari Supplier"
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

export default SupplierPage;
