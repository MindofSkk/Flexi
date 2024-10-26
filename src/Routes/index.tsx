// AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import PaymentDetails from "../components/pages/PaymentDetails";
import Admin from "../components/Admin";
import ProductList from "../components/pages/ProductList";
// import About from '../components/pages/About';
// import NotFound from '../components/pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/Payment-Details" element={<PaymentDetails />} />
        <Route path="/Admin-Details" element={<Admin />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  );
};

export default AppRoutes;
