"use client";

import { websiteConfig } from "@/data/websiteConfig";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { address, phone, email, iframeUrl, linkGoogleMap } = websiteConfig;

  return (
    <section id="contact" className="py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Liên hệ</h2>
        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <h5>Thông tin công ty</h5>

            <p className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="me-2 text-primary" />
              <a
                href={linkGoogleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-light"
              >
                {address}
              </a>
            </p>

            <p className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="me-2 text-primary" />
              <a href={`tel:${phone}`} className="text-decoration-none text-light">
                {phone}
              </a>
            </p>

            <p className="d-flex align-items-center mb-2">
              <FaEnvelope className="me-2 text-primary" />
              <a href={`mailto:${email}`} className="text-decoration-none text-light">
                {email}
              </a>
            </p>

            {/* Bản đồ Google Map */}
            <div className="ratio ratio-16x9 mt-3 rounded overflow-hidden shadow-sm">
              <iframe
                src={iframeUrl}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Họ tên" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows={4} placeholder="Nội dung"></textarea>
              </div>
              <div className="d-flex justify-content-center">
                  <button className="btn btn-primary">Gửi liên hệ</button>
                </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
