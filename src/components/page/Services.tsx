"use client";

import Marquee from "react-fast-marquee";
import { services } from "@/data/services";

export default function Services() {
  return (  
    <section id="services" className="py-5 bg-secondary">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-dark">Dịch vụ của chúng tôi</h2>
        <Marquee pauseOnHover={false} speed={50} gradient={false}>
          {services.map(s => (
            <div
              key={s.id}
              className="p-4 bg-white shadow-sm text-center mx-3 text-dark"
              style={{ minWidth: "250px", borderRadius: "10px" }}
            >
              <h5 className="fw-bold">{s.title}</h5>
              <p>{s.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
