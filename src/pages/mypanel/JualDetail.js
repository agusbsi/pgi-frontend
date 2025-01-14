import React from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { Badge, Table, Space, Typography, Card, Tag, Button } from "antd";
import { LeftCircleOutlined, PrinterOutlined } from "@ant-design/icons";

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
      harga: 250000,
      tipeHarga: "Ecer",
    },
    {
      deskripsi: "Modem ZTE MiFi",
      tipe: "MF920",
      merk: "ZTE",
      barcode: "3456789012345",
      satuan_pertama: "pcs",
      jumlah: 5,
      harga: 200000,
      tipeHarga: "Ecer",
    },
    {
      deskripsi: "Modem Alcatel LinkZone",
      tipe: "MW40",
      merk: "Alcatel",
      barcode: "4567890123456",
      satuan_pertama: "pcs",
      jumlah: 8,
      harga: 400000,
      tipeHarga: "Ecer",
    },
    {
      deskripsi: "Modem D-Link DWR",
      tipe: "932C",
      merk: "D-Link",
      barcode: "5678901234567",
      satuan_pertama: "pcs",
      jumlah: 56,
      harga: 150000,
      tipeHarga: "Grosir 1",
    },
    {
      deskripsi: "Modem Netgear Nighthawk",
      tipe: "M1",
      merk: "Netgear",
      barcode: "6789012345678",
      satuan_pertama: "pcs",
      jumlah: 150,
      harga: 350000,
      tipeHarga: "Grosir 2",
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
      title: "@Harga",
      key: "harga",
      render: (text, record) => (
        <>
          <div>{formatRupiah(record.harga)}</div>
          <Tag color="magenta" bordered={false}>
            {record.tipeHarga}
          </Tag>
        </>
      ),
    },
    {
      title: "Sub Total",
      key: "sub_total",
      render: (_, record) => formatRupiah(record.jumlah * record.harga),
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
  const generatePDF = () => {
    const nomorTransaksi = "PYK-2024-XI-120"; // Ganti sesuai data dinamis
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [105, 148], // A6 format
    });

    // Watermark (Ant Design style)
    doc.setFontSize(10);
    doc.setTextColor(220);

    // Mengatur jarak dan posisi awal agar pola lebih rapi
    const startX = -50; // Posisi awal pada sumbu X
    const startY = -60; // Posisi awal pada sumbu Y
    const stepX = 40; // Jarak horizontal antar teks
    const stepY = 50; // Jarak vertikal antar teks
    const angle = 45; // Sudut rotasi teks

    for (let x = startX; x < 300; x += stepX) {
      for (let y = startY; y < 300; y += stepY) {
        doc.text("PGI - SISTEM", x, y, {
          angle: angle,
          align: "center",
        });
      }
    }

    // Header Faktur
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Faktur Penjualan", 52.5, 10, { align: "center" }); // Centered title
    doc.setDrawColor(0, 0, 0);
    doc.line(10, 12, 95, 12); // Underline for title

    // Detail Faktur
    doc.setFontSize(10);
    doc.text(`Nomor: ${nomorTransaksi}`, 10, 20);
    doc.text("Tanggal: 02 Januari 2025", 10, 25);
    doc.text("Pelanggan: KDA Store", 10, 30);
    doc.text("Tipe Penjualan: Online", 10, 35);

    // Tabel Barang
    const tableColumn = ["No", "Barang", "QTY", "@Harga", "Subtotal"];
    const tableRows = barangList.map((item, index) => [
      index + 1,
      `${item.tipe} (${item.deskripsi})`,
      item.jumlah,
      formatRupiah(item.harga),
      formatRupiah(item.jumlah * item.harga),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      theme: "striped",
      styles: { fontSize: 6 },
    });

    // Total
    doc.text(
      `Total Jumlah: ${calculateTotalQuantity()}`,
      10,
      doc.lastAutoTable.finalY + 10
    );
    doc.text(
      `Grand Total: ${formatRupiah(calculateGrandTotal())}`,
      10,
      doc.lastAutoTable.finalY + 15
    );

    doc.save(`${nomorTransaksi}.pdf`);
  };

  return (
    <div className="mt-3">
      <Space>
        <Link to="/penjualan">
          <LeftCircleOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </Link>
        <Title level={3} style={{ margin: 0 }}>
          Detail Penjualan
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
        <Table
          columns={columns}
          dataSource={barangList}
          pagination={false}
          rowKey={(record) => record.key}
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
        <div className="flex justify-end">
          <Button
            type="primary"
            icon={<PrinterOutlined />}
            onClick={generatePDF}
          >
            Cetak Faktur
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BeliDetail;
