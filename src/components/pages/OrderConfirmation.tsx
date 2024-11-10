import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./test.css";
import { faSpinner, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram } from "react-icons/fa";

interface OrderItem {
  image: string;
  name: string;
  price: number;
}

interface OrderData {
  orderNumber: string;
  items: OrderItem[];
  total: number;
}

const OrderConfirmation: React.FC = () => {
  const orderData: OrderData = {
    orderNumber: "#B6CT3",
    items: [
      {
        image: "https://example.com/shirt.jpg",
        name: "Half Sleeve 100% Cotton Shirts For Women",
        price: 800,
      },
      {
        image: "https://example.com/scarf.jpg",
        name: "Stylish womens scarfs combo",
        price: 800,
      },
    ],
    total: 1600,
  };

  const [isPending, setIsPending] = useState(true);

  // Stop the spinner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, []);

  return (
    <div className="order-confirmation" style={{ paddingTop: "" }}>
      <div className="confirmation-header">
        {isPending ? (
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size="3x"
            className="mb-3 text-warning"
          />
        ) : (
          <FontAwesomeIcon
            icon={faHourglassHalf}
            size="3x"
            className="mb-3 text-warning"
          />
        )}

        <h2>Thank you for your purchase         <FontAwesomeIcon icon={faCheckCircle} size="1x" color="green" />
        </h2>
        <p>
          We've received your order. Your payment is currently in progress and
          will take 1 to 2 business days to complete.
        </p>
        <p>
          Once the payment is confirmed, we will share the download link via
          email or WhatsApp.
        </p>
        <p>Your order number is: {orderData.orderNumber}</p>
      </div>
      <div className="row justify-content-center">
        {/* Contact Information Card */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-lg rounded-3">
            <div className="card-body">
            <h6 className="card-title  mb-3 text-start">Contact details</h6>
            <hr />

              <ul className="list-unstyled">
                {/* Phone Number */}
                <li className="d-flex align-items-center mb-3">
                  <FaPhoneAlt className="text-primary me-3" size={20} />
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:+1234567890" className="text-decoration-none text-dark">
                      +91 62092 66246
                    </a>
                  </span>
                </li>

                {/* Email Address */}
                <li className="d-flex align-items-center mb-3">
                  <FaEnvelope className="text-danger me-3" size={20} />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:contact@example.com" className="text-decoration-none text-dark">
                      mindofskkhelp@gmail.com
                    </a>
                  </span>
                </li>

                {/* YouTube */}
                <li className="d-flex align-items-center mb-3">
                  <FaYoutube className="text-danger me-3" size={20} />
                  <span>
                    <strong>YouTube:</strong>{" "}
                    <a href="https://youtube.com/@mindofskk?si=UxT4qU8t8EQARIKo" className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">
                     Mind of Skk
                    </a>
                  </span>
                </li>

                {/* Instagram */}
                <li className="d-flex align-items-center mb-3">
                  <FaInstagram className="text-primary me-3" size={20} />
                  <span>
                    <strong>Instagram:</strong>{" "}
                    <a href="https://www.instagram.com/mindofskk" className="text-decoration-none text-dark" target="_blank" rel="noopener noreferrer">
                      @mindofskk
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {orderData.items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} width="50" height="50" className="product-image" />
              <div className="product-info">
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <p>Total: ₹{orderData.total}</p>
        <button className="back-to-home">Back to Home</button>
      </div> */}
    </div>
  );
};

export default OrderConfirmation;
