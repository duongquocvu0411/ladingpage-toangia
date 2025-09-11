  "use client";

  import { useState } from "react";
  import { products } from "@/data/products";

  export default function Products() {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Carad", "Solid", "Kumkos"];

    const handleFilter = (category: string) => {
      setActiveCategory(category);
      if (category === "All") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter((p) => p.category === category));
      }
    };

    return (
      <section id="products" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">
            Sản phẩm nổi bật
          </h2>

          {/* Category Filter Buttons */}
          <div className="text-center mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`btn me-2 mb-2 ${
                  activeCategory === cat ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => handleFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product List */}
          <div className="row g-4" id="products-container">
            {filteredProducts.map((p) => (
              <div
                className="col-md-4 product-card-container"
                key={p.id}
                data-aos="zoom-in"
              >
                <div className="card h-100 border-0 shadow-sm overflow-hidden product-card">
                  <a href={`/products/${p.slug}`}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ objectFit: "cover" }}
                      className="card-img-top product-image"
                    />
                  </a>
                  <div className="card-body text-center position-relative">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="mb-1">
                      <strong>Kích thước:</strong> {p.size}
                    </p>
                    <div className="product-fill">
                      <p className="mb-0">
                        <strong>Chất liệu:</strong> {p.fill}
                      </p>
                    </div>

                    {/* Button hidden by default, appears on hover */}
                    <a
                      href={`/products/${p.slug}`}
                      className="btn btn-outline-primary mt-3 view-detail-btn"
                    >
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
<style jsx>{`
  .product-card {
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;
  }

  /* Overlay highlight */
  .product-card::before {
    content: "";
    position: absolute;
    bottom: -100%; /* Ẩn bên dưới */
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(40, 167, 69, 0.15), /* xanh lá nhạt */
      rgba(40, 167, 69, 0.3)   /* xanh lá đậm hơn */
    );
    transition: all 0.6s ease;
    z-index: 0;
  }

  /* Khi hover thì trượt lên phủ card */
  .product-card:hover::before {
    bottom: 0;
  }

  .product-card .card-body {
    position: relative;
    z-index: 1; /* Text + button nằm trên overlay */
  }

  .view-detail-btn {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s ease-in-out;
    z-index: 2;
    position: relative;
  }

  .product-card:hover .view-detail-btn {
    opacity: 1;
    transform: translateY(0);
  }
`}</style>

      </section>
    );
  }
