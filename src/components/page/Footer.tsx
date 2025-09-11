"use client";

import { websiteConfig } from "@/data/websiteConfig";

export default function Footer() {
  const { title, description, address, linkGoogleMap, phone, email, fanpage, zalo, website } = websiteConfig;

  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">
        <div className="row">
          {/* Logo & mô tả */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">{title}</h4>
            <p>{description}</p>
          </div>

          {/* Thông tin liên hệ */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Liên hệ</h5>
            <p>
              Địa chỉ:{" "}
              <a
                href={linkGoogleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                {address}
              </a>
            </p>
            <p>
              Điện thoại: <a href={`tel:${phone}`} className="text-light">{phone}</a>
            </p>
            <p>
              Email: <a href={`mailto:${email}`} className="text-light">{email}</a>
            </p>
          </div>

          {/* Mạng xã hội */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Mạng xã hội</h5>
            <p>
              <a href={fanpage} target="_blank" rel="noopener noreferrer" className="text-light me-2">Facebook</a>
            </p>
            <p>
              <a href={zalo} target="_blank" rel="noopener noreferrer" className="text-light me-2">Zalo</a>
            </p>
            <p>
              <a href={website} target="_blank" rel="noopener noreferrer" className="text-light">Website</a>
            </p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center pb-3">
          <p className="mb-0">© {new Date().getFullYear()} {title} - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
