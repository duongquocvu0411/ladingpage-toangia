import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, type Product } from "@/data/products";
import { websiteConfig } from "@/data/websiteConfig";

// SEO động
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return {
      title: "Sản phẩm không tồn tại",
      description: "Sản phẩm không tìm thấy trong cửa hàng",
    };
  }

  return {
    title: product.seoContent,
    description: product.seoDescription,
    keywords: product.seoKeyword,
    icons: { icon: "/favicon.ico" },
  };
}

// Build tĩnh cho tất cả slug
export async function generateStaticParams(): Promise<{ params: { slug: string } }[]> {
  return products.map((p) => ({ params: { slug: p.slug } }));
}

// Component chính
export default function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const { phone, zalo } = websiteConfig;

  return (
    <section className="py-5 container">
      <div className="row">
        <div className="col-md-6">
          <div style={{ position: "relative", width: "100%", height: "400px" }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p><strong>Kích thước:</strong> {product.size}</p>
          <p><strong>Chất liệu:</strong> {product.fill}</p>
          <p><strong>Giá:</strong> Liên hệ</p>
          <div className="d-flex gap-2 mt-3">
            <a href={`tel:${phone}`} className="btn btn-primary">Gọi ngay</a>
            <a href={zalo} target="_blank" rel="noopener noreferrer" className="btn btn-success">Zalo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
