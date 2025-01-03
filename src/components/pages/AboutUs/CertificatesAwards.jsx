



import React, { useEffect, useState } from "react";
import "./CertificatesAwards.css";

const CertificatesAwards = () => {
  const [currentImages, setCurrentImages] = useState([
    "/public/certificate1.jpg",
    "/public/certificate2.jpg",
    "/public/certificate3.jpg",
  ]);
  const [newImageClass, setNewImageClass] = useState(false);

  const allImages = [
    "/public/1.jpg",
		"/public/3.jpg",
		"/public/4.jpg",
		"/public/6.jpg",
		"/public/7.jpg",
		"/public/8.jpg",
		"/public/1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNewImageClass(true);

      setTimeout(() => {
        setCurrentImages((prevImages) => {
          const nextImage = allImages[(allImages.indexOf(prevImages[2]) + 1) % allImages.length];
          return [...prevImages.slice(1), nextImage];
        });
        setNewImageClass(false);
      }, 1000); // Match animation duration
    }, 3000); // Slider delay

    return () => clearInterval(interval);
  }, [allImages]);

  return (
    <div className="certificates-awards-section py-5">
      <div className="container section-header pb-5">
        <h2 className="text-uppercase">Certificates & Awards</h2>
        <div className="slider-buttons">
          <button className="slider-btn">Prev</button>
          <button className="slider-btn">Next</button>
        </div>
      </div>
      <div className="slider">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Certificate ${index + 1}`}
            className={`slider-image ${index === 2 && newImageClass ? "new" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesAwards;

