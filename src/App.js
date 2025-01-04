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
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
