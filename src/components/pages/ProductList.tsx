import React from 'react';
import productList from '../../utils/ProductList';
import { Link } from 'react-router-dom';

export default function ProductList() {
    return (
        <div className="d-flex flex-wrap justify-content-around">
            {productList.map((product) => (
                <div key={product.productCode} className="card bg-light m-3" style={{ width: '18rem' }}>
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
                            <span className="text-danger ml-2 text-decoration-line-through ">{product.realPrice}</span>
                        </p>
                        <Link to='/home' className="btn btn-success">
                            Buy Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
