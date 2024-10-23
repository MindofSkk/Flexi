// AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/pages/Home';
import PaymentDetails from '../components/pages/PaymentDetails';
// import About from '../components/pages/About';
// import NotFound from '../components/pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Payment-Details" element={<PaymentDetails />} />
          </Routes>
    </>
  );
};

export default AppRoutes;
