import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { websiteConfig } from "@/data/websiteConfig";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params; 
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: product.seoContent,
    description: product.seoDescription,
    keywords: product.seoKeyword,
    icons: "/favicon.ico",
  };
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

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
