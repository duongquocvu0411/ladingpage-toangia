"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { websiteConfig } from "@/data/websiteConfig";
import { products } from "@/data/products";

interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  images?: string[];
  size: string;
  material: string;
  category: string;
  detail?: string; // full HTML
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const { phone, zalo } = websiteConfig;

  const [mainImage, setMainImage] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string[]>(
    product.images && product.images.length ? product.images : []
  );

  useEffect(() => {
    setMainImage(product.image);
  }, [product.image]);

  const handleThumbnailClick = (index: number) => {
    const clickedImage = thumbnails[index];
    const newThumbnails = [...thumbnails];
    newThumbnails[index] = mainImage;
    setMainImage(clickedImage);
    setThumbnails(newThumbnails);
  };

  if (!mainImage) return null;

  return (
    <section className="py-5 container">
      {/* Nút quay lại */}
      <div className="mb-4">
        <button
          onClick={() => history.back()}
          className="btn btn-outline-secondary shadow-sm rounded-pill px-4"
        >
          ← Quay lại
        </button>
      </div>

      <div className="row g-4">
        {/* Ảnh chính + thumbnails + detail */}
        <div className="col-md-6">
          {/* Ảnh chính */}
          <motion.div
            key={mainImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl overflow-hidden shadow-lg mb-3"
          >
            <InnerImageZoom
              key={mainImage}
              src={mainImage}
              zoomSrc={mainImage}
              zoomType="hover"
              moveType="pan"
              zoomPreload
              zoomScale={2}
              className="w-100 h-100 rounded-2xl"
              imgAttributes={{
                alt: product.name,
                style: { objectFit: "cover", width: "100%", height: "400px", display: "block" },
              }}
            />
          </motion.div>

          {/* Thumbnails */}
          {thumbnails.length > 0 && (
            <div className="d-flex gap-3 mt-3 flex-wrap">
              {thumbnails.map((img: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className="border rounded-3 overflow-hidden p-0 bg-white d-inline-block"
                  style={{ width: 80, height: 80, cursor: "pointer" }}
                  aria-label={`Chọn ảnh ${index + 1}`}
                >
                  <img
                    src={img}
                    alt={`thumb-${index}`}
                    style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }}
                  />
                </button>
              ))}
            </div>
          )}

          {/* Detail sản phẩm */}
          {product.detail && (
            <div className="mt-4 product-detail border-top pt-3">
              <h1 className="fw-bold-">Chi tiết sản phẩm </h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                dangerouslySetInnerHTML={{ __html: product.detail }}
              />
            </div>
          )}
        </div>

        {/* Thông tin sản phẩm: title + size + material + nút Gọi/Zalo */}
        <div className="col-md-6">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold mb-3 text-3xl">{product.name}</h1>
            <p><strong>Kích thước:</strong> {product.size}</p>
            <p><strong>Chất liệu:</strong> {product.material}</p>
            <p><strong>Giá:</strong> <span className="text-danger fw-bold">Liên hệ</span></p>

            <div className="d-flex gap-3 mt-4">
              {/* Nút Gọi */}
              <a href={`tel:${phone}`} className="circle-btn phone-btn">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
                  alt="Gọi ngay"
                  className="circle-btn-img"
                />
              </a>

              {/* Nút Zalo */}
              <a href={zalo} target="_blank" rel="noopener noreferrer" className="circle-btn zalo-btn">
                <img
                  src="/images/zalo.png"
                  alt="Zalo"
                  className="circle-btn-img"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sản phẩm liên quan */}
      {relatedProducts.length > 0 && (
        <div className="mt-5">
          <h3 className="fw-bold mb-4 text-center">Sản phẩm liên quan</h3>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={3000}
            loop
            slidesPerView={3}
            spaceBetween={30}
            grabCursor
          >
            {relatedProducts.map((item: Product) => (
              <SwiperSlide key={item.id}>
                <div className="card h-100 border-0 shadow-sm overflow-hidden product-card">
                  <a href={`/products/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="card-img-top product-image"
                      style={{ objectFit: "cover", height: "180px" }}
                    />
                  </a>
                  <div className="card-body text-center position-relative body-hover">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="mb-1"><strong>Kích thước:</strong> {item.size}</p>
                    {item.material && (
                      <div className="product-material">
                        <p className="mb-0"><strong>Chất liệu:</strong> {item.material}</p>
                      </div>
                    )}
                    <a
                      href={`/products/${item.slug}`}
                      className="btn btn-outline-primary mt-3 view-detail-btn"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
}
