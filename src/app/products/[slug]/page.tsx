import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "@/data/products";
import { websiteConfig } from "@/data/websiteConfig";
import ProductDetailClient from "@/components/page/ProductDetailClient";


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

  // render client component
  return <ProductDetailClient product={product} />;
}
