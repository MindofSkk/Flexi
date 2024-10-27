import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PaymentModal from "./PaymentModal";
import moment from "moment";

interface PaymentFormProps {
  images: string[];
  title: string;
  productInfo: string;
  amount: number;
  originalAmount: number;
  discountPercentage: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  images,
  title,
  productInfo,
  amount,
  originalAmount,
  discountPercentage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [payload, setPayload] = useState({});

  // const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone number must contain only numbers")
        .min(10, "Phone number must be at least 10 digits")
        .max(15, "Phone number must be 15 digits or less")
        .required("Phone number is required"),
    }),
    onSubmit: (values) => {
      const obj = {
        name: values.name,
        email: values.email,
        phoneNo: values.phone,
        // amount: amount,
        upiReferenceNo: "",
        currentTime: moment().format("YYYY-MM-DD HH:mm:ss"), // Get current date and time
      };
      setPayload(obj);
      setShowModal(true);
      console.log("Form Submitted:", obj);
    },
  });
  // Function to create a user

  return (
    <>
      <PaymentModal
        show={showModal}
        handleClose={handleCloseModal}
        amount={amount}
        qrCodeUrl="https://img.freepik.com/premium-vector/qr-code-icon-qr-code-sample-icon-abstract-style-white-background-qr-code-scanner-blac-scan-code-business-illustration-bar-code-icon-line-symbol-modern-vector-illustration-eps-10_564974-442.jpg" // Replace with actual QR code URL
        businessName="Mind of Skk"
        userPayload={payload}
      />
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >
        {" "}
        cicl
      </button>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <h2>{title}</h2>
            {/* Carousel for Images */}
            <div
              id="imageCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              {/* Carousel Controls */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#imageCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Product Description</h5>
                <p className="card-text">{productInfo}</p>
                <p className="text-primary">Quick Download After Payment</p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6"
            style={{ backgroundColor: "#f6f6f6" }}
          >
            <h3>Payment Details</h3>
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    formik.touched.name && formik.errors.name
                      ? "is-invalid"
                      : ""
                  }`}
                  id="name"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="invalid-feedback">{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  id="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className={`form-control ${
                    formik.touched.phone && formik.errors.phone
                      ? "is-invalid"
                      : ""
                  }`}
                  id="phone"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="invalid-feedback">{formik.errors.phone}</div>
                ) : null}
              </div>

              <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                  Amount
                </label>
                <div className="d-flex align-items-center">
                  <h3>₹{amount}</h3>
                  <span className="text-muted me-2 px-2">
                    <s>₹{originalAmount}</s>
                  </span>
                  <span className="text-success me-2">
                    {discountPercentage}
                  </span>
                </div>
                <p className="text-primary">Quick Download After Payment</p>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Pay {amount}
              </button>
            </form>

            <div className="mt-4 text-center">
              <h5>Contact Us:</h5>
              <p>
                <i className="bi bi-envelope"></i> zerostickerhelp@gmail.com{" "}
                <br />
                <i className="bi bi-telephone"></i> 6209266246
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
