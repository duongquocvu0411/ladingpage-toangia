"use client";

import { useEffect, useState } from "react";
import { websiteConfig } from "@/data/websiteConfig";
import { FaSearch } from "react-icons/fa";

const sections = ["home", "introduce", "products", "services", "recruitment", "news", "contact"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  
useEffect(() => {
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
        <div className="container">
          <img
            src={websiteConfig.favicon}
            alt="Logo"
            style={{ height: "80px", cursor: "pointer" }}
            onClick={() => scrollToSection("home")}
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              {sections.map((sec) => (
                <li className="nav-item" key={sec}>
                  <button
                    onClick={() => scrollToSection(sec)}
                    className={`nav-link btn btn-link ${
                      activeSection === sec ? "active border-bottom border-2 text-white" : "text-white"
                    }`}
                    style={{ textDecoration: "none" }}
                  >
                    {sec.charAt(0).toUpperCase() + sec.slice(1)}
                  </button>
                </li>
              ))}
              <li className="nav-item ms-3">
                <a href="#" className="nav-link text-white">
                  <FaSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
