export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string; 
  images: string[]; 
  size: string;
  material: string;
  category: string;
  seoContent: string;
  seoKeyword: string;
  seoDescription: string;
  detail?: string; 
}

export const products: Product[] = [
  // Carad
  {
    id: 1,
    name: "Két Sắt Carad CR-01",
    slug: "ket-sat-carad-cr-01",
    image: "/images/ket1.png",
    images: ["/images/ket1.png", "/images/ket1-2.png", "/images/ket1-3.png"],
    size: "600 x 400 x 450 mm",
    material: "Thép chống cháy 1 giờ, khóa cơ",
    category: "Carad",
    seoContent: "Két Sắt Carad CR-01",
    seoKeyword: "Két Sắt Carad CR-01",
    seoDescription: "Két sắt Carad CR-01 chất lượng cao, phù hợp văn phòng và gia đình.",
    detail: `<p>Két sắt Carad CR-01 dung tích lớn, khóa cơ an toàn, thích hợp cho văn phòng và gia đình.</p>`,
  },
  {
    id: 2,
    name: "Két Sắt Carad CR-02",
    slug: "ket-sat-carad-cr-02",
    image: "/images/ket3.png",
    images: ["/images/ket3.png"],
    size: "650 x 450 x 480 mm",
    material: "Thép chống cháy 1 giờ, khóa điện tử",
    category: "Carad",
    seoContent: "Két Sắt Carad CR-02",
    seoKeyword: "Két Sắt Carad CR-02",
    seoDescription: "Két sắt Carad CR-02 dung tích lớn, chống cháy, bảo mật cao.",
    detail: `<p>Két sắt Carad CR-02 chống cháy 1 giờ, khóa điện tử hiện đại, bảo mật cao.</p>`,
  },
  {
    id: 3,
    name: "Két Sắt Carad CR-03",
    slug: "ket-sat-carad-cr-03",
    image: "/images/carad3.jpg",
    images: ["/images/carad3.jpg", "/images/carad3-2.jpg"],
    size: "700 x 500 x 500 mm",
    material: "Thép đặc chống cháy, khóa cơ + điện tử",
    category: "Carad",
    seoContent: "Két Sắt Carad CR-03",
    seoKeyword: "Két Sắt Carad CR-03",
    seoDescription: "Két sắt Carad CR-03 bảo mật cao, thích hợp văn phòng lớn.",
    detail: `<p>Két sắt Carad CR-03 thiết kế cao cấp, khóa cơ + điện tử, chống cháy hiệu quả.</p>`,
  },

  // Solid
  {
    id: 4,
    name: "Két Sắt Solid SD-01",
    slug: "ket-sat-solid-sd-01",
    image: "/images/solid1.jpg",
    images: ["/images/solid1.jpg"],
    size: "650 x 480 x 500 mm",
    material: "Thép đặc chống cháy 2 giờ, khóa cơ",
    category: "Solid",
    seoContent: "Két Sắt Solid SD-01",
    seoKeyword: "Két Sắt Solid SD-01",
    seoDescription: "Két sắt Solid SD-01 cao cấp, chống cháy, khóa an toàn.",
    detail: `<p>Két sắt Solid SD-01 chống cháy 2 giờ, khóa cơ bền bỉ, bảo mật cao.</p>`,
  },
  {
    id: 5,
    name: "Két Sắt Solid SD-02",
    slug: "ket-sat-solid-sd-02",
    image: "/images/solid2.jpg",
    images: ["/images/solid2.jpg"],
    size: "700 x 500 x 550 mm",
    material: "Thép đặc, bảo mật cao, khóa điện tử và cơ",
    category: "Solid",
    seoContent: "Két Sắt Solid SD-02",
    seoKeyword: "Két Sắt Solid SD-02",
    seoDescription: "Két sắt Solid SD-02 dung tích lớn, thích hợp doanh nghiệp.",
    detail: `<p>Két sắt Solid SD-02 thiết kế an toàn, khóa điện tử + cơ, chống cháy hiệu quả.</p>`,
  },
  {
    id: 6,
    name: "Két Sắt Solid SD-03",
    slug: "ket-sat-solid-sd-03",
    image: "/images/solid3.jpg",
    images: ["/images/solid3.jpg"],
    size: "750 x 500 x 600 mm",
    material: "Thép đặc chống cháy, bảo mật cao",
    category: "Solid",
    seoContent: "Két Sắt Solid SD-03",
    seoKeyword: "Két Sắt Solid SD-03",
    seoDescription: "Két sắt Solid SD-03 bảo mật cao, an toàn cho văn phòng.",
    detail: `<p>Két sắt Solid SD-03 dung tích lớn, bảo mật cao, chống cháy 2 giờ.</p>`,
  },

  // Kumkos
  {
    id: 7,
    name: "Két Sắt Kumkos KKS-76",
    slug: "ket-sat-kumkos-kks-76",
    image: "/images/kks76.jpg",
    images: ["/images/kks76.jpg", "/images/kks76-2.jpg", "/images/kks76-3.jpg"],
    size: "650 x 480 x 500 mm",
    material: "Thép cao cấp sơn tĩnh điện, chống cháy 2 giờ",
    category: "Kumkos",
    seoContent: "Két Sắt Chống Cháy Hàn Quốc 2 giờ Kumkos KKS-76",
    seoKeyword: "Két Sắt Chống Cháy Hàn Quốc 2 giờ Kumkos KKS-76",
    seoDescription:
      "Két sắt Kumkos KKS-76 cao cấp, chống cháy 2 giờ, công nghệ Hàn Quốc, khóa an toàn – lựa chọn lý tưởng cho văn phòng & gia đình",
    detail: `<p>Két sắt Kumkos KKS-76 nhập khẩu Hàn Quốc, chống cháy 2 giờ, sơn tĩnh điện, khóa an toàn cao cấp.</p>`,
  },
  {
    id: 8,
    name: "Két Sắt Kumkos KKS-67",
    slug: "ket-sat-kumkos-kks-67",
    image: "/images/kks67.jpg",
    images: ["/images/kks67.jpg"],
    size: "600 x 450 x 480 mm",
    material: "Thép chống cháy, khóa an toàn 2 lớp",
    category: "Kumkos",
    seoContent: "Két Sắt Kumkos KKS-67",
    seoKeyword: "Két Sắt Kumkos KKS-67",
    seoDescription:
      "Két sắt Kumkos KKS-67 dung tích lớn, chống cháy, phù hợp văn phòng & gia đình.",
    detail: `<p>Két sắt Kumkos KKS-67 chống cháy 2 lớp, an toàn, thiết kế sang trọng.</p>`,
  },
  {
    id: 9,
    name: "Két Sắt Kumkos KKS-90",
    slug: "ket-sat-kumkos-kks-90",
    image: "/images/kks90.jpg",
    images: ["/images/kks90.jpg"],
    size: "700 x 500 x 550 mm",
    material: "Thép chống cháy, bảo mật cao, khóa điện tử và cơ",
    category: "Kumkos",
    seoContent: "Két Sắt Kumkos KKS-90",
    seoKeyword: "Két Sắt Kumkos KKS-90",
    seoDescription:
      "Két sắt Kumkos KKS-90 bảo mật cao, thích hợp cho doanh nghiệp vừa và lớn.",
    detail: `<p>Két sắt Kumkos KKS-90 dung tích lớn, khóa cơ + điện tử, chống cháy 2 giờ.</p>`,
  },
];
