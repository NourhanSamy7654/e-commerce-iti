function About() {
  return (
    <div className="container py-5">

      {/* HERO SECTION */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">About Us</h1>
        <p className="text-muted col-md-8 mx-auto">
          We are committed to delivering high-quality products with modern design
          and a seamless shopping experience that customers can trust.
        </p>
      </div>

      {/* WHO WE ARE SECTION */}
      <div className="row align-items-center g-5 mb-5">

        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Who We Are</h2>
          <p className="text-muted">
            We are an e-commerce platform focused on providing premium-quality products
            at affordable prices. Our goal is to make online shopping simple, fast,
            and enjoyable for everyone.
          </p>

          <h2 className="fw-bold mt-4 mb-3">Our Mission</h2>
          <p className="text-muted">
            We aim to continuously innovate and deliver excellent customer service
            while ensuring a smooth and reliable shopping experience.
          </p>
        </div>

        <div className="col-md-6">
          <div className="overflow-hidden rounded shadow">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Our Team"
              className="img-fluid"
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="row text-center g-4">

        <div className="col-md-4">
          <div className="p-4 border rounded-4 shadow-sm h-100">
            <h2 className="fw-bold text-primary">10K+</h2>
            <p className="text-muted mb-0">Happy Customers</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-4 shadow-sm h-100">
            <h2 className="fw-bold text-primary">500+</h2>
            <p className="text-muted mb-0">Available Products</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-4 shadow-sm h-100">
            <h2 className="fw-bold text-primary">99%</h2>
            <p className="text-muted mb-0">Customer Satisfaction</p>
          </div>
        </div>

      </div>

      {/* CTA SECTION */}
      <div className="text-center mt-5">
        <h4 className="fw-bold">Want to explore our products?</h4>
        <p className="text-muted">
          Discover a wide range of items designed to fit your lifestyle.
        </p>
        <button className="btn btn-primary px-4 mt-2">
          Start Shopping
        </button>
      </div>

    </div>
  );
}

export default About;