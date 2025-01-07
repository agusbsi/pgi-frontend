import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/reset.css"; // Ant Design CSS

// Lazy-loaded pages
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const InvestorPage = lazy(() => import("./pages/InvestorPage"));
const ProyekPage = lazy(() => import("./pages/ProyekPage"));
const ProyekDetail = lazy(() => import("./pages/ProyekDetail"));
const BarangPage = lazy(() => import("./pages/BarangPage"));
const UserPage = lazy(() => import("./pages/UserPage"));
const SupplierPage = lazy(() => import("./pages/SupplierPage"));
const PelangganPage = lazy(() => import("./pages/PelangganPage"));
const BeliPage = lazy(() => import("./pages/BeliPage"));
const BeliAdd = lazy(() => import("./pages/BeliAdd"));
const BeliDetail = lazy(() => import("./pages/BeliDetail"));
const TerimaPage = lazy(() => import("./pages/TerimaPage"));
const TerimaDetail = lazy(() => import("./pages/TerimaDetail"));
const OperasionalPage = lazy(() => import("./pages/OperasionalPage"));
const JualPage = lazy(() => import("./pages/JualPage"));
const JualDetail = lazy(() => import("./pages/JualDetail"));
const JualAdd = lazy(() => import("./pages/JualAdd"));
const PackingPage = lazy(() => import("./pages/PackingPage"));
const ReturPage = lazy(() => import("./pages/ReturPage"));
const GaransiPage = lazy(() => import("./pages/GaransiPage"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Spin size="large" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <MainLayout>
                <DashboardPage />
              </MainLayout>
            }
          />
          <Route
            path="/investor"
            element={
              <MainLayout>
                <InvestorPage />
              </MainLayout>
            }
          />
          <Route
            path="/proyek"
            element={
              <MainLayout>
                <ProyekPage />
              </MainLayout>
            }
          />
          <Route
            path="/proyek/:id"
            element={
              <MainLayout>
                <ProyekDetail />
              </MainLayout>
            }
          />
          <Route
            path="/barang"
            element={
              <MainLayout>
                <BarangPage />
              </MainLayout>
            }
          />
          <Route
            path="/user"
            element={
              <MainLayout>
                <UserPage />
              </MainLayout>
            }
          />
          <Route
            path="/supplier"
            element={
              <MainLayout>
                <SupplierPage />
              </MainLayout>
            }
          />
          <Route
            path="/pelanggan"
            element={
              <MainLayout>
                <PelangganPage />
              </MainLayout>
            }
          />
          <Route
            path="/pembelian"
            element={
              <MainLayout>
                <BeliPage />
              </MainLayout>
            }
          />
          <Route
            path="/pembelian/add"
            element={
              <MainLayout>
                <BeliAdd />
              </MainLayout>
            }
          />
          <Route
            path="/pembelian/:id"
            element={
              <MainLayout>
                <BeliDetail />
              </MainLayout>
            }
          />
          <Route
            path="/penerimaan"
            element={
              <MainLayout>
                <TerimaPage />
              </MainLayout>
            }
          />
          <Route
            path="/penerimaan/:id"
            element={
              <MainLayout>
                <TerimaDetail />
              </MainLayout>
            }
          />
          <Route
            path="/operasional"
            element={
              <MainLayout>
                <OperasionalPage />
              </MainLayout>
            }
          />
          <Route
            path="/penjualan"
            element={
              <MainLayout>
                <JualPage />
              </MainLayout>
            }
          />
          <Route
            path="/penjualan/:id"
            element={
              <MainLayout>
                <JualDetail />
              </MainLayout>
            }
          />
          <Route
            path="/penjualan/add"
            element={
              <MainLayout>
                <JualAdd />
              </MainLayout>
            }
          />
          <Route
            path="/packing"
            element={
              <MainLayout>
                <PackingPage />
              </MainLayout>
            }
          />
          <Route
            path="/retur"
            element={
              <MainLayout>
                <ReturPage />
              </MainLayout>
            }
          />
          <Route
            path="/cek-garansi"
            element={
              <MainLayout>
                <GaransiPage />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
