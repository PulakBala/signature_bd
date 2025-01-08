import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <style>
        {`
            @media (min-width: 992px) {
      .large-screen-dark {
        color: #212529 !important;
      }
      
      .navbar-nav .nav-item {
        border: none !important;
      }

      .bg-light {
        background-color: #ffffff !important;
      }

      .dropdown-menu {
        background-color: #ffffff !important;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }

      .dropdown-item:hover {
        background-color: rgba(0, 0, 0, 0.1) !important;
        color: #212529 !important;
      }
    }
        `}
      </style>

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
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#" style={{ margin: 0 }}>
              <img
                src="./public/logo_b.png"
                alt="Logo"
                style={{ height: '60px', margin: 0 }}
                className=""
              />
            </a>
            <button
              className="navbar-toggler ms-auto"
              type="button"
              onClick={toggleSidebar}
              aria-controls="navbarNav"
              aria-expanded={isSidebarOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Mobile Sidebar */}
            <div
              className={`offcanvas offcanvas-start ${isSidebarOpen ? 'show' : ''}`}
              tabIndex="-1"
              id="navbarNav"
              style={{
                fontSize: '1rem',
                fontWeight: '500',
                width: '250px',
                backgroundColor: '#212529',
                color: 'white',
                opacity: '0.80'
              }}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title text-white">Menu</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setIsSidebarOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ms-auto text-uppercase">
                  <li className="nav-item me-4 border-bottom border-secondary">
                    <Link to="/" className="nav-link text-white large-screen-dark">
                      About Us
                    </Link>
                  </li>
                  {/* Dropdown for Products / Solutions */}
                  <li
                    className="nav-item dropdown me-4 border-bottom border-secondary"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    id="productSolutionsDropdown"
                  >
                    <a
                      href="#"
                      className="nav-link d-flex align-items-center text-white large-screen-dark"
                    >
                      Products / Solutions
                      <FaChevronDown className="ms-1" size={12} />
                    </a>
                    {isDropdownOpen && (
                      <ul className="dropdown-menu show" style={{ background: 'none' }}>
                        <li className="border-bottom border-secondary">
                          <Link to="/bio-degradable" className="dropdown-item text-white large-screen-dark">
                            BIO DEGRADEABLE
                          </Link>
                        </li>
                        <li className="border-bottom border-secondary">
                          <Link to="/offset-printing" className="dropdown-item text-white large-screen-dark">
                            OFFSET PRINTING
                          </Link>
                        </li>
                        <li className="border-bottom border-secondary">
                          <Link to="/advise" className="dropdown-item text-white large-screen-dark">
                            <span className="d-none d-lg-inline">AUTO LABEL (</span>
                            SELF ADHESIVE
                            <span className="d-none d-lg-inline">) PRINTING</span>
                          </Link>
                        </li>
                        <li className="border-bottom border-secondary">
                          <Link to="/corggoted-cartton" className="dropdown-item text-white large-screen-dark">
                            CORROGATED CARTON
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="nav-item me-4 border-bottom border-secondary">
                    <Link to="/sustainability" className="nav-link text-white large-screen-dark">
                      Sustainability
                    </Link>
                  </li>
                  <li className="nav-item me-4 border-bottom border-secondary">
                    <Link to="/news-events" className="nav-link text-white large-screen-dark">
                      News & Events
                    </Link>
                  </li>
                  <li className="nav-item me-4 border-bottom border-secondary">
                    <Link to="/careers" className="nav-link text-white large-screen-dark">
                      Career
                    </Link>
                  </li>
                  <li className="nav-item me-4 border-bottom border-secondary large-screen-dark">
                    <Link to="/contact" className="nav-link text-white large-screen-dark">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </nav>
        </div>
      </header>

      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="offcanvas-backdrop show"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
