import React from "react";
import productList from "../../utils/ProductList";
import {  useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();

  const handleBuyNow = (productUrl: string) => {
    navigate(`/${productUrl}`);
  };


  const handleGooglePay = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Check if the device is mobile
    const isMobile = /android|iphone|ipad|ipod/.test(userAgent);

    if (isMobile) {
      // Attempt to open Google Pay app
      window.location.href = 'googlepay://pay';

      // Fallback after a short delay
      setTimeout(() => {
        // You can redirect to Google Pay website if needed
        window.location.href = 'https://pay.google.com'; // Fallback URL
      }, 3000); // Delay to allow app to open
    } else {
      alert('Please use a mobile device to make payments.');
    }
  };
  return (
    <div className="d-flex flex-wrap justify-content-around">
<button onClick={handleGooglePay}>
      Pay with Google Pay
    </button>
      {productList.map((product) => (
        <div
          key={product.productCode}
          className="card bg-light m-3"
          style={{ width: "18rem" }}
        >
          <img
            src={product.image || "https://via.placeholder.com/150"}
            alt={product.productName}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">{product.description}</p>
            <p className="font-weight-bold">
              ₹{product.price}
              <span className="text-danger ml-2 text-decoration-line-through ">
                {product.realPrice}
              </span>
            </p>
            <button
              onClick={() => handleBuyNow(product.url)}
              className="btn btn-success"
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
