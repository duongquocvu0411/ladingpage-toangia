"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { processSteps } from "@/data/process";
import { FaComments, FaFileInvoiceDollar, FaCogs, FaShieldAlt } from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  FaComments: <FaComments size={40} />,
  FaFileInvoiceDollar: <FaFileInvoiceDollar size={40} />,
  FaCogs: <FaCogs size={40} />,
  FaShieldAlt: <FaShieldAlt size={40} />,
};


export default function Process() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Quy trình triển khai</h2>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop
          slidesPerView={3}
          spaceBetween={30}
          grabCursor
        >
          {processSteps.map((step) => (
            <SwiperSlide key={step.id}>
              <div className="text-center">
                <div className="mb-3">{icons[step.icon]}</div>
                <h5>
                  {step.id}. {step.title}
                </h5>
                <p >{step.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
