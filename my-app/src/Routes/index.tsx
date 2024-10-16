// AppRoutes.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/pages/Home';
// import About from '../components/pages/About';
// import NotFound from '../components/pages/NotFound';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Uncomment and add your other routes as needed */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
