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
  Space,
  Tag,
  Modal,
  Select,
  Input,
  InputNumber,
  DatePicker,
  Form,
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
      kontrak: "PGI/KI-001/01-2025",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      investor: "Kang Sulton",
      nik: "3510202325720562",
      npwp: "91569159824925",
      saham: "50 Lembar",
      hargaLembar: 1000000,
      modal: 50000000,
      tanggal: "02 Januari 2024",
      alamat: "Jln. Parastembok Jambewangi, Sempu, Banyuwangi",
    },
    {
      key: "2",
      no: "2",
      kontrak: "PGI/KI-002/01-2025",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      investor: "Kang Rois",
      nik: "351022525220562",
      npwp: "91569159824925",
      saham: "240 Lembar",
      hargaLembar: 1000000,
      modal: 240000000,
      tanggal: "02 Januari 2024",
      alamat: "Jln. Parastembok Jambewangi, Sempu, Banyuwangi",
    },
    {
      key: "3",
      no: "3",
      kontrak: "PGI/KI-003/01-2025",
      desc: "Proyek Import dan penjualan Modem Batch 1",
      investor: "Kang Salam",
      nik: "3510202325720562",
      npwp: "-",
      saham: "150 Lembar",
      hargaLembar: 1000000,
      modal: 150000000,
      tanggal: "02 Januari 2024",
      alamat: "Jln. Parastembok Jambewangi, Sempu, Banyuwangi",
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
      title: "Tanggal",
      key: "tanggal",
      render: (text, record) => <p>{record.tanggal}</p>,
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
  const getDayName = (dateString) => {
    const [day, month, year] = dateString.split(" ");
    const date = new Date(`${year}-${month}-${day}`);
    const dayNames = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    return dayNames[date.getDay()];
  };

  const generatePDF = (record) => {
    const doc = new jsPDF();
    const dayName = getDayName(record.tanggal);
    // Add Watermark on Each Page
    const addWatermark = (doc) => {
      doc.saveGraphicsState();
      doc.setFontSize(35);
      doc.setTextColor(240);

      const watermarkText = "PGI ASLI";
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const stepY = 150;

      for (let y = -30; y < pageHeight + 50; y += stepY) {
        for (let x = -50; x < pageWidth + 50; x += 110) {
          doc.text(watermarkText, x, y, {
            angle: 45,
          });
        }
      }
      doc.restoreGraphicsState();
    };

    addWatermark(doc);
    // Header
    doc.setFontSize(13);
    doc.setTextColor(50);
    doc.setFont("helvetica", "bold");
    doc.text(
      "SURAT PERJANJIAN KERJASAMA INVESTASI",
      105,
      20,
      null,
      null,
      "center"
    );

    // Garis bawah untuk header
    doc.setDrawColor(50); // Warna garis (default: hitam)
    doc.line(50, 22, 160, 22); // (x1, y1, x2, y2): Koordinat awal dan akhir garis

    // Subheader
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Nomor: ${record.kontrak}`, 105, 26, null, null, "center");

    // Content
    doc.setFontSize(10);

    doc.text(
      `Pada hari, ${dayName} ${record.tanggal}, yang bertanda tangan di bawah ini:`,
      15,
      40,
      { maxWidth: 170 }
    );
    const tableData1 = [
      ["1. Nama", `: ${record.investor}`],
      ["   NIK", `: ${record.nik || "[kosong]"}`],
      ["   Alamat", `: ${record.alamat || "[kosong]"}`],
      ["   NPWP", `: ${record.npwp || "[kosong]"}`],
    ];

    // Table Data PIHAK KEDUA
    const tableData2 = [
      ["2. Nama", ": SULTON FATONI"],
      ["   NIK", ": 3510201106940002"],
      [
        "   Alamat",
        ": Dusun Parastembok, 02/03 Desa. Jambewangi, Kec Sempu, Banyuwangi",
      ],
      ["   NPWP", ": 636238206627000"],
      ["   Jabatan", ": Direktur"],
    ];

    doc.autoTable({
      body: tableData1,
      startY: 45,
      styles: {
        font: "Times",
        fontSize: 10,
        cellPadding: 1,
      },
      theme: "plain",
    });

    let yPos = doc.previousAutoTable.finalY + 5;
    doc.text("Untuk selanjutnya disebut sebagai PIHAK PERTAMA.", 15, yPos);
    doc.autoTable({
      body: tableData2,
      startY: yPos + 5,
      styles: {
        font: "Times",
        fontSize: 10,
        cellPadding: 1,
      },
      theme: "plain",
    });

    yPos = doc.previousAutoTable.finalY + 5;
    doc.text("Untuk selanjutnya disebut sebagai PIHAK KEDUA.", 15, yPos);
    yPos += 10;
    doc.text(
      `Bahwa sebelum ditanda tanganinya Surat Perjanjian ini, Para pihak terlebih dahulu menerangkan hal–hal sebagai berikut: \n\n` +
        `1. Bahwa Pihak Pertama adalah selaku INVESTOR yang memiliki modal sebesar Rp.${record.modal.toLocaleString()},-  untuk selanjutnya disebut sebagai MODAL INVESTASI untuk project " ${
          record.desc
        } ". \n\n` +
        `2. Bahwa Pihak Kedua adalah Pengelola Dana Investasi di bidang Importir dan perdagangan yang berlokasi di area banyuwangi yang menerima DANA INVESTASI dari Pihak Pertama. \n\n` +
        `3. Dana Investasi dari pihak pertama yang kemudian di rubah oleh pihak kedua menjadi perhitungan SAHAM LEMBARAN, dimana setiap LEMBAR SAHAM ternilai Rp.${record.hargaLembar.toLocaleString()},- \n\n` +
        `4. Kepemilikan SAHAM Pihak Pertama dijelaskan sebagai berikut :\n` +
        `       a). MODAL INVESTASI	: Rp.${record.modal.toLocaleString()} \n` +
        `       b). LEMBAR SAHAM	    : ${record.saham} \n\n` +
        `5. Bahwa Pihak Pertama dan Pihak Kedua setuju untuk saling mengikatkan diri dalam suatu perjanjian kerjasama Investasi dalam Peningkatan Modal Investasi di project " ${record.desc} " yang berlokasi di area banyuwangi, sesuai dengan ketentuan hukum yang berlaku.\n\n` +
        `6. Bahwa berdasarkan hal-hal diatas, kedua belah pihak menyatakan sepakat dan setuju untuk mengadakan Perjanjian Kerjasama ini yang dilaksanakan dengan ketentuan dan syarat-syarat sebagai berikut :\n\n`,
      15,
      yPos,
      { maxWidth: 170 }
    );
    yPos += 100;
    doc.text(`PASAL I`, 105, yPos, null, null, "center");
    yPos += 5;
    doc.setFont("helvetica", "bold");
    doc.text(`MAKSUD DAN TUJUAN`, 105, yPos, null, null, "center");
    doc.setFont("helvetica", "normal");
    yPos += 10;
    doc.text(
      `Pihak Pertama dalam perjanjian ini memberi DANA INVESTASI kepada Pihak Kedua sebesar Rp. ${record.modal.toLocaleString()},- dan Pihak Kedua dengan ini telah menerima penyerahan DANA INVESTASI tersebut dari Pihak Pertama serta menyanggupi untuk melaksanakan pengelolaan DANA INVESTASI tersebut.`,
      15,
      yPos,
      { maxWidth: 170 }
    );

    // Add page for extended details
    doc.addPage();
    addWatermark(doc);
    doc.text(`PASAL II`, 105, 20, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`RUANG LINGKUP`, 105, 25, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
      `1. Dalam pelaksanaan perjanjian ini, Pihak Pertama memberi DANA INVESTASI kepada Pihak Kedua sebesar Rp. ………………………,- (terbilan) dan Pihak Kedua dengan ini telah menerima penyerahan DANA INVESTASI tersebut dari Pihak Pertama serta menyanggupi untuk  melaksanakan pengelolaan DANA INVESTASI. \n\n` +
        `2. Pihak Kedua dengan ini berjanji dan mengikatkan diri untuk melaksanakan perputaran DANA INVESTASI pada Usaha Peningkatan Modal Investasi di bidang ……………………. yang berlokasi di…………………………………………… setelah ditanda tanganinya perjanjian ini. \n\n` +
        `3. Pihak Kedua dengan ini berjanji dan mengikatkan diri untuk memberikan keuntungan berdasarkan persentase dari hasil dan resiko setelah pengurangan modal operasional yang terhitung dalam lembaran saham yang berlaku adalah 10% (sepuluh persen) untuk pihak keduan dan 90% untuk pihak pertama dalam jangka waktu 6 bulan atau musiman.`,
      15,
      35,
      { maxWidth: 170 }
    );
    doc.text(`PASAL III`, 105, 95, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`JANGKA WAKTU KERJASAMA`, 105, 100, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
      `1. Perjanjian kerjasama ini dilakukan dan diterima untuk jangka waktu 6 bulan (enam) bulan atau 1 musim, terhitung sejak tanggal ………………………. dengan periode jatuh tempo yang disepakati, kesepakatan   bersama antara pihak pertama dan pihak kedua sebagaimana 100% laba diberikan kepada pihak pertama dan kedua setelah perhitungan laba bersih di kurangi operasional dan  PASAL V ayat 3. dan di serahkan pada tanggal ………………….. secara utuh tanpa potongan serta dapat diperpanjang atau di perbarui dengan persetujuan kedua belah pihak untuk jangka waktu selanjutnya. \n\n` +
        `2. Jangka waktu perjanjian berakhir pada tanggal jatuh tempo yang sudah disepakati bersama antara pihak pertama dan pihak kedua dan tidak bisa di tarik atau dicairkan di tengah perjalanan suatu periode atau sewaktu-waktu dengan keinginan sepihak oleh pihak pertama. \n\n` +
        `3. Perjanjian kerjasama mengikat setiap periode atau musim yang telah ditentukan pihak ke dua yaitu 6 bulan atau 1 musim, setelah periode yang di tentukan masuk dalam jatuh tempo maka laba yang disebut DEVIDEN lembaran saham diberikan dan kemudian modal bisa di tarik atau tetap di digunakan sebagai perjalanan bisnis selanjutnya dengan cara melakukan pembaruan perjanjian kerjasama investasi.`,
      15,
      110,
      { maxWidth: 170 }
    );
    doc.text(`PASAL IV`, 105, 180, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`HAK DAN KEWAJIBAN PIHAK PERTAMA`, 105, 185, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
      `Dalam Perjanjian Kerjasama ini, Pihak Pertama memiliki Hak dan Kewajiban sebagai berikut : \n\n` +
        `1. Pihak pertama memberikan DANA INVESTASI kepada Pihak Kedua sebesar Rp. ………………………..,- (terbilang). \n\n` +
        `2. Pihak pertama berhak meminta kembali DANA INVESTASI yang telah diserahkan kepada Pihak Kedua dengan ketentuan berdasarkan Pasal III Ayat 2. \n\n` +
        `3.  Pihak pertama menerima hasil keuntungan atas pengelolaan DANA INVESTASI, sesuai dengan Pasal VI dalam perjanjian ini.`,
      15,
      195,
      { maxWidth: 170 }
    );

    // Open the PDF in a new browser tab
    const pdfBlob = doc.output("blob");
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl, "_blank");
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);
  const [notes, setNotes] = useState("");

  const steps = [
    "Pengumpulan Modal",
    "Pembelian Barang (Import)",
    "Penerimaan Barang",
    "Penjualan Barang",
    "Pembagian Dana Investor",
    "Proyek Selesai",
  ];

  const handleUpdateStep = () => {
    if (selectedStep !== null) {
      setCurrentStep(selectedStep);
      setNotes("");
      setIsModalOpen(false);
    }
  };
  const [isModal, setIsModa] = useState(false);
  const [form] = Form.useForm();

  const handleOpenModal = () => {
    setIsModa(true);
  };

  const handleCancel = () => {
    setIsModa(false);
    form.resetFields();
  };

  const handleFinish = (values) => {
    console.log("Investor Data:", values);
    // Lakukan sesuatu dengan data, misalnya mengirim ke backend
    setIsModalOpen(false);
    form.resetFields();
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Nomor:</span> <br />
              PYK-2024/XI/120
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Deskripsi:</span> <br />
              Projek Import dan Penjualan Modem Batch 1
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Target Dana:</span> <br />
              Rp. 500.000.000 (lima ratus juta)
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Durasi:</span> <br />
              01 Januari 2025 s/d 01 Juni 2025
            </p>
          </div>
          <div>
            <p className="mt-0.5">
              <span className="text-gray-500">Jumlah Saham:</span> <br />
              5000 Lembar
            </p>
            <p className="mt-0.5">
              <span className="text-gray-500">Harga Saham:</span> <br />
              Rp. 100.000 / Lembar
            </p>
            <p className="mt-0.5">
              <Badge status="processing" text="On Progress" />
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold"> Progres Proyek : </p>
          <Steps
            current={currentStep}
            progressDot
            items={steps.map((step, index) => ({
              title: <span className="text-sm">{step}</span>,
            }))}
          />
        </div>
        <Divider />
        <div className="mt-6 flex justify-end">
          <Button type="primary" onClick={() => setIsModalOpen(true)} block>
            Perbarui Progres
          </Button>
        </div>

        {/* Modal */}
        <Modal
          title="Perbarui Progres Proyek"
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          footer={[
            <Button key="cancel" onClick={() => setIsModalOpen(false)}>
              Batal
            </Button>,
            <Button key="confirm" type="primary" onClick={handleUpdateStep}>
              Konfirmasi
            </Button>,
          ]}
        >
          <div className="mb-4">
            <span className="block text-gray-700 mb-2">Pilih Langkah:</span>
            <Select
              className="w-full"
              placeholder="Pilih langkah"
              value={selectedStep}
              onChange={(value) => setSelectedStep(value)}
            >
              {steps
                .filter(
                  (step, index) =>
                    step === "Pembagian Dana Investor" ||
                    step === "Proyek Selesai"
                )
                .map((step, index) => (
                  <Select.Option key={index} value={steps.indexOf(step)}>
                    {step}
                  </Select.Option>
                ))}
            </Select>
          </div>
          <div>
            <span className="block text-gray-700 mb-2">
              Catatan (Opsional):
            </span>
            <Input.TextArea
              rows={3}
              placeholder="Tambahkan catatan jika diperlukan"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </Modal>
      </Card>

      <Card className="shadow-md shadow-blue-300 mt-3 p-4">
        <p className="font-black text-lg mb-4">Pengaturan Penjualan:</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              tag: "Harga Ecer",
              profit: "Rp. 30.000 / Barang",
              syarat: "Jumlah jual kurang dari 50 pcs",
            },
            {
              tag: "Harga Grosir 1",
              profit: "Rp. 27.000 / Barang",
              syarat: "Jumlah jual 50 - 99 pcs",
            },
            {
              tag: "Harga Grosir 2",
              profit: "Rp. 25.000 / Barang",
              syarat: "Jumlah jual lebih dari 100 pcs",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <Tag color="magenta" className="mb-2">
                {item.tag}
              </Tag>
              <p className="mt-0.5">
                <span className="text-gray-500">Profit:</span> <br />
                {item.profit}
              </p>
              <p className="mt-2">
                <span className="text-gray-500">Syarat:</span> <br />
                {item.syarat}
              </p>
              {/* Menu Edit/Setting */}
              <button
                className="absolute top-3 right-3 p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
                title="Edit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487c.366-.366.958-.39 1.338-.075l1.368 1.368c.314.38.291.972-.075 1.338l-10.5 10.5a4.5 4.5 0 01-1.701 1.075l-4.051 1.35a.375.375 0 01-.475-.475l1.35-4.05a4.5 4.5 0 011.075-1.702l10.5-10.5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.625L18.375 4.5m-7.2 7.2l-4.5 4.5M5.625 19.5L4.5 18.375"
                  />
                </svg>
              </button>
            </div>
          ))}
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
          <Button type="primary">Lihat Stok lengkap</Button>
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
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={handleOpenModal}
          >
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
      <Modal
        title="Tambah Data Investor"
        open={isModal}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Batal
          </Button>,
          <Button key="submit" type="primary" onClick={() => form.submit()}>
            Simpan
          </Button>,
        ]}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          initialValues={{
            hargaLembar: 1000000,
          }}
        >
          <Form.Item
            label="Nomor Kontrak"
            name="kontrak"
            rules={[
              { required: true, message: "Harap masukkan nomor kontrak" },
            ]}
          >
            <Input placeholder="Contoh: PGI/KI-001/01-2025" />
          </Form.Item>
          <Form.Item
            label="Nama Investor"
            name="investor"
            rules={[
              { required: true, message: "Harap masukkan nama investor" },
            ]}
          >
            <Input placeholder="Nama lengkap investor" />
          </Form.Item>
          <Form.Item
            label="NIK"
            name="nik"
            rules={[{ required: true, message: "Harap masukkan NIK" }]}
          >
            <Input placeholder="Masukkan NIK" />
          </Form.Item>
          <Form.Item
            label="NPWP"
            name="npwp"
            rules={[{ required: true, message: "Harap masukkan NPWP" }]}
          >
            <Input placeholder="Masukkan NPWP" />
          </Form.Item>
          <Form.Item
            label="Jumlah Saham"
            name="saham"
            rules={[{ required: true, message: "Harap masukkan jumlah saham" }]}
          >
            <Input placeholder="Contoh: 50 Lembar" />
          </Form.Item>
          <Form.Item
            label="Alamat"
            name="alamat"
            rules={[{ required: true, message: "Harap masukkan alamat" }]}
          >
            <Input.TextArea rows={3} placeholder="Alamat lengkap" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProyekPage;
