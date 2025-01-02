// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <>
      {/* Main Header */}
      <header
        className="bg-light shadow-sm d-flex align-items-center"
        style={{
          fontSize: '1.15rem',
          fontWeight: '500',
          borderBottom: '1px solid #ccc',
          height: '60px',
        }}
      >
        <div className="container ">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#" style={{ margin: 0 }}>
              <img
                src="./public/logo.jpg"
                alt="Logo"
                style={{ height: '60px', margin: 0 }}
                className=""
              />
            </a>
            <button
              className="navbar-toggler ms-auto"
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
              <ul className="navbar-nav ms-auto text-uppercase">
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">About Us</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Products</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Solutions</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Sustainability</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">News & Events</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Career</a>
                </li>
                <li className="nav-item me-4">
                  <a className="nav-link" href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Sub Header with Content */}
      <section className="bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">Bringing Dreams Together for a Brighter Future</h1>
            </div>
            <div className="col-lg-6">
              <p className="text-muted">
                The journey began in 2005 with a shared vision to create a lasting legacy. Today, Expo Group has grown into one of the largest conglomerates in the garments, technology, and manufacturing sectors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
