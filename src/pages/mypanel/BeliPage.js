import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Menu,Modal,Form,InputNumber,Select,Divider
} from "antd";
import {
  PlusCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  ProductOutlined,
  EyeOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

const BeliPage = () => {
  const [data, setData] = useState([
    {
      key: "1",
      nomor: "1",
      transaksi: "PO-2024-001",
      proyek: "PYK-2024/XI/001",
      jumlah: 2500,
      biaya: 300000000,
      status: "On Progress",
      tgl: "02 Januari 2025",
    },
    {
      key: "2",
      nomor: "2",
      transaksi: "PO-2024-002",
      proyek: "PYK-2024/XI/002",
      jumlah: 6500,
      biaya: 650000000,
      status: "Diterima sebagian",
      tgl: "04 Januari 2025",
    },
    {
      key: "3",
      nomor: "3",
      transaksi: "PO-2024-003",
      proyek: "PYK-2024/XI/003",
      jumlah: 1500,
      biaya: 150000000,
      status: "Selesai",
      tgl: "04 Januari 2025",
    },
  ]);

  const columns = [
    { title: "No", dataIndex: "nomor", key: "nomor" },
    {
      title: "No Transaksi",
      key: "Transaksi",
      render: (text, record) => (
        <>
          <div className="font-bold">{record.transaksi}</div>
          <span className="text-xs text-gray-600">
            Proyek : {record.proyek}
          </span>
        </>
      ),
    },

    {
      title: "Jumlah",
      key: "jumlah",
      render: (text, record) => <div> {record.jumlah.toLocaleString()} </div>,
    },

    {
      title: "Biaya",
      key: "biaya",
      render: (text, record) => (
        <div> Rp. {record.biaya.toLocaleString()} </div>
      ),
    },
    {
      title: "Tanggal",
      key: "tgl",
      render : (text, record) => (
        <>
         <span className="text-xs text-gray-600">
            Dibuat : {record.tgl}
          </span>
          <br/>
         <span className="text-xs text-gray-600">
            Update : {record.tgl}
          </span>
        </>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
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

  const totalItems = data.length;
  const menu = (record) => (
    <Menu>
      <Menu.Item key="Kartu" icon={<EyeOutlined />}>
        <Link to={`/pembelian/${record.key}`}>Detail</Link>
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Update
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

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    // Form submit logic here
    console.log("Data Pembelian Ditambahkan");
    setIsModalVisible(false);
  };

  const [form] = Form.useForm();
  const [total, setTotal] = useState(0);
  const [hpp, setHpp] = useState(0);

  const handleQuantityChange = (value) => {
    const productPrice = form.getFieldValue('productPrice');
    if (productPrice && value) {
      const calculatedTotal = productPrice * value;
      setTotal(calculatedTotal);
      form.setFieldsValue({ total: calculatedTotal });

      // Set HPP based on total, adjust if necessary based on other costs
      const customsCost = form.getFieldValue('customsCost') || 0;
      const shippingCost = form.getFieldValue('shippingCost') || 0;
      const otherCost = form.getFieldValue('otherCost') || 0;
      const calculatedHpp = calculatedTotal + customsCost + shippingCost + otherCost;
      setHpp(calculatedHpp);
      form.setFieldsValue({ hpp: calculatedHpp });
    }
  };

  const handlePriceChange = (value) => {
    const quantity = form.getFieldValue('quantity');
    if (quantity && value) {
      const calculatedTotal = value * quantity;
      setTotal(calculatedTotal);
      form.setFieldsValue({ total: calculatedTotal });

      // Update HPP as well
      const customsCost = form.getFieldValue('customsCost') || 0;
      const shippingCost = form.getFieldValue('shippingCost') || 0;
      const otherCost = form.getFieldValue('otherCost') || 0;
      const calculatedHpp = calculatedTotal + customsCost + shippingCost + otherCost;
      setHpp(calculatedHpp);
      form.setFieldsValue({ hpp: calculatedHpp });
    }
  };

  const handleCostChange = () => {
    const quantity = form.getFieldValue('quantity');
    const price = form.getFieldValue('productPrice');

    // Recalculate HPP based on the current costs
    const customsCost = form.getFieldValue('customsCost') || 0;
    const shippingCost = form.getFieldValue('shippingCost') || 0;
    const otherCost = form.getFieldValue('otherCost') || 0;
    const calculatedHpp = price + (customsCost/quantity) + (shippingCost/quantity) + (otherCost/quantity);
    setHpp(calculatedHpp);
    form.setFieldsValue({ hpp: calculatedHpp });
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
        <Title level={2}>Pembelian</Title>
        <Tooltip title="Pembelian Baru">
            <Button type="primary" icon={<PlusCircleOutlined />} onClick={showModal}>
              Tambah Pembelian
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
                  Total Pembelian
                </Typography.Title>
                <Typography.Text style={{ color: "white", fontSize: "14px" }}>
                  {totalItems} Transaksi
                </Typography.Text>
              </Col>
              <Col>
                <ProductOutlined
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
                  On Progress
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  2 Transaksi
                </Typography.Text>
              </Col>
              <Col>
                <ProductOutlined
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
                  Selesai
                </Typography.Title>
                <Typography.Text style={{ color: "white" }}>
                  1 Transaksi
                </Typography.Text>
              </Col>
              <Col>
                <ProductOutlined
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
          placeholder="Cari Barang"
          onSearch={handleSearch}
          allowClear
          style={{ flex: "1 1 auto", maxWidth: "300px", width: "100%" }}
        />
      </Row>
      <div className="container mx-auto p-0">
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
      <Modal
      title="Tambah Data Pembelian"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={null}
      width={1000}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleOk}
      >
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item
              label="Nomor"
              name="nomor"
              initialValue="PYK-2024/XI/120"
            >
              <Input disabled />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Proyek"
              name="proyek"
              rules={[{ required: true, message: 'Proyek harus dipilih' }]}
            >
              <Select placeholder="Pilih Proyek">
                <Option value="proyek1">Proyek 1</Option>
                <Option value="proyek2">Proyek 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Supplier"
              name="supplier"
              rules={[{ required: true, message: 'Supplier harus dipilih' }]}
            >
              <Select placeholder="Pilih Supplier">
                <Option value="supplier1">Supplier 1</Option>
                <Option value="supplier2">Supplier 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Resi Agen" name="resi" rules={[{ required: true, message: 'Resi agen harus diisi' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Nomor Invoice" name="invoice" rules={[{ required: true, message: 'Nomor invoice harus diisi' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Shipping Mark" name="shiping" rules={[{ required: true, message: 'Shipping mark harus diisi' }]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left" plain>
          Data Barang
        </Divider>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item label="Nama Barang" name="barang" rules={[{ required: true, message: 'Nama barang harus dipilih' }]}>
              <Select placeholder="Pilih Barang">
                <Option value="barang1">Barang 1</Option>
                <Option value="barang2">Barang 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Qty"
              name="quantity"
              rules={[{ required: true, message: 'Qty harus diisi' }]}
            >
              <InputNumber
                min={1}
                style={{ width: '100%' }}
                onChange={handleQuantityChange}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item
              label="Harga Beli"
              name="productPrice"
              rules={[{ required: true, message: 'Harga barang harus diisi' }]}
            >
              <InputNumber
                min={1}
                style={{ width: '100%' }}
                onChange={handlePriceChange}
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="Total" name="total" initialValue={total}>
              <Input value={total} disabled />
            </Form.Item>
          </Col>
        </Row>

        <Divider orientation="left" plain>
          Data Biaya
        </Divider>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Biaya Cukai" name="customsCost" onChange={handleCostChange}>
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Biaya Kirim" name="shippingCost" onChange={handleCostChange}>
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Biaya Lain-lain" name="otherCost" onChange={handleCostChange}>
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Divider orientation="left" plain>
          Estimasi Penjualan per barang
        </Divider>

        <Row gutter={24}>
          <Col span={6}>
          <Form.Item label="Hpp" name="hpp" initialValue={total}>
              <Input value={total} disabled />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Profit Ecer" name="ecer">
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Profit Grosir 1" name="grosir1">
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Profit Grosir 2" name="grosir2">
              <InputNumber min={0} style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item label="Keterangan" name="notes">
          <Input.TextArea rows={4} />
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

export default BeliPage;
