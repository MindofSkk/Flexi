// Header.tsx
import React from 'react';
import mindofskk from "../../assets/productImages/mindofskk.webp"
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate=useNavigate()
  return (
    <header className="bg-dark text-white">
    <div className="container d-flex justify-content-between align-items-center py-2">
      {/* Logo and Title */}
      <div className="d-flex align-items-center" onClick={()=>navigate("/")}>
        <img src={mindofskk} alt="Logo" height="40" className="me-2" />
        {/* <h1 className="h5">Mind of Skk</h1> */}
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="list-unstyled d-flex mb-0">
          <li className="me-3">
            <a href="/" className="text-white text-decoration-none" >All Products</a>
          </li>
          <li className="me-3">
            <a href="/" className="text-white text-decoration-none">Contact Us</a>
          </li>
          <li>
            <a href="/" className="text-white text-decoration-none">About Us</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
