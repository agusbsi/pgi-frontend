import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Form, Input, DatePicker, Select, Space } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const LaporanJual = () => {
  return (
    <>
      <Card className="mt-6">
        <Space className="mb-3">
          <Link to="/mobile">
            <LeftCircleOutlined
              style={{ fontSize: "24px", color: "#1890ff" }}
            />
          </Link>
          <h3>Filter Riwayat Transaksi</h3>
        </Space>
        <Form layout="vertical">
          <Form.Item name="kataKunci" label="Kata Kunci">
            <Input placeholder="Masukkan nominal/nama penerima" />
          </Form.Item>
          <Form.Item name="durasi" label="Durasi">
            <RangePicker format="DD MMM YYYY" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="jenisTransaksi"
            label="Jenis Transaksi"
            initialValue="Semua Transaksi"
          >
            <Select>
              <Select.Option value="Semua Transaksi">
                Semua Transaksi
              </Select.Option>
              <Select.Option value="Pembayaran">Pembayaran</Select.Option>
              <Select.Option value="Transfer">Transfer</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="sumberDana"
            label="Sumber Dana"
            initialValue="Semua Sumber Dana"
          >
            <Select>
              <Select.Option value="Semua Sumber Dana">
                Semua Sumber Dana
              </Select.Option>
              <Select.Option value="Rekening Bank">Rekening Bank</Select.Option>
              <Select.Option value="Dompet Digital">
                Dompet Digital
              </Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Tampilkan
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default LaporanJual;
