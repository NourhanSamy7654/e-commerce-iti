import "./hero.css"

function Hero() {
  return (
    <section className="hero d-flex align-items-center hero-bg-animated">
      <div className="container">
        <div className="hero-content-bg mx-auto">
          <h1 className="hero-title">
            Discover Your Style With Us
          </h1>
          <p className="hero-subtitle">
            Shop the latest trends in sportswear with premium quality and best prices.
            Upgrade your wardrobe today.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary me-3">
              Shop Now
            </button>
            <button className="btn btn-outline-dark">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="hero-bg-img" />
    </section>
  );
}

export default Hero;