export interface Product {
  id: number;
  name: string;
  slug: string;
  image: string;
  size: string;
  fill: string;
  category: string;
  seoContent: string;
  seoKeyword: string;
  seoDescription: string;
}

export const products: Product[] = [
  // Carad
  {
    id: 1,
    name: "Két Sắt Carad CR-01",
    slug: "ket-sat-carad-cr-01",
    image: "/images/ket1.png",
    size: "600 x 400 x 450 mm",
    fill: "Thép chống cháy 1 giờ, khóa cơ",
    category: "Carad",
    seoContent: "Két Sắt Carad CR-01",
    seoKeyword: "Két Sắt Carad CR-01",
    seoDescription: "Két sắt Carad CR-01 chất lượng cao, phù hợp văn phòng và gia đình.",
  },
  {
    id: 2,
    name: "Két Sắt Carad CR-02",
    slug: "ket-sat-carad-cr-02",
    image: "/images/ket3.png",
    size: "650 x 450 x 480 mm",
    fill: "Thép chống cháy 1 giờ, khóa điện tử",
    category: "Carad",
    seoContent: "Két Sắt Carad CR-02",
    seoKeyword: "Két Sắt Carad CR-02",
    seoDescription: "Két sắt Carad CR-02 dung tích lớn, chống cháy, bảo mật cao.",
  },
  {
    id: 3,
    name: "Két Sắt Carad CR-03",
    slug: "ket-sat-carad-cr-03",
    image: "/images/carad3.jpg",
    size: "700 x 500 x 500 mm",
    fill: "Thép đặc chống cháy, khóa cơ + điện tử",
    category: "Carad",
    seoContent: "Két Sắt Carad CR-03",
    seoKeyword: "Két Sắt Carad CR-03",
    seoDescription: "Két sắt Carad CR-03 bảo mật cao, thích hợp văn phòng lớn.",
  },

  // Solid
  {
    id: 4,
    name: "Két Sắt Solid SD-01",
    slug: "ket-sat-solid-sd-01",
    image: "/images/solid1.jpg",
    size: "650 x 480 x 500 mm",
    fill: "Thép đặc chống cháy 2 giờ, khóa cơ",
    category: "Solid",
    seoContent: "Két Sắt Solid SD-01",
    seoKeyword: "Két Sắt Solid SD-01",
    seoDescription: "Két sắt Solid SD-01 cao cấp, chống cháy, khóa an toàn.",
  },
  {
    id: 5,
    name: "Két Sắt Solid SD-02",
    slug: "ket-sat-solid-sd-02",
    image: "/images/solid2.jpg",
    size: "700 x 500 x 550 mm",
    fill: "Thép đặc, bảo mật cao, khóa điện tử và cơ",
    category: "Solid",
    seoContent: "Két Sắt Solid SD-02",
    seoKeyword: "Két Sắt Solid SD-02",
    seoDescription: "Két sắt Solid SD-02 dung tích lớn, thích hợp doanh nghiệp.",
  },
  {
    id: 6,
    name: "Két Sắt Solid SD-03",
    slug: "ket-sat-solid-sd-03",
    image: "/images/solid3.jpg",
    size: "750 x 500 x 600 mm",
    fill: "Thép đặc chống cháy, bảo mật cao",
    category: "Solid",
    seoContent: "Két Sắt Solid SD-03",
    seoKeyword: "Két Sắt Solid SD-03",
    seoDescription: "Két sắt Solid SD-03 bảo mật cao, an toàn cho văn phòng.",
  },

  // Kumkos
  {
    id: 7,
    name: "Két Sắt Kumkos KKS-76",
    slug: "ket-sat-kumkos-kks-76",
    image: "/images/kks76.jpg",
    size: "650 x 480 x 500 mm",
    fill: "Thép cao cấp sơn tĩnh điện, chống cháy 2 giờ",
    category: "Kumkos",
    seoContent: "Két Sắt Chống Cháy Hàn Quốc 2 giờ Kumkos KKS-76",
    seoKeyword: "Két Sắt Chống Cháy Hàn Quốc 2 giờ Kumkos KKS-76",
    seoDescription: "Két sắt Kumkos KKS-76 cao cấp, chống cháy 2 giờ, công nghệ Hàn Quốc, khóa an toàn – lựa chọn lý tưởng cho văn phòng & gia đình",
  },
  {
    id: 8,
    name: "Két Sắt Kumkos KKS-67",
    slug: "ket-sat-kumkos-kks-67",
    image: "/images/kks67.jpg",
    size: "600 x 450 x 480 mm",
    fill: "Thép chống cháy, khóa an toàn 2 lớp",
    category: "Kumkos",
    seoContent: "Két Sắt Kumkos KKS-67",
    seoKeyword: "Két Sắt Kumkos KKS-67",
    seoDescription: "Két sắt Kumkos KKS-67 dung tích lớn, chống cháy, phù hợp văn phòng & gia đình.",
  },
  {
    id: 9,
    name: "Két Sắt Kumkos KKS-90",
    slug: "ket-sat-kumkos-kks-90",
    image: "/images/kks90.jpg",
    size: "700 x 500 x 550 mm",
    fill: "Thép chống cháy, bảo mật cao, khóa điện tử và cơ",
    category: "Kumkos",
    seoContent: "Két Sắt Kumkos KKS-90",
    seoKeyword: "Két Sắt Kumkos KKS-90",
    seoDescription: "Két sắt Kumkos KKS-90 bảo mật cao, thích hợp cho doanh nghiệp vừa và lớn.",
  },
];
