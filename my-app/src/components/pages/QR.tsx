// import React, { useEffect, useState } from "react";

// import amazon from "../../images/amazonpay.png";
// import bhim from "../../images/bhim.png";
// import cred from "../../images/cred_circle.png";
// import gpay from "../../images/googlepay.png";
// import phonepay from "../../images/phonepe.e101f376.png";
// import qr from "./mindofskk.jpg"

// interface PaymentModalProps {
//   show: boolean;
//   handleClose: () => void;
//   amount: string;
//   qrCodeUrl: string; // URL or data URL for the QR code image
//   businessName: string;
// }

// const PaymentModal: React.FC<PaymentModalProps> = ({
//   show,
//   handleClose,
//   amount,
//   qrCodeUrl,
//   businessName,
// }) => {
//   const [timeLeft, setTimeLeft] = useState(120); // 60 seconds countdown

//   useEffect(() => {
//     if (!show) return;

//     // Start the timer when the modal is shown
//     setTimeLeft(120);

//     const timer = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime <= 1) {
//           clearInterval(timer);
//           handleClose(); // Automatically close the modal when the timer reaches 0
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     // Clean up the timer when the component is unmounted or when the modal is closed
//     return () => clearInterval(timer);
//   }, [show, handleClose]);

//   // Format the time left as MM:SS
//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
//   };

//   if (!show) return null; // Don't render anything if not showing

//   return (
//     <>
//       <div className="modal-backdrop fade show" id="backdrop"></div>

//       <div
//         className="modal fade show"
//         style={{ display: "block" }} // Display the modal
//         tabIndex={-1}
//         role="dialog"
//         aria-labelledby="paymentModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="paymentModalLabel">
//                 <div className="d-flex align-items-center justify-content-center">
//                   {businessName}
//                 </div>
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={handleClose}
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body text-center">
//               <img
//                 src={qr}
//                 alt="UPI QR Code"
//                 className="img-fluid mb-3"
//                 style={{ maxWidth: "200px", height: "auto" }}
//               />
//               <p className="fs-5">Amount: ₹ {amount}</p>
//               <p>mindofskk@paytm</p>
//               <p className="text-muted">
//                 Scan the QR using any UPI app on your phone.
//               </p>
//               <div className="d-flex justify-content-center mb-3">
//                 <img src={phonepay} alt="PhonePe" className="mx-2" width="40" />
//                 <img
//                   src="https://static.vecteezy.com/system/resources/thumbnails/019/909/641/small/paytm-transparent-paytm-free-free-png.png"
//                   alt="PayTM"
//                   className="mx-2"
//                   width="40"
//                 />
//                 <img src={amazon} alt="Amazon Pay" className="mx-2" width="40" />
//                 <img src={gpay} alt="Google Pay" className="mx-2" width="40" />
//                 <img src={cred} alt="Cred" className="mx-2" width="40" />
//                 <img src={bhim} alt="BHIM" className="mx-2" width="40" />
//               </div>
//               <p className="text-muted">
//                 QR Code is valid for <span className="text-primary">{formatTime(timeLeft)} </span>minutes
//               </p>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={handleClose}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PaymentModal;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import amazon from "../../images/amazonpay.png";
import bhim from "../../images/bhim.png";
import cred from "../../images/cred_circle.png";
import gpay from "../../images/googlepay.png";
import phonepay from "../../images/phonepe.e101f376.png";
import qr from "./mindofskk.jpg"

interface PaymentModalProps {
  show: boolean;
  handleClose: () => void;
  amount: string;
  qrCodeUrl: string; // URL or data URL for the QR code image
  businessName: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  show,
  handleClose,
  amount,
  qrCodeUrl,
  businessName,
}) => {
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds countdown
  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    if (!show) return;

    // Start the timer when the modal is shown
    setTimeLeft(10);

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleClose(); // Automatically close the modal when the timer reaches 0
          navigate("/Payment-Details"); // Redirect to /test page when timer reaches 0
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clean up the timer when the component is unmounted or when the modal is closed
    return () => clearInterval(timer);
  }, [show, handleClose, navigate]);

  // Format the time left as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  if (!show) return null; // Don't render anything if not showing

  return (
    <>
      <div className="modal-backdrop fade show" id="backdrop"></div>

      <div
        className="modal fade show"
        style={{ display: "block" }} // Display the modal
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
                QR Code is valid for <span className="text-primary">{formatTime(timeLeft)} </span> minutes
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentModal;
