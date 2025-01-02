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

const UserPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      name: "User A",
      telp: "083892010575",
      username: "usera",
      password: "******",
      foto: "https://via.placeholder.com/50",
    },
    {
      key: "2",
      nomor: "2",
      name: "User B",
      telp: "081234567890",
      username: "userb",
      password: "******",
      foto: "https://via.placeholder.com/50",
    },
    {
      key: "3",
      nomor: "3",
      name: "User C",
      telp: "085678910112",
      username: "userc",
      password: "******",
      foto: "https://via.placeholder.com/50",
    },
    {
      key: "4",
      nomor: "4",
      name: "User D",
      telp: "081356789012",
      username: "userd",
      password: "******",
      foto: "https://via.placeholder.com/50",
    },
    {
      key: "5",
      nomor: "5",
      name: "User E",
      telp: "082345678912",
      username: "usere",
      password: "******",
      foto: "https://via.placeholder.com/50",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    { title: "Nama", dataIndex: "name", key: "name" },
    { title: "Telp", dataIndex: "telp", key: "telp" },
    { title: "Username", dataIndex: "username", key: "username" },
    {
      title: "Foto",
      dataIndex: "foto",
      key: "foto",
      render: (text) => (
        <img src={text} alt="Foto" style={{ width: 50, borderRadius: "50%" }} />
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
        <Title level={2}>User</Title>
        <Tooltip title="Buat Baru">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Buat Baru
          </Button>
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
                  <strong>No:</strong> {record.nomor}
                </div>
                <Dropdown overlay={menu(record)} trigger={["click"]}>
                  <Button icon={<MoreOutlined />} type="text" />
                </Dropdown>
              </div>

              {/* Nama */}
              <div className="mb-1">
                <strong>{record.name}</strong>
              </div>
              <div className="mb-1">
                <p className="mt-0.5">
                  Telp: {record.telp} <br />
                  Username: {record.username}
                </p>
              </div>

              {/* Foto */}
              <div className="mb-1">
                <strong>Foto:</strong>
                <p className="mt-0.5">
                  <img
                    src={record.foto}
                    alt="Foto"
                    style={{ width: 50, borderRadius: "50%" }}
                  />
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
