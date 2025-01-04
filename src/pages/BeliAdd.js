import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Table,
  Space,
  Modal,
  Select,
  Typography,
  Card,
  Divider,
  Upload,
} from "antd";
import { LeftCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

const BeliAdd = () => {
  const [form] = Form.useForm();
  const [barangList, setBarangList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBarang, setNewBarang] = useState({});
  const [biayaKirim, setBiayaKirim] = useState(0);
  const [biayaCukai, setBiayaCukai] = useState(0);
  const [biayaLain, setBiayaLain] = useState(0);

  // Data dummy untuk nama barang
  const barangOptions = [
    { id: 1, nama: "Barang A" },
    { id: 2, nama: "Barang B" },
    { id: 3, nama: "Barang C" },
  ];

  const formatRupiah = (value) => {
    if (!value) return "Rp 0";
    const formatted = value
      .toString()
      .replace(/[^,\d]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${formatted}`;
  };

  const parseRupiah = (value) => {
    return parseInt(value.replace(/[^,\d]/g, "") || 0, 10);
  };

  const handleDelete = (key) => {
    setBarangList(barangList.filter((item) => item.key !== key));
  };

  const handleAddBarang = () => {
    setBarangList([...barangList, { ...newBarang, key: Date.now() }]);
    setNewBarang({});
    setIsModalOpen(false);
  };

  const handleSubmit = (values) => {
    const data = {
      ...values,
      barangList,
      biayaKirim: biayaKirim,
      biayaCukai: biayaCukai,
      biayaLain: biayaLain,
    };
    console.log("Data yang dikirim:", data);
    // Kirim data ke server menggunakan Axios atau fetch
  };

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
      title: "Harga beli",
      dataIndex: "harga",
      key: "harga",
      render: (text) => formatRupiah(text),
    },
    {
      title: "Total",
      key: "total",
      render: (_, record) => formatRupiah(record.jumlah * record.harga),
    },
    {
      title: "Aksi",
      key: "action",
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record.key)}>
          Hapus
        </Button>
      ),
    },
  ];

  const calculateGrandTotal = () => {
    return barangList.reduce(
      (total, item) => total + item.jumlah * item.harga,
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
          Tambah Pembelian
        </Title>
      </Space>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <Form.Item
                label="Nomor"
                name="nomor"
                initialValue="PYK-2024/XI/120"
              >
                <Input disabled />
              </Form.Item>
              <Form.Item label="Proyek" name="proyek">
                <Select placeholder="Pilih Proyek">
                  <Option value="proyek1">Proyek 1</Option>
                  <Option value="proyek2">Proyek 2</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Supplier" name="supplier">
                <Select placeholder="Pilih Supplier">
                  <Option value="supplier1">Supplier 1</Option>
                  <Option value="supplier2">Supplier 2</Option>
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item label="Biaya Kirim">
                <Input
                  value={formatRupiah(biayaKirim)}
                  onChange={(e) => setBiayaKirim(parseRupiah(e.target.value))}
                />
              </Form.Item>
              <Form.Item label="Biaya Cukai">
                <Input
                  value={formatRupiah(biayaCukai)}
                  onChange={(e) => setBiayaCukai(parseRupiah(e.target.value))}
                />
              </Form.Item>
              <Form.Item label="Biaya Lain-lain">
                <Input
                  value={formatRupiah(biayaLain)}
                  onChange={(e) => setBiayaLain(parseRupiah(e.target.value))}
                />
              </Form.Item>
            </div>
          </div>
          <Divider />
          <p className="font-black">List Barang:</p>
          <Table
            columns={columns}
            dataSource={barangList}
            pagination={false}
            rowKey="key"
            style={{ marginBottom: "16px" }}
            summary={() => (
              <Table.Summary.Row>
                <Table.Summary.Cell colSpan={4} align="right">
                  <strong>Grand Total</strong>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  <strong>{formatRupiah(calculateGrandTotal())}</strong>
                </Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
              </Table.Summary.Row>
            )}
          />
          <Space>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Tambah Barang
            </Button>
          </Space>
          <Divider />
          <Form.Item label="Invoice">
            <Upload multiple>
              <Button icon={<PlusOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Bukti Transfer">
            <Upload multiple>
              <Button icon={<PlusOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item label="Faktur Pembelian">
            <Upload multiple>
              <Button icon={<PlusOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>
          <Space className="flex justify-end mt-3">
            <Button type="primary" htmlType="submit">
              Simpan
            </Button>
            <Button htmlType="button" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Space>
        </Form>
      </Card>

      <Modal
        title="Tambah Barang"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddBarang}
      >
        <Form layout="vertical">
          <Form.Item label="Nama Barang" required>
            <Select
              showSearch
              placeholder="Pilih atau ketik nama barang"
              onChange={(value) =>
                setNewBarang({ ...newBarang, namaBarang: value })
              }
            >
              {barangOptions.map((barang) => (
                <Option key={barang.id} value={barang.nama}>
                  {barang.nama}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Jumlah" required>
            <Input
              type="number"
              min={1}
              value={newBarang.jumlah}
              onChange={(e) =>
                setNewBarang({ ...newBarang, jumlah: parseInt(e.target.value) })
              }
            />
          </Form.Item>
          <Form.Item label="Harga Satuan" required>
            <Input
              value={formatRupiah(newBarang.harga || 0)}
              onChange={(e) =>
                setNewBarang({
                  ...newBarang,
                  harga: parseRupiah(e.target.value),
                })
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default BeliAdd;
