"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./page/Header";
import BannerSlider from "./page/BannerSlider";
import Products from "./page/Products";
import Introduce from "./page/Introduce";
import Services from "./page/Services";
import Recruitment from "./page/Recruitment";
import RegisterQuote from "./page/RegisterQuote";
import Process from "./page/Process";
import SafeSolutions from "./page/SafeSolutions";
import FeaturedNews from "./page/FeaturedNews";
import Contact from "./page/Contact";
import Footer from "./page/Footer";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    const handleLoad = () => {
      AOS.refresh();
    };
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Section trống để scroll về đầu trang */}
      <section id="home"></section>

      <Header />
      <BannerSlider />
      <Products />
      <Introduce />
      <Services />
      <Recruitment />
      <RegisterQuote />
      <Process />
      <SafeSolutions />
      <FeaturedNews />
      <Contact />
      <Footer />
    </>
  );
}
