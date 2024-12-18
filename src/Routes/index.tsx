// AppRoutes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../components/pages/ProductDetails";
import Admin from "../components/Admin";
import ProductList from "../components/pages/ProductList";
import ProductDetails from "../components/pages/ProductDetails";
import OrderConfirmation from "../components/pages/OrderConfirmation";
import ContactUs from "../components/pages/Contactus";
// import About from '../components/pages/About';
// import NotFound from '../components/pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        {/* <Route path="/Payment-Details" element={<PaymentDetails />} /> */}
        <Route path="/:productUrl" element={<ProductDetails />} />
        <Route path="/PaymentDone" element={<OrderConfirmation />} />
        <Route path="/Contact-us" element={<ContactUs />} />


        <Route path="/admin8086" element={<Admin />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </>
  );
};

export default AppRoutes;
