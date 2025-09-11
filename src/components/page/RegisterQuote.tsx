"use client";

export default function RegisterQuote() {
  return (
    <section className="py-5 text-center bg-primary text-light" data-aos="zoom-in">
      <div className="container">
        <h2 className="fw-bold">Đăng ký nhận báo giá</h2>
        <form className="row justify-content-center mt-3">
          <div className="col-md-6">
            <input type="email" className="form-control mb-3" placeholder="Nhập email của bạn" />
            <button className="btn btn-dark w-100">Gửi yêu cầu</button>
          </div>
        </form>
      </div>
    </section>
  );
}
