"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { news } from "@/data/news";

export default function FeaturedNews() {
  return (
    <section id="news" className="bg-light py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-dark">Tin tức nổi bật</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          
          autoplay={{
            delay: 0, // không delay, chạy liên tục
            disableOnInteraction: false, // user kéo xong vẫn tiếp tục autoplay
          }}
          speed={5000} // tốc độ cuộn (ms)
          grabCursor={true} // hiện icon bàn tay khi hover
          freeMode={true} // cho phép kéo vuốt tự do
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card shadow-sm" style={{ minHeight: "200px" }}>
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{item.title}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
