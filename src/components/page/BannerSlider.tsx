"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { banners } from "@/data/banners";

export default function BannerSlider() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault(); // ngăn việc href mặc định
    if (link.startsWith("#")) {
      const el = document.querySelector(link);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = link; // nếu là url ngoài
    }
  };

  return (
    <section id="hero" className="mt-5">
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={0}
        slidesPerView={"auto"}
        loop={true}
        freeMode={{ enabled: true, momentum: true }}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={5000}
      >
        {banners.map((b) => (
          <SwiperSlide key={b.id} style={{ width: "100vw" }}>
            <div className={`vh-100 d-flex align-items-center justify-content-center ${b.bg}`}>
              <div className="container text-center">
                <h1 className="display-3 fw-bold">{b.title}</h1>
                <p className="lead">{b.subtitle}</p>
                <a
                  href={b.buttonLink}
                  className="btn btn-light mt-3"
                  onClick={(e) => handleClick(e, b.buttonLink)}
                >
                  {b.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
