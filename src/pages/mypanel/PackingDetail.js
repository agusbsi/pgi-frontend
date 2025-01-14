import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Table,
  Space,
  Typography,
  Card,
  Tag,
  Button,
  Modal,
  Input,
  Form,
  message,
  Upload,
  Image,
  Divider,
} from "antd";
import { LeftCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const PackingDetail = () => {
  const barangList = [
    {
      deskripsi: "Modem TP-Link WiFi",
      tipe: "M7200",
      merk: "TP-Link",
      barcode: "2345678901234",
      satuan_pertama: "pcs",
      jumlah: 10,
    },
    {
      deskripsi: "Modem ZTE MiFi",
      tipe: "MF920",
      merk: "ZTE",
      barcode: "3456789012345",
      satuan_pertama: "pcs",
      jumlah: 5,
    },
    {
      deskripsi: "Modem Alcatel LinkZone",
      tipe: "MW40",
      merk: "Alcatel",
      barcode: "4567890123456",
      satuan_pertama: "pcs",
      jumlah: 8,
    },
    {
      deskripsi: "Modem D-Link DWR",
      tipe: "932C",
      merk: "D-Link",
      barcode: "5678901234567",
      satuan_pertama: "pcs",
      jumlah: 56,
    },
    {
      deskripsi: "Modem Netgear Nighthawk",
      tipe: "M1",
      merk: "Netgear",
      barcode: "6789012345678",
      satuan_pertama: "pcs",
      jumlah: 150,
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
      title: "Serial Number",
      key: "sn",
      render: (_, record) => (
        <>
          <Button
            color="primary"
            variant="filled"
            onClick={() => handleOpenModal(record)}
          >
            Tambah SN
          </Button>
        </>
      ),
    },
  ];

  const calculateTotalQuantity = () => {
    return barangList.reduce((total, item) => total + item.jumlah, 0);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBarang, setSelectedBarang] = useState(null);
  const [serialNumbers, setSerialNumbers] = useState([]);

  const handleOpenModal = (barang) => {
    setSelectedBarang(barang);
    setSerialNumbers(Array(barang.jumlah).fill(""));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBarang(null);
    setSerialNumbers([]);
  };

  const handleSerialNumberChange = (index, value) => {
    const updatedSerialNumbers = [...serialNumbers];
    updatedSerialNumbers[index] = value;
    setSerialNumbers(updatedSerialNumbers);
  };

  const handleSubmit = () => {
    if (serialNumbers.some((sn) => !sn.trim())) {
      message.error("Semua serial number harus diisi!");
      return;
    }

    console.log("Serial Numbers for:", selectedBarang.deskripsi);
    console.log("Serial Numbers:", serialNumbers);
    message.success("Serial number berhasil disimpan!");
    handleCloseModal();
  };
  const inputRefs = useRef([]);

  useEffect(() => {
    // Fokuskan input pertama saat modal terbuka
    if (isModalOpen) {
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [isModalOpen]);

  const handleKeyPress = (index, e) => {
    // Pindahkan fokus ke input berikutnya saat Enter ditekan
    if (e.key === "Enter" && index < serialNumbers.length - 1) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <Button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      Add
    </Button>
  );
  return (
    <>
      <div className="mt-3">
        <Space>
          <Link to="/packing">
            <LeftCircleOutlined
              style={{ fontSize: "24px", color: "#1890ff" }}
            />
          </Link>
          <Title level={3} style={{ margin: 0 }}>
            Detail Packing
          </Title>
        </Space>
        <Card className="shadow-md shadow-blue-300 mt-3">
          <div className="grid grid-cols-3 gap-3 mb-3">
            <div>
              <p className="mt-0.5">
                <span className="text-gray-500">Nomor :</span> <br />
                PYK-2024/XI/120
              </p>
              <p className="mt-0.5">
                <span className="text-gray-500">Tipe Penjualan :</span> <br />
                <Tag color="green">Online</Tag>
              </p>
              <p className="mt-0.5">
                <span className="text-gray-500">Jenis Kirim :</span> <br />
                <Tag color="green">Kirim JNE</Tag>
              </p>
            </div>
            <div>
              <p className="mt-0.5">
                <span className="text-gray-500">Pelanggan :</span> <br />
                KDA Store
              </p>
              <p className="mt-0.5">
                <span className="text-gray-500">No Pesanan :</span> <br />
                SHP-914719791
              </p>
            </div>
            <div>
              <p className="mt-0.5">
                <span className="text-gray-500">Catatan :</span> <br />
                Catatan apa aja
              </p>
              <p className="mt-0.5">
                <span className="text-gray-500">Tanggal :</span> <br />
                02 Januari 2025
              </p>
              <Title level={5}>Status :</Title>
              <Badge status="processing" text="On Progress" />
            </div>
          </div>
        </Card>

        <Card className="shadow-md shadow-blue-300 mt-3">
          <p className="font-black">List Barang:</p>
          <div className="hidden lg:block">
            <Table
              columns={columns}
              dataSource={barangList}
              pagination={false}
              rowKey={(record) => record.key}
              style={{ marginBottom: "16px" }}
              summary={() => (
                <Table.Summary.Row>
                  <Table.Summary.Cell
                    colSpan={columns.length - 1}
                    align="right"
                  >
                    <strong>Total</strong>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <strong>{calculateTotalQuantity()}</strong>
                  </Table.Summary.Cell>
                </Table.Summary.Row>
              )}
            />
          </div>
          <div className="block lg:hidden space-y-4">
            {barangList.map((record, index) => (
              <Card
                key={record.key}
                className="border border-gray-300 p-4 shadow-sm rounded-md"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-gray-600">No:</div>
                  <div className="text-sm font-bold">{index + 1}</div>
                </div>
                <div className="mb-2">
                  <div className="text-sm font-medium text-gray-600">
                    Barang:
                  </div>
                  <div className="text-sm font-bold">{record.tipe}</div>
                  <div className="text-xs text-gray-500">{record.barcode}</div>
                  <div className="text-sm text-gray-700">
                    {record.deskripsi}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-gray-600">Merk:</div>
                  <div className="text-sm text-gray-700">{record.merk}</div>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-gray-600">
                    Satuan:
                  </div>
                  <div className="text-sm text-gray-700">
                    {record.satuan_pertama}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm font-medium text-gray-600">
                    Jumlah:
                  </div>
                  <div className="text-sm font-bold">{record.jumlah}</div>
                </div>
                <Button
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all"
                  onClick={() => handleOpenModal(record)}
                >
                  Tambah SN
                </Button>
              </Card>
            ))}
          </div>
          <p className="font-semibold"> Upload Foto Packing :*</p>
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
              style={{
                display: "none",
              }}
            />
          )}
          <Divider />
          <Button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-all">
            Simpan
          </Button>
        </Card>
      </div>
      <Modal
        title={
          <div
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >{`Input Serial Number - ${selectedBarang?.deskripsi || ""}`}</div>
        }
        visible={isModalOpen}
        onCancel={handleCloseModal}
        onOk={handleSubmit}
        okText="Simpan"
        cancelText="Batal"
        bodyStyle={{ maxHeight: "400px", overflowY: "auto", padding: "10px" }}
        centered
      >
        <Form
          layout="vertical"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {serialNumbers.map((sn, index) => (
            <Form.Item
              key={index}
              label={
                <span style={{ fontSize: "14px" }}>{`Serial Number ${
                  index + 1
                }`}</span>
              }
              style={{ marginBottom: "8px" }}
            >
              <Input
                ref={(el) => (inputRefs.current[index] = el)}
                value={sn}
                onChange={(e) =>
                  handleSerialNumberChange(index, e.target.value)
                }
                onKeyPress={(e) => handleKeyPress(index, e)}
                style={{ borderRadius: "8px", fontSize: "14px" }}
                placeholder={`Input Serial Number ${index + 1}`}
              />
            </Form.Item>
          ))}
        </Form>
      </Modal>
    </>
  );
};

export default PackingDetail;
