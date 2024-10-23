import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";

const PaymentDetails: React.FC = () => {
  const [isPending, setIsPending] = useState(true);

  // Stop the spinner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
        <div className="card-body text-center">
          {/* Conditional rendering for spinner or solid pending icon */}
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
          <h3 className="card-title mb-4">{isPending ?"Please wait...":"Pending"}</h3>
          <p className="card-text">
            Your payment is pending. Please fill in your reference number to
            proceed.
          </p>
          <p className="text-muted ">
            <small>
              The payment process is still in progress, and the money has not
              yet been claimed by the merchant. It will take 1-2 business days
              to complete.
            </small>{" "}
          </p>

          {/* Contact Details */}
          <div className="mt-4">
            <h5>Contact Details</h5>
            <p>
              Mobile: <a href="tel:+1234567890">+91 6209266246</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@example.com">mindofskkhelp@gmail.com</a>
            </p>
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="referenceNumber">Reference Number</label>
              <input
                type="text"
                className="form-control"
                id="referenceNumber"
                placeholder="Enter your reference number"
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
