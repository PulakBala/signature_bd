import React, { useEffect, useState } from "react";
import "./Factory.css";

const Factory = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/factory1.jpeg",
    "/factory3.jpeg",
    "/factory4.jpeg",
  ];

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const styles = {
    section: {
      height: "500px",
      backgroundImage:
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/factory.jpg")',
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      color: "white",
      padding: "20px 0",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "40px",
    },
    card: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      border: "none",
      marginBottom: "20px",
    },
    cardTitle: {
      color: "white",
      fontSize: "0.6rem",
      fontWeight: "bold",
    },
    description: {
      textAlign: "start",
      fontSize: "1rem",
      lineHeight: "1.5",
      marginTop: "20px",
    },
    videoFrame: {
      width: "100%",
      height: "215px",
      border: "none",
    },
  };

  return (
    <div style={styles.section}>
      {/* Desktop View */}
      <div className="container desktop-view text-center">
        <h2 style={styles.title}>OUR FACTORY</h2>
        <div className="row d-flex justify-content-center">
          {/* Office Building */}
          <div className="col-md-2">
            <div className="card" style={styles.card}>
              <img
                src="/factory1.jpeg"
                alt="Office Building"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 style={styles.cardTitle}>OFFICE BUILDING</h5>
              </div>
            </div>
          </div>
          {/* Care Home and Canteen */}
          <div className="col-md-2">
            <div className="card" style={styles.card}>
              <img
                src="/factory3.jpeg"
                alt="Care Home and Canteen"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 style={styles.cardTitle}>CARE HOME AND CANTEEN</h5>
              </div>
            </div>
          </div>
          {/* Warehouse */}
          <div className="col-md-2">
            <div className="card" style={styles.card}>
              <img
                src="/factory4.jpeg"
                alt="Warehouse"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 style={styles.cardTitle}>WAREHOUSE</h5>
              </div>
            </div>
          </div>
          {/* Video Section */}
          <div className="col-md-4">
            <div style={styles.card}>
              <iframe
                src="https://www.youtube.com/embed/example-video"
                title="Factory Video"
                allow="fullscreen"
                style={styles.videoFrame}
              ></iframe>
            </div>
          </div>
        </div>
        <p className="d-flex justify-content-center" style={styles.description}>
        We are expanding our operation in 2024 to a new green factory with over 1,00,000 square feet in size.
         Hopefully, we will get Our LEED Platinum certification in 2025 <br/>
          and it will be one of the largest Platinum Lead certified packaging companies in Bangladesh.
        </p>
      </div>

      {/* Mobile View */}
      <div className="mobile-view">
        {/* Mobile Carousel */}
				<h2 className="text-center pb-2">OUR FACTORY</h2>
        <div className="mobile-carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
              }}
            />
          ))}
        </div>

        {/* Description */}
        <p style={styles.description}>
          We are expanding our operation in 2024 to a new green factory with
          over 1,58,400 square feet in size. Hopefully, we will get Our LEED
          <br />
          Platinum certification in 2024 and it will be one of the largest
          Platinum Lead certified Accessories companies in Bangladesh.
        </p>

        {/* Video Section */}
        <div className="mobile-video">
          <iframe
            src="https://www.youtube.com/embed/example-video"
            title="Factory Video"
            allow="fullscreen"
            style={styles.videoFrame}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Factory;
