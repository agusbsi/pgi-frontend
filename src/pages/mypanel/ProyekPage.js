import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Badge,
  Avatar,
  Modal,
  Form,
  InputNumber,
  Select,
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
const { TextArea } = Input;
const ProyekPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      no: "1",
      nomor: "PYK-2024/XI/001",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      modal: 500000000,
      saham: "5000 Lembar",
      Periode: "01 Juni 2024 s/d 01 Desember 2024",
      investor: [
        "Kang Sulton",
        "Kang Agus",
        "Kang Rois",
        "Kang Salam",
        "Kang Takul",
        "Kang Dwi",
      ],
      status: "Baru Mulai",
    },
    {
      key: "2",
      no: "2",
      nomor: "PYK-2024/XI/002",
      desc: "Proyek Import dan penjualan Modem Batch 2",
      modal: 400000000,
      saham: "4000 Lembar",
      Periode: "On Progress",
      investor: ["Kang Sulton", "Kang Agus", "Kang Rois"],
      status: "On Progress",
    },
  ]);
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Proyek",
      key: "Proyek",
      render: (text, record) => (
        <div>
          <div className="font-black">{record.nomor}</div>
          <p>{record.desc}</p>
          <div style={{ color: "gray" }}>{record.Periode}</div>
        </div>
      ),
    },
    {
      title: "Pendanaan",
      key: "Pendanaan",
      render: (text, record) => {
        return (
          <>
            <p className="font-bold">Rp. {record.modal.toLocaleString()}</p>
            <div style={{ color: "gray", fontSize: "12px" }}>
              Total Saham: {record.saham}
            </div>
          </>
        );
      },
    },
    {
      title: "Investor",
      key: "Investor",
      render: (text, record) => (
        <div>
          <Avatar.Group>
            {record.investor.slice(0, 5).map((inv, index) => (
              <Tooltip key={index} title={inv} placement="top">
                <Avatar
                  style={{
                    backgroundColor: `#${Math.floor(
                      Math.random() * 16777215
                    ).toString(16)}`,
                  }}
                >
                  {inv
                    .split(" ")
                    .map((word) => word.charAt(0))
                    .join("")}
                </Avatar>
              </Tooltip>
            ))}
            {record.investor.length > 5 && (
              <Tooltip title="Lainnya" placement="top">
                <Avatar style={{ backgroundColor: "black" }}>
                  {`+${record.investor.length - 5}`}
                </Avatar>
              </Tooltip>
            )}
          </Avatar.Group>
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      render: (text, record) => (
        <Badge
          status={record.status === "Baru Mulai" ? "success" : "processing"}
          text={record.status}
        />
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
        <Link to={`/proyek/${record.key}`}>Detail</Link>
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("New Data:", values);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
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
          <Title level={2}>Proyek</Title>
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
      <Modal
        title="Tambah Data Baru"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Simpan"
        cancelText="Batal"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="desc"
            label="Deskripsi Proyek"
            rules={[{ required: true, message: "Harap masukkan deskripsi!" }]}
          >
            <TextArea rows={3} placeholder="Deskripsi proyek..." />
          </Form.Item>

          <Form.Item
            name="modal"
            label="Target Modal"
            rules={[{ required: true, message: "Harap masukkan modal!" }]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              formatter={(value) =>
                `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/Rp\s?|,/g, "")}
            />
          </Form.Item>
          <Form.Item
            name="hargaSaham"
            label="Harga per Lembar"
            rules={[{ required: true, message: "Harap masukkan harga!" }]}
          >
            <InputNumber
              min={0}
              style={{ width: "100%" }}
              formatter={(value) =>
                `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/Rp\s?|,/g, "")}
            />
          </Form.Item>

          <Form.Item
            name="periode"
            label="Periode"
            rules={[{ required: true, message: "Harap pilih periode!" }]}
          >
            <Select
              placeholder="Pilih periode"
              options={[
                { value: "6", label: "6 Bulan" },
                { value: "9", label: "9 Bulan" },
                { value: "12", label: "12 Bulan" },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProyekPage;
