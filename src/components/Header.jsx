import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              style={{width: '250px'}}
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Menu</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setIsSidebarOpen(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav ms-auto text-uppercase">
                  <li className="nav-item me-4">
                    <Link to="/" className="nav-link" style={{ color: '#eb3d66' }}>
                      About Us
                    </Link>
                  </li>
                  {/* Dropdown for Products / Solutions */}
                  <li
                    className="nav-item dropdown me-4"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    id="productSolutionsDropdown"
                  >
                    <a
                      href="#"
                      className="nav-link"
                      style={{ color: '#eb3d66' }}
                    >
                      Products / Solutions
                    </a>
                    {isDropdownOpen && (
                      <ul className="dropdown-menu show">
                        <li>
                          <Link to="/bio-degradable" className="dropdown-item">
                            BIO DEGRADEABLE
                          </Link>
                        </li>
                        <li>
                          <Link to="/offset-printing" className="dropdown-item">
                            OFFSET PRINTING
                          </Link>
                        </li>
                        <li>
                          <Link to="/advise" className="dropdown-item">
                           AUTO LABEL (SELF ADHESIVE) PRINTING
                          </Link>
                        </li>
                        <li>
                          <Link to="/corggoted-cartton" className="dropdown-item">
                            CORROGATED CARTON
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="nav-item me-4">
                    <Link to="/sustainability" className="nav-link" style={{ color: '#eb3d66' }}>
                      Sustainability
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link to="/news-events" className="nav-link" style={{ color: '#eb3d66' }}>
                      News & Events
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link to="/careers" className="nav-link" style={{ color: '#eb3d66' }}>
                      Career
                    </Link>
                  </li>
                  <li className="nav-item me-4">
                    <Link to="/contact" className="nav-link" style={{ color: '#eb3d66' }}>
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
