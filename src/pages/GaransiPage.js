// Import dependencies
import React, { useState } from "react";
import { Input, Button, Card, Typography, Spin, Alert, Divider } from "antd";

const { Title, Text, Paragraph } = Typography;

const GaransiPage = () => {
  const [garansi, setGaransi] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState(null);

  const handleGaransiPage = async () => {
    if (!garansi.trim()) {
      setError("Nomor garansi tidak boleh kosong.");
      return;
    }

    setLoading(true);
    setError(null);
    setHasil(null);

    try {
      // Simulasikan permintaan API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Contoh hasil data (dari API sebenarnya, sesuaikan dengan format yang diharapkan)
      const dummyData = {
        nomorGaransi: garansi,
        namaProduk: "Modem Super Cepat",
        tanggalPembelian: "2024-01-01",
        masaGaransi: "2 Tahun",
        status: "Aktif",
      };

      setHasil(dummyData);
    } catch (err) {
      setError("Terjadi kesalahan saat memeriksa garansi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Card style={{ textAlign: "center" }}>
        <Title level={2}>Cek Garansi Produk</Title>
        <Text>
          Masukkan nomor garansi Anda untuk memeriksa status dan masa berlaku
          garansi produk.
        </Text>

        <div style={{ marginTop: "20px" }}>
          <Input
            placeholder="Masukkan Nomor Garansi"
            value={garansi}
            onChange={(e) => setGaransi(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <Button
            type="primary"
            block
            onClick={handleGaransiPage}
            disabled={loading}
          >
            {loading ? <Spin size="small" /> : "Cek Garansi"}
          </Button>
        </div>

        {error && (
          <Alert message={error} type="error" style={{ marginTop: "20px" }} />
        )}

        {hasil && (
          <Card
            style={{ marginTop: "20px", textAlign: "left" }}
            title="Hasil Cek Garansi"
          >
            <Text>Nomor Garansi: {hasil.nomorGaransi}</Text>
            <br />
            <Text>Nama Produk: {hasil.namaProduk}</Text>
            <br />
            <Text>Tanggal Pembelian: {hasil.tanggalPembelian}</Text>
            <br />
            <Text>Masa Garansi: {hasil.masaGaransi}</Text>
            <br />
            <Text>Status: {hasil.status}</Text>
          </Card>
        )}
      </Card>

      <Divider />

      <Card>
        <Title level={3}>Petunjuk Penggunaan</Title>
        <Paragraph>
          1. Masukkan nomor garansi pada kolom yang disediakan.
          <br />
          2. Klik tombol <strong>Cek Garansi</strong>.
          <br />
          3. Tunggu beberapa saat hingga hasil muncul.
          <br />
          4. Jika nomor garansi valid, detail garansi akan ditampilkan.
        </Paragraph>

        <Title level={3}>Layanan Garansi</Title>
        <Paragraph>
          Produk yang dilindungi oleh garansi akan mendapatkan layanan berikut:
          <ul>
            <li>Perbaikan gratis selama masa garansi.</li>
            <li>
              Penggantian unit baru jika terjadi kerusakan berat sesuai syarat
              dan ketentuan.
            </li>
            <li>Dukungan teknis selama periode garansi berlaku.</li>
          </ul>
        </Paragraph>

        <Title level={3}>Cara Klaim Garansi</Title>
        <Paragraph>
          Untuk klaim garansi, ikuti langkah berikut:
          <ol>
            <li>Kunjungi gerai resmi atau pusat layanan kami.</li>
            <li>Bawa produk dan nomor garansi yang valid.</li>
            <li>Siapkan bukti pembelian seperti faktur atau struk.</li>
            <li>
              Tim kami akan memeriksa status garansi dan memproses klaim Anda.
            </li>
          </ol>
        </Paragraph>

        <Text type="secondary">
          Catatan: Klaim garansi hanya berlaku untuk kerusakan yang tercakup
          dalam syarat dan ketentuan garansi.
        </Text>
      </Card>
    </div>
  );
};

export default GaransiPage;
