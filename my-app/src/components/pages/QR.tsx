import React from 'react';

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
    if (!show) return null; // Don't render anything if not showing

    return (
        <div
            className="modal fade show"
            style={{ display: 'block' }} // Display the modal
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
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" className="me-2">
                                    <circle cx="-25.93" cy="41.95" r="29.87" fill="#5f259f" transform="rotate(-77)" />
                                    <path fill="#fff" d="M48.43 27.08c0-1.17-1-2.17-2.17-2.17h-4l-9.18-10.52a3.39 3.39 0 0 0-3.5-1l-3.18 1c-.5.17-.67.84-.33 1.17l10.01 9.51H20.9c-.5 0-.83.34-.83.84v1.67c0 1.17 1 2.17 2.17 2.17h2.34v8c0 6.02 3.17 9.52 8.5 9.52 1.68 0 3.01-.17 4.68-.83v5.34c0 1.5 1.17 2.67 2.67 2.67h2.34c.5 0 1-.5 1-1V29.58h3.84c.5 0 .83-.33.83-.83zM37.75 41.43c-1 .5-2.34.67-3.34.67-2.67 0-4-1.34-4-4.34v-8.01h7.34z"/>
                                </svg> */}
                                {businessName}
                            </div>
                        </h5>
                        <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-center">
                        <h5 className="mb-4">Pay With UPI QR</h5>
                        <img
                            src={qrCodeUrl}
                            alt="UPI QR Code"
                            className="img-fluid mb-3"
                            style={{ maxWidth: '200px', height: 'auto' }}
                        />
                        <p className="fs-5">Amount: ₹ {amount}</p>
                        <p className="text-muted">Scan the QR using any UPI app on your phone.</p>
                        <div className="d-flex justify-content-center mb-3">
                            {/* Icons for different UPI apps */}
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PhonePe_logo.png/512px-PhonePe_logo.png" alt="PhonePe" className="mx-2" width="40" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Paytm_logo.svg/512px-Paytm_logo.svg.png" alt="PayTM" className="mx-2" width="40" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Pay_logo.svg/512px-Google_Pay_logo.svg.png" alt="Google Pay" className="mx-2" width="40" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/BHIM_logo.png/512px-BHIM_logo.png" alt="BHIM" className="mx-2" width="40" />
                        </div>
                        <p className="text-muted">QR Code is valid for 01:00 minutes</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleClose}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
