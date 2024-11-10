import React from "react";
import productList from "../../utils/ProductList";
import {  useNavigate } from "react-router-dom";

export default function ProductList() {
  const navigate = useNavigate();

  const handleBuyNow = (productUrl: string) => {
    navigate(`/${productUrl}`);
  };

  //
  //

  return (
    <div className="d-flex flex-wrap justify-content-around">
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
          <div className="shadow-sm card-body">
            <h5 className="card-title">{product.productName}</h5>
            <p className="card-text">{product.description}</p>
            <p className="font-weight-bold">
              ₹{product.price}
              <span className="text-danger ml-2 text-decoration-line-through " style={{paddingLeft:"20px"}}>
              ₹{product.realPrice}
              </span>
              <span className="text-success ml-2  " style={{paddingLeft:"20px"}}>
              {product.discount}
              </span>
            </p>
            <button
              onClick={() => handleBuyNow(product.url)}
              className="btn btn-success"
              style={{width:"100%"}}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
