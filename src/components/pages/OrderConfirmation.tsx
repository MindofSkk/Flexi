import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./test.css";
import { faSpinner, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

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
