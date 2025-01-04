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
  Avatar,
  Space,
  Badge,
  Modal,
  message,
  Form,
  Upload,
} from "antd";
import {
  UserOutlined,
  DollarOutlined,
  PlusCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;

const InvestorPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      name: "Investor A",
      alamat: "Jl. Merdeka No. 1",
      telp: "083892010575",
      proyekAktif: "3 Proyek",
      amount: "Rp. 340.000.000",
      tglJoin: "01 Januari 2025",
    },
    {
      key: "2",
      nomor: "2",
      name: "Investor B",
      alamat: "Jl. Sudirman No. 12",
      telp: "081234567890",
      proyekAktif: "-",
      amount: "-",
      tglJoin: "01 Januari 2025",
    },
    {
      key: "3",
      nomor: "3",
      name: "Investor C",
      alamat: "Jl. Gatot Subroto No. 8",
      telp: "085678910112",
      proyekAktif: "2 Proyek",
      amount: "Rp. 40.000.000",
      tglJoin: "01 Januari 2025",
    },
    {
      key: "4",
      nomor: "4",
      name: "Investor D",
      alamat: "Jl. Ahmad Yani No. 23",
      telp: "081356789012",
      proyekAktif: "4 Proyek",
      amount: "Rp. 540.000.000",
      tglJoin: "01 Januari 2025",
    },
    {
      key: "5",
      nomor: "5",
      name: "Investor E",
      alamat: "Jl. Pemuda No. 45",
      telp: "082345678912",
      proyekAktif: "-",
      amount: "-",
      tglJoin: "01 Januari 2025",
    },
  ]);
  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    {
      title: "Nama",
      key: "name",
      render: (text, record) => (
        <Space>
          <Avatar size="large" icon={<UserOutlined />} />
          <div>
            <strong> {record.name} </strong> <br />
            <Badge status="success" text="Online" />
          </div>
        </Space>
      ),
    },
    {
      title: "Alamat & Telp",
      key: "alamat_telp",
      render: (text, record) => (
        <div>
          <div>{record.alamat}</div>
          <div style={{ color: "gray" }}>{record.telp}</div>
        </div>
      ),
    },
    {
      title: "Proyek Aktif",
      key: "proyek_modal",
      render: (text, record) => (
        <div>
          <div>{record.proyekAktif}</div>
          <div style={{ color: "gray" }}>{record.amount}</div>
        </div>
      ),
    },
    { title: "Bergabung", dataIndex: "tglJoin", key: "Bergabung" },
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
  const totalInvestors = data.length;
  const totalInvestment = "Rp. 450.000.000";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        message.success("Data berhasil disimpan!");
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch((errorInfo) => {
        console.error("Validation Failed:", errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <Row
          style={{
            marginTop: 25,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Title level={2}>Investor</Title>
          <Tooltip title="Buat Baru">
            <Button
              type="primary"
              icon={<PlusCircleOutlined />}
              onClick={showModal}
            >
              Buat Baru
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
                    style={{
                      color: "white",
                      margin: 0,
                    }}
                  >
                    Total Investors
                  </Typography.Title>
                  <Typography.Text
                    style={{
                      color: "white",
                      fontSize: "14px",
                    }}
                  >
                    {totalInvestors} People
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
          <Col xs={24} sm={12} lg={8}>
            <Card
              style={{
                background: "linear-gradient(135deg, #11998e 10%, #38ef7d 90%)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <Row align="middle">
                <Col flex="auto">
                  <Typography.Title
                    level={5}
                    style={{ color: "white", margin: 0 }}
                  >
                    Top Investor
                  </Typography.Title>
                  <Typography.Text style={{ color: "white" }}>
                    Jokowi
                  </Typography.Text>
                </Col>
                <Col>
                  <DollarOutlined style={{ fontSize: 36, color: "white" }} />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card
              style={{
                background:
                  "linear-gradient(135deg, #4facfe  10%, #00f2fe   90%)",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <Row align="middle">
                <Col flex="auto">
                  <Typography.Title
                    level={5}
                    style={{ color: "white", margin: 0 }}
                  >
                    Modal Tertinggi
                  </Typography.Title>
                  <Typography.Text style={{ color: "white" }}>
                    Rp {totalInvestment.toLocaleString()}
                  </Typography.Text>
                </Col>
                <Col>
                  <DollarOutlined style={{ fontSize: 36, color: "white" }} />
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
                    {record.alamat} <br />
                    <span className="text-gray-500">{record.telp}</span>
                  </p>
                </div>

                {/* Proyek Aktif dan Modal */}
                <div className="mb-1">
                  <strong>Proyek Aktif:</strong>
                  <p className="mt-0.5">
                    {record.proyekAktif} Proyek <br />
                    <span className="text-gray-500">
                      Rp {record.amount.toLocaleString()}
                    </span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Modal
        title="Tambah Data Investor"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Simpan"
        cancelText="Batal"
      >
        <Form
          form={form}
          layout="vertical"
          name="addInvestorForm"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Nama Investor"
            name="namaInvestor"
            rules={[
              {
                required: true,
                message: "Nama Investor tidak boleh kosong!",
              },
            ]}
          >
            <Input placeholder="Masukkan nama investor" />
          </Form.Item>

          <Form.Item
            label="Telepon"
            name="telp"
            rules={[
              {
                required: true,
                message: "Nomor telepon tidak boleh kosong!",
              },
              {
                pattern: /^[0-9]+$/,
                message: "Nomor telepon hanya boleh berisi angka!",
              },
            ]}
          >
            <Input placeholder="Masukkan nomor telepon" />
          </Form.Item>

          <Form.Item
            label="Alamat"
            name="alamat"
            rules={[
              {
                required: true,
                message: "Alamat tidak boleh kosong!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="Masukkan alamat"
              autoSize={{ minRows: 2, maxRows: 4 }}
            />
          </Form.Item>

          <Form.Item
            label="Foto"
            name="foto"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[
              {
                message: "Foto tidak boleh kosong!",
              },
            ]}
          >
            <Upload
              beforeUpload={() => false}
              listType="picture"
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload Foto</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default InvestorPage;
