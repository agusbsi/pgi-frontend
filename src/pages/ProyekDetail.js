import React, { useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  Table,
  Typography,
  Card,
  Row,
  Tooltip,
  Button,
  Dropdown,
  Menu,
  Divider,
  Steps,
  Badge,
  Popover,
  Space,
  Tag,
} from "antd";
import {
  LeftCircleOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const ProyekPage = () => {
  const [data] = useState([
    {
      key: "1",
      no: "1",
      nomor: "PYK-2024/XI/001",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      dana: "Rp. 500.000.000",
      Periode: "01 Juni 2024 s/d 01 Desember 2024",
    },
  ]);
  const [investor] = useState([
    {
      key: "1",
      no: "1",
      kontrak: "PYK-2024/XI/001/001",
      investor: "Kang Sulton",
      saham: "50 Lembar",
      modal: 50000000,
      tanggal: "02 Januari 2024",
    },
    {
      key: "2",
      no: "2",
      kontrak: "PYK-2024/XI/001/002",
      investor: "Kang Rois",
      saham: "240 Lembar",
      modal: 240000000,
      tanggal: "02 Januari 2024",
    },
    {
      key: "3",
      no: "3",
      kontrak: "PYK-2024/XI/001/003",
      investor: "Kang Salam",
      saham: "150 Lembar",
      modal: 150000000,
      tanggal: "02 Januari 2024",
    },
  ]);
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Investor",
      key: "Investor",
      render: (text, record) => <p>{record.investor}</p>,
    },
    {
      title: "No Kontrak",
      key: "Kontrak",
      render: (text, record) => <p>{record.kontrak}</p>,
    },
    {
      title: "Jumlah Saham",
      key: "saham",
      render: (text, record) => <p>{record.saham}</p>,
    },
    {
      title: "Modal",
      key: "Modal",
      render: (text, record) => (
        <p className="font-bold">Rp. {record.modal.toLocaleString()}</p>
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
      <Menu.Item
        key="detail"
        icon={<EyeOutlined />}
        onClick={() => generatePDF(record)}
      >
        Cetak Surat
      </Menu.Item>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Hapus
      </Menu.Item>
    </Menu>
  );
  const generatePDF = (record) => {
    const doc = new jsPDF();

    // Watermark setup
    doc.setFontSize(20);
    doc.setTextColor(235);
    const watermarkText = "PGI - ASLI";
    const startX = -40;
    const startY = -40;
    const stepX = 80;
    const stepY = 80;
    const angle = 45;

    for (let x = startX; x < 300; x += stepX) {
      for (let y = startY; y < 300; y += stepY) {
        doc.text(watermarkText, x, y, {
          angle: angle,
          align: "center",
        });
      }
    }

    // Document Title
    doc.setTextColor(50);
    doc.setFont("Times", "bold");
    doc.setFontSize(14);
    doc.text(
      "SURAT PERJANJIAN KERJASAMA INVESTASI",
      105,
      20,
      null,
      null,
      "center"
    );
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    // Opening Information
    doc.setFont("Times", "normal");
    doc.setFontSize(12);
    doc.text(
      "Pada hari, minggu tanggal 02 bulan Januari Tahun 2025, yang bertanda tangan di bawah ini:",
      20,
      35,
      { maxWidth: 170 }
    );

    // Table Data PIHAK PERTAMA
    const tableData1 = [
      ["1. Nama", record.investor],
      ["   NIK", record.nik || "321020260894003"],
      ["   Alamat", record.alamat || "Jln. Paarstembok Jambewangi, Sempu"],
      ["   NPWP", record.npwp || "1105105015151"],
    ];

    const tableData2 = [
      ["2. Nama", ": Sulton Fatoni"],
      ["   NIK", ": 321020260894003"],
      ["   Alamat", ": Jln. Paarstembok Jambewangi, Sempu"],
      ["   NPWP", ": 1105105015151"],
      ["   Jabatan", ": Pengelola Dana"],
    ];

    doc.autoTable({
      body: tableData1,
      startY: 45,
      styles: {
        font: "Times",
        fontSize: 10,
        cellPadding: 3,
      },
      theme: "plain",
    });

    let yPos = doc.previousAutoTable.finalY + 10;
    doc.text("Untuk selanjutnya disebut sebagai PIHAK PERTAMA.", 20, yPos);

    // Table Data PIHAK KEDUA
    doc.autoTable({
      body: tableData2,
      startY: yPos + 5,
      styles: {
        font: "Times",
        fontSize: 10,
        cellPadding: 3,
      },
      theme: "plain",
    });

    yPos = doc.previousAutoTable.finalY + 10;
    doc.text("Untuk selanjutnya disebut sebagai PIHAK KEDUA.", 20, yPos);

    // Cooperation Details
    yPos += 10;
    doc.text(
      "Bahwa sebelum ditanda tanganinya Surat Perjanjian ini, Para pihak terlebih dahulu menerangkan hal–hal sebagai berikut:",
      20,
      yPos,
      { maxWidth: 170 }
    );
    yPos += 10;
    doc.text(
      `1. Pihak Pertama adalah INVESTOR yang memiliki modal sebesar Rp.${record.modal.toLocaleString()},- untuk selanjutnya disebut sebagai MODAL INVESTASI untuk project.`,
      20,
      yPos,
      { maxWidth: 170 }
    );

    yPos += 10;
    doc.text(
      "2. Bahwa Pihak Kedua adalah Pengelola Dana Investasi di bidang ……………………. yang berlokasi di………………………………. yang menerima DANA INVESTASI dari Pihak Pertama.",
      20,
      yPos,
      { maxWidth: 170 }
    );

    yPos += 20;
    doc.text(
      "Dengan ini Pihak Pertama dan Pihak Kedua sepakat untuk melaksanakan Perjanjian Kerjasama.",
      20,
      yPos,
      { maxWidth: 170 }
    );

    // Clause Section
    yPos += 10;
    doc.setFont("Times", "bold");
    doc.text("PASAL I: MAKSUD DAN TUJUAN", 20, yPos);

    yPos += 10;
    doc.setFont("Times", "normal");
    doc.text(
      `Pihak Pertama memberi dana investasi kepada Pihak Kedua sebesar Rp.${record.modal.toLocaleString()},-.`,
      20,
      yPos,
      { maxWidth: 170 }
    );

    // Save PDF
    doc.save(`Kontrak_${record.kontrak || "Investasi"}.pdf`);
  };

  return (
    <div className="mt-3">
      <Space>
        <Link to="/proyek">
          <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </Link>
        <Title level={3} style={{ margin: 0 }}>
          Detail Proyek
        </Title>
      </Space>
      <Card className="shadow-md shadow-blue-300 border-l-8 border-l-blue-700 p-4 mt-3">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Nomor :</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Deskripsi :</span> <br />
              Projek Import dan Penjualan Modem Batch 1
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Target Dana :</span> <br />
              Rp. 500.000.000 (lima ratus juta)
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Durasi :</span> <br />
              01 Januari 2025 s/d 01 juni 2025
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Jumlah Saham :</span> <br />
              100 dari 500 Lembar
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Harga Saham :</span> <br />
              Rp. 1.000.000 / Lembar
            </p>
            <Title level={5}>Status Proyek :</Title>
            <Badge status="processing" text="On Progress" />
          </div>
        </div>
        <Title level={5} style={{ marginBottom: 24 }}>
          Progres Proyek :
        </Title>
        <Steps
          current={0}
          progressDot={customDot}
          items={[
            {
              title: <span className="text-sm">Pengumpulan Modal</span>,
            },
            {
              title: <span className="text-sm">Pembelian Barang (Import)</span>,
            },
            {
              title: <span className="text-sm">Penerimaan Barang</span>,
            },
            {
              title: <span className="text-sm">Penjualan Barang</span>,
            },
            {
              title: <span className="text-sm">Pembagian Dana Investor</span>,
            },
            {
              title: <span className="text-sm">Proyek Selesai</span>,
            },
          ]}
        />
      </Card>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <p className="font-black">Pengaturan Penjualan :</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <Tag color="magenta">Harga Ecer</Tag>
            <p className="mt-0.5">
              <span className="text-gray-500"> Profit :</span> <br />
              Rp. 30.000 / Barang
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500"> Syarat :</span> <br />
              Jumlah jual kurang dari 50 pcs
            </p>
          </div>
          <div>
            <Tag color="magenta">Harga Grosir 1</Tag>
            <p className="mt-0.5">
              <span className="text-gray-500"> Profit :</span> <br />
              Rp. 27.000 / Barang
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500"> Syarat :</span> <br />
              Jumlah jual 50 - 99 Pcs
            </p>
          </div>
          <div>
            <Tag color="magenta">Harga Grosir 2</Tag>
            <p className="mt-0.5">
              <span className="text-gray-500"> Profit :</span> <br />
              Rp. 25.000 / Barang
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500"> Syarat :</span> <br />
              Jumlah jual lebih dari 100 pcs
            </p>
          </div>
        </div>
      </Card>
      <Card className="shadow-md shadow-blue-300 mt-3">
        <p className="font-black">Stok Barang di proyek ini:</p>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500"> Total Stok :</span> <br />
              2100 Pcs
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500"> Terjual :</span> <br />
              1500 Pcs
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500"> Sisa :</span> <br />
              600 Pcs
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Lihat Stok lengkap
          </Button>
        </div>
      </Card>
      <Divider />
      <Row
        style={{
          marginTop: 25,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Title level={3}>List Investor</Title>
        <Tooltip title="Tambah Investor">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Tambah Investor
          </Button>
        </Tooltip>
      </Row>

      <div className="container mx-auto p-0">
        {/* Tampilkan Tabel di Desktop */}
        <div className="hidden lg:block">
          <Table columns={columns} dataSource={investor} />
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
  );
};

export default ProyekPage;
