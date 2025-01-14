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
  Form,Radio
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
      tanggalMulai: "02 Januari 2024",
      tanggalAkhir: "02 Juni 2024",
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
      modal: 169000000,
      tanggalMulai: "02 Januari 2024",
      tanggalAkhir: "02 Juni 2024",
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
      modal: 210000000,
      tanggalMulai: "02 Januari 2024",
      tanggalAkhir: "02 Juni 2024",
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
      key: "tanggalMulai",
      render: (text, record) => <p>{record.tanggalMulai}</p>,
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
  
  function terbilang(angka) {
    const bilangan = [
      '', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan',
      'sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'
    ];
    const tingkat = ['', 'ribu', 'juta', 'miliar'];

    if (angka === 0) return 'nol rupiah';
  
    let kata = '';
    let i = 0;
  
    // Memecah angka menjadi bagian ribuan dan mengubah tiap bagian menjadi kata
    while (angka > 0) {
      let bagian = angka % 1000;
      if (bagian > 0) {
        let bagianKata = '';
        
        if (bagian > 99) {
          if (bagian < 200 ) {
            bagianKata += 'seratus ';
          } else {
            bagianKata += bilangan[Math.floor(bagian / 100)] + ' ratus ';
          }
          bagian %= 100;
        }
        
        if (bagian > 10 && bagian < 20) {
          bagianKata += bilangan[bagian] + ' ';
        } else {
          if (bagian >= 20) {
            bagianKata += bilangan[Math.floor(bagian / 10)] + ' puluh ';
            bagian %= 10;
          }
          if (bagian > 0) {
            bagianKata += bilangan[bagian] + ' ';
          }
        }
        
        // Menambahkan tingkat (ribu, juta, miliar)
        if (tingkat[i] !== '') {
          bagianKata += tingkat[i] + ' ';
        }
        
        kata = bagianKata + kata;
      }
      angka = Math.floor(angka / 1000);
      i++;
    }
  
    // Menghapus spasi yang tidak perlu dan menambahkan 'rupiah'
    return kata.trim() + ' rupiah';
}



  const generatePDF = (record) => {
    const doc = new jsPDF();
    const dayName = getDayName(record.tanggalMulai);
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
    doc.line(55, 22, 157, 22); // (x1, y1, x2, y2): Koordinat awal dan akhir garis

    // Subheader
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text(`Nomor: ${record.kontrak}`, 105, 26, null, null, "center");

    // Content
    doc.setFontSize(10);

    doc.text(
      `Pada hari, ${dayName} ${record.tanggalMulai}, yang bertanda tangan di bawah ini:`,
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
    
    // Menambahkan kolom kosong pada tableData1 agar jumlah kolomnya sama dengan tableData2
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
    
    // Menyusun lebar kolom secara eksplisit agar konsisten
    const columnWidths = [50, 140]; // Menentukan lebar kolom (misalnya: kolom 1 = 50, kolom 2 = 140)
    
    // Tabel pertama
    doc.autoTable({
      body: tableData1,
      startY: 45,
      styles: {
        font: "Times",
        fontSize: 10,
        cellPadding: 1,
        minCellHeight: 3, // Konsistenkan tinggi baris
      },
      theme: "plain",
      columnStyles: {
        0: { cellWidth: columnWidths[0] }, // Kolom pertama
        1: { cellWidth: columnWidths[1] }, // Kolom kedua
      },
    });
    
    // Menyimpan posisi akhir tabel pertama
    let yPos = doc.previousAutoTable.finalY + 5;
    
    // Menambahkan teks untuk PIHAK PERTAMA
    doc.text("Untuk selanjutnya disebut sebagai PIHAK PERTAMA.", 15, yPos);
    
    // Tabel kedua
    doc.autoTable({
      body: tableData2,
      startY: yPos + 5,
      styles: {
        font: "Times",
        fontSize: 10,
        cellPadding: 1,
        minCellHeight: 3, // Konsistenkan tinggi baris
      },
      theme: "plain",
      columnStyles: {
        0: { cellWidth: columnWidths[0] }, // Kolom pertama
        1: { cellWidth: columnWidths[1] }, // Kolom kedua
      },
    });
    
    // Menyimpan posisi akhir tabel kedua
    yPos = doc.previousAutoTable.finalY + 5;
    
    // Menambahkan teks untuk PIHAK KEDUA
    doc.text("Untuk selanjutnya disebut sebagai PIHAK KEDUA.", 15, yPos);
    
    yPos += 10;
    doc.text(
      `Bahwa sebelum ditanda tanganinya Surat Perjanjian ini, Para pihak terlebih dahulu menerangkan hal–hal sebagai berikut: \n\n` +
        `1. Bahwa Pihak Pertama adalah selaku INVESTOR yang memiliki modal sebesar Rp.${record.modal.toLocaleString()},- ( ${terbilang(record.modal)} ) untuk selanjutnya disebut sebagai MODAL INVESTASI untuk project CV. PEMUDA GROUP INDONESIA. \n\n` +
        `2. Bahwa Pihak Kedua adalah Pengelola Dana Investasi di bidang Impor dan Penjualan Router dari china yang berlokasi di Dusun Parastembok, 01/03 Desa. Jambewangi, Kec Sempu, Banyuwangi
yang menerima DANA INVESTASI dari Pihak Pertama. \n\n` +
        `3. Dana Investasi dari pihak pertama yang kemudian di rubah oleh pihak kedua menjadi perhitungan SAHAM LEMBARAN, dimana setiap LEMBAR SAHAM ternilai Rp. 100,000,- ( Seratus ribu rupiah ) \n\n` +
        `4. Kepemilikan SAHAM Pihak Pertama dijelaskan sebagai berikut :\n` +
        `       a). MODAL INVESTASI	: Rp.${record.modal.toLocaleString()} \n` +
        `       b). LEMBAR SAHAM	    : ${record.saham} \n\n` +
        `5. Bahwa Pihak Pertama dan Pihak Kedua setuju untuk saling mengikatkan diri dalam suatu perjanjian kerjasama Investasi dalam Peningkatan Modal Investasi di CV. PEMUDA GROUP INDONESIA yang berlokasi di Dusun Parastembok, 01/03 Desa. Jambewangi, Kec Sempu, Banyuwangi, sesuai dengan ketentuan hukum yang berlaku.\n\n` +
        `6. Bahwa berdasarkan hal-hal diatas, kedua belah pihak menyatakan sepakat dan setuju untuk mengadakan Perjanjian Kerjasama ini yang dilaksanakan dengan ketentuan dan syarat-syarat sebagai berikut :\n\n`,
      15,
      yPos,
      { maxWidth: 170 }
    );
    yPos += 110;
    doc.text(`PASAL I`, 105, yPos, null, null, "center");
    yPos += 5;
    doc.setFont("helvetica", "bold");
    doc.text(`MAKSUD DAN TUJUAN`, 105, yPos, null, null, "center");
    doc.setFont("helvetica", "normal");
    yPos += 10;
    doc.text(
      `Pihak Pertama dalam perjanjian ini memberi DANA INVESTASI kepada Pihak Kedua sebesar Rp. ${record.modal.toLocaleString()},- ( ${terbilang(record.modal)} ) dan Pihak Kedua dengan ini telah menerima penyerahan DANA INVESTASI tersebut dari Pihak Pertama serta menyanggupi untuk melaksanakan pengelolaan DANA INVESTASI tersebut.`,
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
      `1. Dalam pelaksanaan perjanjian ini, Pihak Pertama memberi DANA INVESTASI kepada Pihak Kedua sebesar Rp. ${record.modal.toLocaleString()},- ( ${terbilang(record.modal)} ) dan Pihak Kedua dengan ini telah menerima penyerahan DANA INVESTASI tersebut dari Pihak Pertama serta menyanggupi untuk melaksanakan pengelolaan DANA INVESTASI. \n\n` +
        `2. Pihak Kedua dengan ini berjanji dan mengikatkan diri untuk melaksanakan perputaran DANA INVESTASI pada Usaha Peningkatan Modal Investasi di bidang Impor dan Penjualan Router yang berlokasi di Dusun Parastembok, 01/03 Desa. Jambewangi, Kec Sempu, Banyuwangi, setelah ditanda tanganinya perjanjian ini. \n\n` +
        `3. Pihak Kedua dengan ini berjanji dan mengikatkan diri untuk memberikan keuntungan berdasarkan persentase dari hasil dan resiko setelah pengurangan modal, operasional, pajak dan kewajiban-kewajiban lainya yang terhitung dalam lembaran saham yang berlaku adalah sebesar 10% (sepuluh persen) untuk pihak kedua dan 90% untuk pihak pertama dalam jangka waktu 6 bulan atau musiman.`,
      15,
      35,
      { maxWidth: 170 }
    );
    doc.text(`PASAL III`, 105, 95, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`JANGKA WAKTU KERJASAMA`, 105, 100, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
      `1. Perjanjian kerjasama ini dilakukan dan diterima untuk jangka waktu 6 bulan (enam) bulan atau 1 musim, terhitung sejak tanggal ${record.tanggalMulai} dengan periode jatuh tempo yang disepakati, kesepakatan   bersama antara pihak pertama dan pihak kedua sebagaimana 100% laba diberikan kepada pihak pertama dan kedua setelah perhitungan laba bersih di kurangi operasional dan  PASAL V ayat 3. dan di serahkan pada tanggal ${record.tanggalAkhir} secara utuh tanpa potongan serta dapat diperpanjang atau di perbarui dengan persetujuan kedua belah pihak untuk jangka waktu selanjutnya. \n\n` +
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
        `1. Pihak pertama memberikan DANA INVESTASI kepada Pihak Kedua sebesar Rp. ${record.modal.toLocaleString()},- ( ${terbilang(record.modal)} ) \n\n` +
        `2. Pihak pertama berhak meminta kembali DANA INVESTASI yang telah diserahkan kepada Pihak Kedua dengan ketentuan berdasarkan Pasal III Ayat 2. \n\n` +
        `3. Pihak pertama menerima hasil keuntungan atas pengelolaan DANA INVESTASI, sesuai dengan Pasal VI dalam perjanjian ini. \n\n` +
        `4. Investor atau pihak pertama membayar fee sebesar 2% (dua persen) dari keuntungan pengelolaan Dana Investasi di setiap periode sebelum dibagikan DEVIDEN atau keuntungan kepada pihak kedua.`,
      15,
      195,
      { maxWidth: 170 }
    );

    doc.addPage();
    addWatermark(doc);
    doc.text(`PASAL VI`, 105, 20, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`PEMBAGIAN HASIL`, 105, 25, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
      `Dalam Perjanjian Kerjasama Investasi Modal ini, kedua belah pihak sepakat didalam hal pembagian hasil investasi penyertaan dana sebagai berikut : \n\n` +
        `1. Kedua belah pihak sepakat dan setuju bahwa perjanjian kerjasama ini dilakukan dengan cara pemberian keuntungan yang diperoleh dalam Usaha Peningkatan Modal Investasi Di CV PEMUDA GROUP INDONESIA yang berlokasi di Dusun Parastembok, 01/03 Desa. Jambewangi, Kec Sempu, Banyuwangi, sebagaimana Pasal II ayat 3 perjanjian ini. \n\n` +
        `2. Bagi hasil yang dimaksud dalam ayat 1 diatas dilakukan dengan memperhitungkan biaya investasi sebagaimana tersebut dalam pasal II ayat 1. \n\n` +
        `3. Bagi hasil yang dimaksud dalam ayat 2 di atas berlaku sampai dengan Pihak Pertama menarik kembali DANA INVESTASI yang telah diserahkan sesuai dengan perhitungan Pasal II ayat 3 perjanjian ini. \n\n`,
      15,
      35,
      { maxWidth: 170 }
    );
    doc.text(`PASAL VII`, 105, 100, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`KEADAAN MEMAKSA (FORCE MAJEUR)`, 105, 105, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
        `1. Yang termasuk dalam Force Majeur adalah akibat dari kejadian-kejadian diluar kuasa dan kehendak dari kedua belah pihak diantaranya termasuk tidak terbatas bencana alam, banjir, badai, topan, gempa bumi, kebakaran, perang, huru-hara, pemberontakan, demonstrasi, pemogokan, kegagalan investasi. \n\n` +
        `2. Jika dalam pelaksanaan perjanjian ini terhambat ataupun tertunda baik secara keseluruhan ataupun sebagian yang dikarenakan hal-hal tersebut dalam ayat 1 diatas, maka Pihak pertama dan Pihak kedua bersedia mengganti, menanggung sejumlah Dana secara penuh sesuai Pasal 2 ayat 3 apabila belum ada pembagian hasil keuntungan, atau pengembalian Dana Investasi dikurangi dengan kerusakan terjadinya pasal 7 ayat 1. \n\n` +
        `3. Pengembalian Dana Investasi sebagaimana tersebut dalam ayat 2, mengenai tata cara pengembaliannya akan diadakan musyawarah terlebih dahulu antara Pihak Pertama dan Pihak Kedua mengenai proses atau jangka waktu pengembaliannya. \n\n`,
      15,
      115,
      { maxWidth: 170 }
    );
    doc.text(`PASAL VIII`, 105, 180, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`WANPRESTASI`, 105, 185, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
        `1. Dalam hal salah satu pihak telah melanggar kewajibannya yang tercantum dalam salah satu Pasal perjanjian ini, telah cukup bukti dan tanpa perlu dibuktikan lebih lanjut, bahwa pihak yang melanggar tersebut telah melakukan tindakan Wanprestasi. \n\n` +
        `2. Pihak yang merasa dirugikan atas tindakan Wanprestasi tersebut dalam ayat 1 diatas, berhak meminta ganti kerugian dari pihak yang melakukan wanprestasi tersebut atas sejumlah kerugian yang dideritanya, kecuali dalam hal kerugian tersebut disebabkan karena adanya suatu keadaan memaksa, seperti tercantum dalam Pasal VII. \n\n`,
      15,
      195,
      { maxWidth: 170 }
    );
    doc.text(`PASAL IX`, 105, 235, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`PERSELISIHAN`, 105, 240, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
        `Bilamana dalam pelaksanaan perjanjian Kerjasama ini terdapat perselisihan antara kedua belah pihak baik dalam pelaksanaannya ataupun dalam penafsiran salah satu Pasal dalam perjanjian ini, maka kedua belah pihak sepakat untuk sebisa mungkin menyelesaikan perselisihan tersebut dengan cara musyawarah. Apabila musyawarah telah dilakukan oleh kedua belah pihak, namun ternyata tidak  berhasil  mencapai suatu kemufakatan maka Para Pihak sepakat bahwa semua sengketa yang timbul  dari  perjanjian ini akan diselesaikan pada Kantor Kepaniteraan Pengadilan Negeri. \n\n`,
      15,
      250,
      { maxWidth: 170 }
    );

    doc.addPage();
    addWatermark(doc);
    doc.text(`PASAL X`, 105, 20, null, null, "center");
    doc.setFont("helvetica", "bold");
    doc.text(`ATURAN PENUTUP`, 105, 25, null, null, "center");
    doc.setFont("helvetica", "normal");
    doc.text(
      `Hal-hal yang belum diatur atau belum cukup diatur dalam perjanjian ini apabila dikemudian hari dibutuhkan dan dipandang perlu akan ditetapkan tersendiri secara musyawarah dan selanjutnya akan ditetapkan dalam suatu ADDENDUM yang berlaku mengikat bagi kedua belah pihak, yang akan direkatkan dan merupakan bagian yang tidak terpisahkan dari Perjanjian ini.

Demikianlah surat perjanjian kerjasama ini dibuat dalam rangkap 2 (dua), untuk masing-masing pihak, yang telah ditandatangani bermaterai, yang masing-masing mempunyai kekuatan hukum yang sama dan berlaku sejak ditandatangani. `,
      15,
      35,
      { maxWidth: 170 }
    );
    doc.text(`Sempu, ${record.tanggalMulai}`, 170, 85, null, null, "right");
    doc.setFont("helvetica", "bold");
    doc.text(`Pihak Kedua`, 170, 110, null, null, "right");
    doc.text(`Pihak Pertama`, 40, 110, null, null, "left");
    doc.text(`SULTON FATONI`, 170, 140, null, null, "right");
    doc.text(`${record.investor}`, 40, 140, null, null, "left");
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
    "Proyek Dimulai",
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
  const [form] = Form.useForm();
  const [isNewInvestor, setIsNewInvestor] = useState(true); // Menyimpan apakah investor baru atau lama

  // Contoh data investor lama (bisa diambil dari API atau database)
  const investorLamaOptions = [
    { id: 1, name: 'Investor 1' },
    { id: 2, name: 'Investor 2' },
    { id: 3, name: 'Investor 3' },
  ];

  const handleInvestorChange = (e) => {
    setIsNewInvestor(e.target.value === 'baru');
    form.resetFields(); // Reset form fields ketika tipe investor berubah
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
                    step === "Proyek Selesai" ||
                    step === "Proyek Dimulai"
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
        {/* Pilihan Investor Lama atau Baru */}
        <Form.Item label="Jenis Investor" name="jenisInvestor" rules={[{ required: true, message: 'Harap pilih jenis investor' }]}>
          <Radio.Group onChange={handleInvestorChange} defaultValue="baru">
            <Radio value="baru">Investor Baru</Radio>
            <Radio value="lama">Investor Lama</Radio>
          </Radio.Group>
        </Form.Item>

        {/* Input untuk investor baru */}
        {isNewInvestor && (
          <>
            <Form.Item
              label="Nomor Kontrak"
              name="kontrak"
              rules={[{ required: true, message: 'Harap masukkan nomor kontrak' }]}
            >
              <Input placeholder="Contoh: PGI/KI-001/01-2025" />
            </Form.Item>
            <Form.Item
              label="Nama Investor"
              name="investor"
              rules={[{ required: true, message: 'Harap masukkan nama investor' }]}
            >
              <Input placeholder="Nama lengkap investor" />
            </Form.Item>
            <Form.Item
              label="NIK"
              name="nik"
              rules={[{ required: true, message: 'Harap masukkan NIK' }]}
            >
              <Input placeholder="Masukkan NIK" />
            </Form.Item>
            <Form.Item
              label="NPWP"
              name="npwp"
              rules={[{ required: true, message: 'Harap masukkan NPWP' }]}
            >
              <Input placeholder="Masukkan NPWP" />
            </Form.Item>
           
            <Form.Item
              label="Alamat"
              name="alamat"
              rules={[{ required: true, message: 'Harap masukkan alamat' }]}
            >
              <Input.TextArea rows={3} placeholder="Alamat lengkap" />
            </Form.Item>
          </>
        )}

        {/* Dropdown untuk memilih investor lama */}
        {!isNewInvestor && (
          <Form.Item
            label="Pilih Investor Lama"
            name="investorLama"
            rules={[{ required: true, message: 'Harap pilih investor lama' }]}
          >
            <Select placeholder="Pilih investor lama">
              {investorLamaOptions.map((investor) => (
                <Select.Option key={investor.id} value={investor.id}>
                  {investor.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        )}
         <Form.Item
              label="Jumlah Saham"
              name="saham"
              rules={[{ required: true, message: 'Harap masukkan jumlah saham' }]}
            >
              <Input placeholder="Contoh: 50 Lembar" />
            </Form.Item>
      </Form>
    </Modal>
    </div>
  );
};

export default ProyekPage;
