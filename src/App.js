import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/reset.css"; // Ant Design CSS

// Lazy-loaded pages
const LoginPage = lazy(() => import("./pages/mypanel/LoginPage"));
const DashboardPage = lazy(() => import("./pages/mypanel/DashboardPage"));
const InvestorPage = lazy(() => import("./pages/mypanel/InvestorPage"));
const ProyekPage = lazy(() => import("./pages/mypanel/ProyekPage"));
const ProyekDetail = lazy(() => import("./pages/mypanel/ProyekDetail"));
const BarangPage = lazy(() => import("./pages/mypanel/BarangPage"));
const UserPage = lazy(() => import("./pages/mypanel/UserPage"));
const SupplierPage = lazy(() => import("./pages/mypanel/SupplierPage"));
const PelangganPage = lazy(() => import("./pages/mypanel/PelangganPage"));
const BeliPage = lazy(() => import("./pages/mypanel/BeliPage"));
const BeliAdd = lazy(() => import("./pages/mypanel/BeliAdd"));
const BeliDetail = lazy(() => import("./pages/mypanel/BeliDetail"));
const TerimaPage = lazy(() => import("./pages/mypanel/TerimaPage"));
const TerimaDetail = lazy(() => import("./pages/mypanel/TerimaDetail"));
const OperasionalPage = lazy(() => import("./pages/mypanel/OperasionalPage"));
const JualPage = lazy(() => import("./pages/mypanel/JualPage"));
const JualDetail = lazy(() => import("./pages/mypanel/JualDetail"));
const JualAdd = lazy(() => import("./pages/mypanel/JualAdd"));
const PackingPage = lazy(() => import("./pages/mypanel/PackingPage"));
const PackingDetail = lazy(() => import("./pages/mypanel/PackingDetail"));
const ReturPage = lazy(() => import("./pages/mypanel/ReturPage"));
const GaransiPage = lazy(() => import("./pages/mypanel/GaransiPage"));
const DashboardInvestor = lazy(() => import("./pages/investor/Dashboard"));
const DetailProyekInvestor = lazy(() =>
  import("./pages/investor/ProyekDetail")
);
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
            path="/packing/:id"
            element={
              <MainLayout>
                <PackingDetail />
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
          <Route
            path="/mobile"
            element={
              <MainLayout>
                <DashboardInvestor />
              </MainLayout>
            }
          />
          <Route
            path="/detail-proyek-investor/:id"
            element={
              <MainLayout>
                <DetailProyekInvestor />
              </MainLayout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
