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
  Tag,
} from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const JualAdd = () => {
  const [form] = Form.useForm();
  const [barangList, setBarangList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBarang, setNewBarang] = useState({});

  const barangOptions = [
    {
      id: 1,
      tipe: "Modem001",
      barcode: "1234500001",
      merk: "TP-Link",
      deskripsi: "Modem A",
      proyek: "Proyek001",
      stok: 100,
      satuan: "Pcs",
      hargaEcer: 500000,
      hargaGrosir1: 480000,
      hargaGrosir2: 450000,
    },
    {
      id: 2,
      tipe: "Modem002",
      barcode: "1234500002",
      merk: "D-Link",
      deskripsi: "Modem B",
      proyek: "Proyek001",
      stok: 80,
      satuan: "Pcs",
      hargaEcer: 520000,
      hargaGrosir1: 500000,
      hargaGrosir2: 470000,
    },
    {
      id: 3,
      tipe: "Modem003",
      barcode: "1234500003",
      merk: "Huawei",
      deskripsi: "Modem C",
      proyek: "Proyek001",
      stok: 150,
      satuan: "Pcs",
      hargaEcer: 550000,
      hargaGrosir1: 530000,
      hargaGrosir2: 500000,
    },
    {
      id: 4,
      tipe: "Modem004",
      barcode: "1234500004",
      merk: "ZTE",
      deskripsi: "Modem D",
      proyek: "Proyek001",
      stok: 200,
      satuan: "Pcs",
      hargaEcer: 600000,
      hargaGrosir1: 580000,
      hargaGrosir2: 550000,
    },
    {
      id: 5,
      tipe: "Modem005",
      barcode: "1234500005",
      merk: "Netgear",
      deskripsi: "Modem E",
      proyek: "Proyek001",
      stok: 90,
      satuan: "Pcs",
      hargaEcer: 450000,
      hargaGrosir1: 430000,
      hargaGrosir2: 400000,
    },
    {
      id: 6,
      tipe: "Modem006",
      barcode: "1234500006",
      merk: "Linksys",
      deskripsi: "Modem F",
      proyek: "Proyek002",
      stok: 75,
      satuan: "Pcs",
      hargaEcer: 480000,
      hargaGrosir1: 460000,
      hargaGrosir2: 430000,
    },
    {
      id: 7,
      tipe: "Modem007",
      barcode: "1234500007",
      merk: "MikroTik",
      deskripsi: "Modem G",
      proyek: "Proyek001",
      stok: 50,
      satuan: "Pcs",
      hargaEcer: 700000,
      hargaGrosir1: 680000,
      hargaGrosir2: 650000,
    },
    {
      id: 8,
      tipe: "Modem008",
      barcode: "1234500008",
      merk: "Tenda",
      deskripsi: "Modem H",
      proyek: "Proyek001",
      stok: 60,
      satuan: "Pcs",
      hargaEcer: 350000,
      hargaGrosir1: 330000,
      hargaGrosir2: 300000,
    },
    {
      id: 9,
      tipe: "Modem009",
      barcode: "1234500009",
      merk: "Asus",
      deskripsi: "Modem I",
      proyek: "Proyek002",
      stok: 120,
      satuan: "Pcs",
      hargaEcer: 750000,
      hargaGrosir1: 730000,
      hargaGrosir2: 700000,
    },
    {
      id: 10,
      tipe: "Modem010",
      barcode: "1234500010",
      merk: "Totolink",
      deskripsi: "Modem J",
      proyek: "Proyek002",
      stok: 110,
      satuan: "Pcs",
      hargaEcer: 400000,
      hargaGrosir1: 380000,
      hargaGrosir2: 350000,
    },
  ];

  const formatRupiah = (value) => {
    if (!value) return "Rp 0";
    const formatted = value
      .toString()
      .replace(/[^,\d]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${formatted}`;
  };

  const handleDelete = (key) => {
    setBarangList(barangList.filter((item) => item.key !== key));
  };

  const handleAddBarang = () => {
    setBarangList([...barangList, { ...newBarang, key: Date.now() }]);
    setNewBarang({});
    setIsModalOpen(false);
  };

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
      dataIndex: "satuan",
      key: "satuan",
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
    },
    {
      title: "@Harga",
      key: "harga",
      render: (text, record) => (
        <>
          <div>{formatRupiah(record.harga)}</div>
        </>
      ),
    },
    {
      title: "Sub Total",
      key: "sub_total",
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

  const calculateTotalQuantity = () => {
    return barangList.reduce((total, item) => total + item.jumlah, 0);
  };
  const calculateGrandTotal = () => {
    return barangList.reduce(
      (total, item) => total + item.jumlah * item.harga,
      0
    );
  };

  return (
    <div className="mt-3">
      <Space>
        <Link to="/penjualan">
          <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </Link>
        <Title level={3} style={{ margin: 0 }}>
          Tambah Penjualan
        </Title>
      </Space>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <Form form={form} layout="vertical">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {/* Kolom 1 */}
            <div className="space-y-2">
              <Form.Item
                label="Nomor"
                name="nomor"
                initialValue="PYK-2024/XI/120"
              >
                <Input disabled />
              </Form.Item>
              <Form.Item label="Tipe Penjualan" name="tipe">
                <Select placeholder="Pilih Tipe">
                  <Option value="Online">Online</Option>
                  <Option value="Offline">Offline</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Pelanggan" name="pelanggan">
                <Select placeholder="Pilih Pelanggan">
                  <Option value="kda store">kda store</Option>
                  <Option value="umum">Umum</Option>
                </Select>
              </Form.Item>
            </div>

            {/* Kolom 2 */}
            <div className="space-y-2">
              <Form.Item label="Jenis Pengiriman" name="jenis_kirim">
                <Select placeholder="Pilih">
                  <Option value="ambil">Ambil Langsung</Option>
                  <Option value="Offline">Kirim Ekspedisi</Option>
                </Select>
              </Form.Item>
              <Form.Item label="No Pesanan">
                <Input />
              </Form.Item>
              <Form.Item label="Tim Packing" name="packing">
                <Select placeholder="Pilih">
                  <Option value="ambil">Tomen</Option>
                  <Option value="Offline">Kiki</Option>
                </Select>
              </Form.Item>
            </div>

            {/* Kolom 3 */}
            <div className="space-y-2">
              <Form.Item label="Catatan">
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder="Catatan"
                  style={{
                    height: 120,
                    resize: "none",
                  }}
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
          <Space>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Tambah Barang
            </Button>
          </Space>
          <Divider />
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
              onChange={(value) => {
                const selectedBarang = barangOptions.find(
                  (barang) => barang.deskripsi === value
                );
                setNewBarang({
                  ...newBarang,
                  ...selectedBarang,
                  jumlah: 0,
                  harga: 0,
                });
              }}
            >
              {barangOptions.map((barang) => (
                <Option key={barang.id} value={barang.deskripsi}>
                  {barang.deskripsi}
                </Option>
              ))}
            </Select>
            {newBarang.deskripsi && (
              <div>
                <div>
                  <b>Sumber:</b> {newBarang.proyek}
                </div>
                <div>
                  <b>Stok:</b> {newBarang.stok}
                </div>
                <div>
                  <b>Satuan:</b> {newBarang.satuan}
                </div>
              </div>
            )}
          </Form.Item>

          <Form.Item label="Jumlah" required>
            <Input
              type="number"
              min={1}
              max={newBarang.stok || 1} // Batasi jumlah hingga stok tersedia
              value={newBarang.jumlah || ""}
              onChange={(e) => {
                const jumlah = parseInt(e.target.value);
                if (jumlah > newBarang.stok) return; // Jangan biarkan lebih dari stok
                let harga = newBarang.hargaEcer;
                if (jumlah >= 50 && jumlah < 100)
                  harga = newBarang.hargaGrosir1;
                else if (jumlah >= 100) harga = newBarang.hargaGrosir2;

                setNewBarang({ ...newBarang, jumlah, harga });
              }}
            />
            {newBarang.stok && (
              <div>
                <b>Jumlah maksimal:</b> {newBarang.stok} {newBarang.satuan}
              </div>
            )}
          </Form.Item>

          <Form.Item label="Harga Satuan" required>
            <Input value={formatRupiah(newBarang.harga || 0)} disabled />
            {newBarang.jumlah > 0 && (
              <Tag color="blue">
                {newBarang.jumlah < 50
                  ? "Harga Ecer"
                  : newBarang.jumlah < 100
                  ? "Harga Grosir 1"
                  : "Harga Grosir 2"}
              </Tag>
            )}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default JualAdd;
