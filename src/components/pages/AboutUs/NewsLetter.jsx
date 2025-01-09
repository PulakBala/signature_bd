import React from "react";
 // Don't forget to create a separate CSS file

const NewsLetter = () => {
  return (
    <div
      className="newsletter-section"
      style={{
        backgroundImage: "url('/newsletter.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px 0",
        minHeight: "500px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div 
          className="newsletter-content"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "40px",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-white mb-4 text-uppercase text-center">Newsletter</h2>
          <p className="text-white mb-4 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id necessitatibus quidem placeat voluptatibus, doloremque labore itaque in culpa dolor quaerat quod. Velit, corrupti reprehenderit minima fugit nihil sed sit sapiente in, similique mollitia, asperiores rerum! Magnam tenetur accusantium voluptates eum?</p>
          <div className="input-group mx-auto" style={{ maxWidth: "600px" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              aria-label="Email"
              aria-describedby="basic-addon2"
            />
            <button
              className="btn btn-primary"
              type="button"
              id="basic-addon2"
              style={{ borderTopLeftRadius: "0", borderBottomLeftRadius: "0" }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
