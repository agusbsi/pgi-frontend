import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  Button,
  Divider,
  Space,
  Tag,
  Modal,
  Table,
} from "antd";
import { LeftCircleOutlined, DownloadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ProyekPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data dummy untuk rincian detail barang
  const dataDummy = [
    {
      key: "1",
      no: 1,
      barang: "Modem A",
      satuan: "Unit",
      jumlah: 100,
      harga: 2000000,
      subtotal: 200000000,
      tglTransaksi: "2025-01-10",
    },
    {
      key: "2",
      no: 2,
      barang: "Modem B",
      satuan: "Unit",
      jumlah: 150,
      harga: 1500000,
      subtotal: 225000000,
      tglTransaksi: "2025-01-11",
    },
    {
      key: "3",
      no: 3,
      barang: "Modem C",
      satuan: "Unit",
      jumlah: 50,
      harga: 1500000,
      subtotal: 75000000,
      tglTransaksi: "2025-01-12",
    },
  ];

  // Kolom untuk tabel
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Barang",
      dataIndex: "barang",
      key: "barang",
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
      title: "Harga per Barang",
      dataIndex: "harga",
      key: "harga",
      render: (text) => `Rp. ${text.toLocaleString()}`,
    },
    {
      title: "Sub Total",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (text) => `Rp. ${text.toLocaleString()}`,
    },
    {
      title: "Tanggal Transaksi",
      dataIndex: "tglTransaksi",
      key: "tglTransaksi",
    },
  ];

  // Total penjualan dari data dummy
  const totalPenjualan = dataDummy.reduce(
    (acc, item) => acc + item.subtotal,
    0
  );
  return (
    <>
      <div className="mt-3">
        <Space>
          <Link to="/mobile">
            <LeftCircleOutlined
              style={{ fontSize: "24px", color: "#1890ff" }}
            />
          </Link>
          <Title level={3} style={{ margin: 0 }}>
            Kembali
          </Title>
        </Space>
        <Card className="shadow-md shadow-blue-300 border-t-8 border-t-blue-700 mt-3">
          <div className="font-bold"> Detail Proyek : </div>
          <Divider />
          <p>
            <span className="text-gray-500">Nomor :</span> <br />
            PYK-2024/XI/120
          </p>
          <p>
            <span className="text-gray-500">Deskripsi :</span> <br />
            Projek Import dan Penjualan Modem Batch 1
          </p>
          <p>
            <span className="text-gray-500">Periode :</span> <br />
            02 Januari 2025 - 02 Juni 2025
          </p>
          <p>
            <span className="text-gray-500">Total Dana :</span> <br />
            Rp. 300,000,000
          </p>
          <p>
            <span className="text-gray-500">Total Saham :</span> <br />
            3000 Lembar
          </p>
          <p>
            <span className="text-gray-500">Harga Saham :</span> <br />
            Rp. 100,000 / Lembar
          </p>
          <p>
            <span className="text-gray-500">Status :</span> <br />
            <Tag color="warning">On Progres</Tag>
          </p>
          <Divider />
          <div className="font-bold"> Data Anda : </div>
          <Divider />
          <p>
            <span className="text-gray-500">Nama :</span> <br />
            Kang Salam
          </p>
          <p>
            <span className="text-gray-500">Alamat :</span> <br />
            Dsn. Parastembok jambewangi sempu banyuwangi
          </p>
          <p>
            <span className="text-gray-500">Modal di setor :</span> <br />
            Rp. 100,000,000
          </p>
          <p>
            <span className="text-gray-500">Saham dimiliki :</span> <br />
            1000 Lembar
          </p>
        </Card>
        <Card className="shadow-md shadow-blue-300 border-x-4 border-x-blue-700 mt-3">
          <div className="font-bold"> Stok Barang: </div>
          <Divider />
          <div className="flex justify-between items-center bg-blue-50 p-1 mb-1">
            <div>
              <strong>Barang 01</strong> <br />
              Stok : 100 pcs
            </div>
            <div>
              <strong>Hpp</strong> <br />
              Rp. 35,000
            </div>
          </div>
          <div className="flex justify-between items-center bg-blue-50 p-1 mb-1">
            <div>
              <strong>Barang 02</strong> <br />
              Stok : 400 pcs
            </div>
            <div>
              <strong>Hpp</strong> <br />
              Rp. 35,000
            </div>
          </div>
        </Card>
        <Card className="shadow-md shadow-blue-300 border-x-4 border-x-blue-700 mt-3">
          <div className="font-bold"> Total Penjualan: </div>
          <Divider />
          <div className="flex justify-between items-center p-1 mb-1">
            <div>
              <strong>Rp. 500.000.000</strong>
            </div>
            <Button
              color="primary"
              variant="filled"
              onClick={() => setIsModalOpen(true)}
            >
              Detail
            </Button>
          </div>
        </Card>
        <Card className="shadow-md shadow-blue-300 border-x-4 border-x-blue-700 mt-3">
          <div className="font-bold"> Total Retur: </div>
          <Divider />
          <div className="flex justify-between items-center p-1 mb-1">
            <div>
              <strong>Rp. 10.000.000</strong>
            </div>
            <Button color="primary" variant="filled">
              Detail
            </Button>
          </div>
        </Card>
        <Card className="shadow-md shadow-blue-300 border-x-4 border-x-blue-700 mt-3">
          <div className="font-bold"> Biaya Operasional: </div>
          <Divider />
          <div className="flex justify-between items-center p-1 mb-1">
            <div>
              <strong>Rp. 10.000.000</strong>
            </div>
            <Button color="primary" variant="filled">
              Detail
            </Button>
          </div>
        </Card>
        <Card className="shadow-md shadow-blue-300 border-b-8 border-b-blue-700 mt-3">
          <div className="font-bold"> Overview : </div>
          <Divider />
          <div className="flex justify-between items-center p-1">
            <strong>Net Profit</strong>
            <strong>Rp. 480.000.000</strong>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Pajak (1%)</div>
            <div>Rp. 4.800.000</div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Profit Sharing (10%)</div>
            <div>Rp. 48.000.000</div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Fee</div>
            <div>Rp. 5.000.000</div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Deviden</div>
            <div>Rp. 422.200.000</div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Total Saham</div>
            <div>3000 Lembar</div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Deviden Perlembar</div>
            <div>Rp. 140.733</div>
          </div>
          <div className="flex justify-between items-center p-1 mt-2">
            <strong>Deviden Anda</strong>
            <strong>Rp. 140.733.000</strong>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Pembekuan 20% </div>
            <div>Rp. 28.146.600</div>
          </div>
          <div className="flex justify-between items-center p-1">
            <div>Total Balance </div>
            <div>Rp. 112.586.400</div>
          </div>
        </Card>
        <Divider />
        <Button icon={<DownloadOutlined />} block>
          Unduh PDF
        </Button>
      </div>
      {/* Modal Responsif */}
      <Modal
        title="Rincian Detail Barang Terjual"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Tutup
          </Button>,
        ]}
        width="90%" // Modal responsif
        bodyStyle={{ padding: "10px", maxHeight: "70vh", overflow: "auto" }} // Modal scrollable
      >
        <Table
          dataSource={dataDummy}
          columns={columns}
          pagination={false}
          scroll={{ x: "1000px" }} // Scroll horizontal untuk tabel
          summary={(pageData) => (
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={5} className="font-bold">
                Total
              </Table.Summary.Cell>
              <Table.Summary.Cell index={1} className="font-bold">
                Rp. {totalPenjualan.toLocaleString()}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}></Table.Summary.Cell>
            </Table.Summary.Row>
          )}
        />
      </Modal>
    </>
  );
};

export default ProyekPage;
