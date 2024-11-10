import { FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row justify-content-center">
        {/* Contact Information Card */}
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card shadow-lg rounded-3">
            <div className="card-body">
              <h5 className="card-title text-start mb-3">Contact Details</h5>

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
    </div>
  );
};

export default ContactUs;
