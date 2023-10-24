const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          your feet deserves the best and we're here to help you with our shoes.
          your feet deserves the best and we're here to help you with our shoes.
        </p>
        <div className="hero-btn">
          <button>shop now</button>
          <button className="secondary-btn">category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="../images/amazon_icon.png" alt="amazon_icon" />
            <img src="../images/flipkart_icon.png" alt="flipkart_icon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
      <img src="../images/shoes.png" alt="hero-image" />
      </div>
    </main>
  );
};

export default HeroSection;
