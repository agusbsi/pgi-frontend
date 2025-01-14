import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Table, Space, Typography, Card, Divider, Timeline, Row, Button, Form, Select, Col, Modal, Input } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

const { Title } = Typography;

const BeliDetail = () => {
  const formatRupiah = (value) => {
    if (!value) return "Rp 0";
    const formatted = value
      .toString()
      .replace(/[^,\d]/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return `Rp ${formatted}`;
  };

  const barangList = [
    {
      deskripsi: "Modem TP-Link WiFi",
      tipe: "M7200",
      merk: "TP-Link",
      barcode: "2345678901234",
      satuan_pertama: "pcs",
      jumlah: 10,
      harga_beli: 250000,
      harga_jual: 300000,
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
    {
      title: "Harga Beli",
      dataIndex: "harga_beli",
      key: "harga_beli",
      render: (text) => formatRupiah(text),
    },
    {
      title: "Total",
      key: "sub_total",
      render: (_, record) => formatRupiah(record.jumlah * record.harga_beli),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = (values) => {
    console.log("Updated Values:", values);
    setIsModalVisible(false);
  };

  return (
    <div className="mt-3">
      <Row
        style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Space>
          <Link to="/pembelian">
            <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
          </Link>
          <Title level={3} style={{ margin: 0 }}>
            Detail Pembelian
          </Title>
        </Space>
        <Button type="primary" onClick={showModal}>
          Update Data
        </Button>
      </Row>

      <Card className="shadow-md shadow-blue-300 mt-3">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Nomor :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Proyek :</span> <br />
              PYK-2024/XI/120
            </p>
            <Title level={5}>Status Pembelian :</Title>
            <Badge status="processing" text="On Progress" />
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Supplier :</span> <br />
              Supplier A
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">No Invoice :</span> <br />
              92659265929966
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Resi Agen :</span> <br />
              470174f9wf9f92
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Shipping Mark :</span> <br />
              92659265929966
            </p>
          </div>
        </div>

        <Divider orientation="left" plain>
          Data Barang
        </Divider>
        <Table
          columns={columns}
          dataSource={barangList}
          pagination={false}
          rowKey={(record) => record.key}
          style={{ marginBottom: "16px" }}
        />

        <Divider orientation="left" plain>
          Data Biaya
        </Divider>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Biaya Cukai :</span> <br />
              Rp. 3.000.000
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Biaya Kirim :</span> <br />
              Rp. 3.000.000
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Biaya Lain - lain :</span> <br />
              Rp. 3.000.000
            </p>
          </div>
        </div>

        <Divider orientation="left" plain>
          Estimasi Profit per Barang
        </Divider>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Profit Ecer :</span> <br />
              Rp. 20.000 / barang
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Profit Grosir 1 :</span> <br />
              Rp. 18.000 / barang
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Profit Grosir 2 :</span> <br />
              Rp. 15.000 / barang
            </p>
          </div>
        </div>
      </Card>

      <Card className="mt-3">
        <p>Riwayat Pembaruan</p>
        <Timeline
          items={[
            {
              children: 'Dibuat pada : 02 Januari 2025',
            },
            {
              children: 'Diupdate Nomor Invoice pada : 05 Januari 2025',
            },
            {
              children: 'Diupdate Nomor Resi Agen pada : 10 Januari 2025',
            },
          ]}
        />
      </Card>

      <Modal
  title="Update Data Pembelian"
  open={isModalVisible}
  onCancel={handleCancel}
  footer={null}
  width={1000}
>
  <Form form={form} layout="vertical" onFinish={handleUpdate}>
    
    {/* Select Box for Category */}
    <Row gutter={24}>
      <Col span={8}>
        <Form.Item
          label="Pilih Kategori"
          name="category"
          rules={[{ required: true, message: 'Kategori harus dipilih' }]}
        >
          <Select placeholder="Pilih kategori">
            <Select.Option value="update_invoice">Update Invoice</Select.Option>
            <Select.Option value="update_resi">Update Resi Agen</Select.Option>
            <Select.Option value="update_shipping_mark">Update Shipping Mark</Select.Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>

    {/* Form for Update Invoice */}
    {form.getFieldValue('category') === 'update_invoice' && (
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="Update Nomor Invoice"
            name="invoice"
            rules={[{ required: true, message: 'Nomor Invoice harus diisi' }]}
          >
            <Input placeholder="Masukkan Nomor Invoice" />
          </Form.Item>
        </Col>
      </Row>
    )}

    {/* Form for Update Resi Agen */}
    {form.getFieldValue('category') === 'update_resi' && (
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="Update Resi Agen"
            name="resi"
            rules={[{ required: true, message: 'Resi Agen harus diisi' }]}
          >
            <Input placeholder="Masukkan Nomor Resi Agen" />
          </Form.Item>
        </Col>
      </Row>
    )}

    {/* Form for Update Shipping Mark */}
    {form.getFieldValue('category') === 'update_shipping_mark' && (
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            label="Update Shipping Mark"
            name="shippingMark"
            rules={[{ required: true, message: 'Shipping Mark harus diisi' }]}
          >
            <Input placeholder="Masukkan Shipping Mark" />
          </Form.Item>
        </Col>
      </Row>
    )}

    <Divider orientation="left" plain>
      Keterangan
    </Divider>

    <Form.Item label="Keterangan" name="notes">
      <Input.TextArea rows={4} placeholder="Masukkan keterangan" />
    </Form.Item>

    <Row justify="end">
      <Col>
        <Button onClick={handleCancel} style={{ marginRight: 8 }}>
          Batal
        </Button>
        <Button type="primary" htmlType="submit">
          Simpan
        </Button>
      </Col>
    </Row>
  </Form>
</Modal>

    </div>
  );
};

export default BeliDetail;
