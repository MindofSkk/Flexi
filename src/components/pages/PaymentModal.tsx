import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import amazon from "../../images/amazonpay.png";
import bhim from "../../images/bhim.png";
import cred from "../../images/cred_circle.png";
import gpay from "../../images/googlepay.png";
import phonepay from "../../images/phonepe.e101f376.png";
import qr from "./mindofskk.jpg";
import { postData } from "../../utils/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface PaymentModalProps {
  show: boolean;
  handleClose: () => void;
  amount: number;
  qrCodeUrl: string;
  businessName: string;
  userPayload: {};
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  show,
  handleClose,
  amount,
  qrCodeUrl,
  businessName,
  userPayload,
}) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [showReferenceInput, setShowReferenceInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Step 1: Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    if (!show) return;
    setTimeLeft(120);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleClose();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [show, handleClose, navigate]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const validationSchema = Yup.object().shape({
    referenceNumber: Yup.string().required("Reference number cannot be blank"),
  });

  const handlePaymentDoneClick = () => {
    setShowReferenceInput(true);
  };

  const handleReferenceSubmit = async (values: { referenceNumber: string }) => {
    const obj = {
      ...userPayload,
      upiReferenceNo: values.referenceNumber,
    };
    
    setIsLoading(true); // Step 2: Set loading state to true before API call
    await SubmitUserDetails(obj);
    setShowReferenceInput(false);
    handleClose();
    navigate("/PaymentDone");
    setIsLoading(false); // Step 3: Set loading state to false after API call
  };

  const SubmitUserDetails = async (payload: object) => {
    const url = ""; // Replace with your API endpoint

    try {
      const result = await postData(url, payload);
      console.log("User created successfully:", result);
    } catch (error) {
      console.error("Failed to create user:", error);
    }
  };

  if (!show) return null;

  return (
    <>
      <div className="modal-backdrop fade show" id="backdrop"></div>

      <div
        className="modal fade show"
        style={{ display: "block" }}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="paymentModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="paymentModalLabel">
                <div className="d-flex align-items-center justify-content-center">
                  {businessName}
                </div>
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              {isLoading ? (
                // Step 4: Display the loader while waiting for the API call
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <>
                  <img
                    src={qr}
                    alt="UPI QR Code"
                    className="img-fluid mb-3"
                    style={{ maxWidth: "200px", height: "auto" }}
                  />
                  <p className="fs-5">Amount: ₹ {amount}</p>
                  <p>mindofskk@paytm</p>
                  <p className="text-muted">
                    Scan the QR using any UPI app on your phone.
                  </p>
                  <div className="d-flex justify-content-center mb-3">
                    <img src={phonepay} alt="PhonePe" className="mx-2" width="40" />
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/019/909/641/small/paytm-transparent-paytm-free-free-png.png"
                      alt="PayTM"
                      className="mx-2"
                      width="40"
                    />
                    <img src={amazon} alt="Amazon Pay" className="mx-2" width="40" />
                    <img src={gpay} alt="Google Pay" className="mx-2" width="40" />
                    <img src={cred} alt="Cred" className="mx-2" width="40" />
                    <img src={bhim} alt="BHIM" className="mx-2" width="40" />
                  </div>
                  <p className="text-muted">
                    QR Code is valid for{" "}
                    <span className="text-primary">{formatTime(timeLeft)} </span>
                    minutes
                  </p>
                  {!showReferenceInput ? (
                    <button
                      onClick={handlePaymentDoneClick}
                      className="btn btn-success"
                    >
                      Payment Done
                    </button>
                  ) : (
                    <Formik
                      initialValues={{ referenceNumber: "" }}
                      validationSchema={validationSchema}
                      onSubmit={handleReferenceSubmit}
                    >
                      {({ handleSubmit }) => (
                        <Form onSubmit={handleSubmit} className="mt-3 w-75 mx-auto">
                          <Field
                            type="text"
                            name="referenceNumber"
                            placeholder="Enter UTR / Reference / Transaction ID"
                            className="form-control mb-2"
                          />
                          <ErrorMessage
                            name="referenceNumber"
                            component="div"
                            className="text-danger"
                          />
                          <button type="submit" className="btn btn-primary mt-2">
                            Submit
                          </button>
                        </Form>
                      )}
                    </Formik>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
