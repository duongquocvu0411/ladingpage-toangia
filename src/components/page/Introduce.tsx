"use client";

import { introduceContent } from "@/data/introduce";

export default function Introduce() {
  const { title, description } = introduceContent;

  return (
    <section id="introduce" className="bg-light py-5" data-aos="fade-up">
      <div className="container text-dark">
        <h2 className="text-center mb-4 fw-bold">{title}</h2>
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </section>
  );
}
