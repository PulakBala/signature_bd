// src/components/CardSection.jsx
import React from "react";

const MvissionCard = () => {
  return (
    <section className="container my-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
  <div
    className="card"
    style={{
      borderTopLeftRadius:"50px",
      minHeight: "510px",
      backgroundColor: "#dedee0",
      position: "relative", // For layering
      overflow: "hidden",
    }}
  >
    {/* Background Image Layer */}
    <div
      style={{
       
        backgroundImage: "url('../public/service-bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.3, // Adjust transparency here
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0, // Ensures it stays behind text
      }}
    ></div>

    {/* Text Content */}
    <div className="card-body" style={{ position: "relative", zIndex: 1 }}>
      <h2 className="card-title">OUR VISION</h2>
      <hr className="mt-4" />
      <p className="card-text pt-3" style={{ textAlign: "justify" }}>
      As a complete marketing solutions company, our promise to our clients
is to deliver the highest quality service at competitive prices.
Our vision is to be the undisputed industry leader and preferred
choice for printing and packaging for our clients from around the
world. 
      </p>
    </div>
  </div>
</div>


        {/* Card 2 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
  <div
    className="card"
    style={{borderTopLeftRadius:"50px",
      minHeight: "510px",
      backgroundColor: "#dedee0",
      position: "relative", // For layering
      overflow: "hidden",
    }}
  >
    {/* Background Image Layer */}
    <div
      style={{
        backgroundImage: "url('../public/service-bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.3, // Adjust transparency here
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0, // Ensures it stays behind text
      }}
    ></div>

    {/* Text Content */}
    <div className="card-body" style={{ position: "relative", zIndex: 1 }}>
      <h2 className="card-title">OUR MISSION</h2>
      <hr className="mt-4" />
      <p className="card-text pt-3" style={{ textAlign: "justify" }}>
      As a complete marketing solutions company, our promise to our clients
is to deliver the highest quality service at competitive prices.
Our mission is to adhere to an outstanding response time, a cost
effective and creative solutions for our clients with a complete
package of services.
      </p>
    </div>
  </div>
</div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
  <div
    className="card"
    style={{
      borderTopLeftRadius:"50px",
      minHeight: "510px",
      backgroundColor: "#dedee0",
      position: "relative", // For layering
      overflow: "hidden",
    }}
  >
    {/* Background Image Layer */}
    <div
      style={{
        backgroundImage: "url('../public/service-bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.3, // Adjust transparency here
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0, // Ensures it stays behind text
      }}
    ></div>

    {/* Text Content */}
    <div className="card-body" style={{ position: "relative", zIndex: 1 }}>
      <h2 className="card-title">OUR VALUES</h2>
      <hr className="mt-4" />
      <p className="card-text pt-3" style={{ textAlign: "justify" }}>
      At the core of our company lies an unwavering commitment to excellence, innovation, and client satisfaction. We take pride in delivering top-notch marketing solutions that blend quality, creativity, and affordability, ensuring our clients receive unparalleled service.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default MvissionCard;
