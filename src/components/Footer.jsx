import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Company Info */}
          <div className="col col-md-4">
            <img src="/public/logo.jpg" alt="EXPO Accessories" className="w-100 h-50" />
            <p>
              Established in 2005, EXPO Accessories Limited, a part of EXPO Group,
              supports Bangladesh's export-oriented garments industry. As a leading
              Green Accessories manufacturing factory in Bangladesh, EXPO
              Accessories Limited offers a diverse product range and significant
              production capacity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col col-md-2">
            <h4 className="mb-3">Quick Link</h4>
            <ul className="list-unstyled text-uppercase">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">News Events</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">Career</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">contact us</a>
              </li>
               <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">sustainability</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col col-md-4">
            <h4 className="mb-3">Contact Us</h4>
            <ul className="list-unstyled">
              <li className="mb-2 d-flex">
               
                <div>
                  <p className="mb-2 ">
                  <FaLocationDot className="mt-1" />
                    Corporate Office:South Central Road,
Elephant Road, Dhaka,
Bangladesh
</p>
                  <p className="d-none">
                    <FaLocationDot />
                    Factory Address: Holding#1/1, Block#B Ward#21, Biprobarta,Gazipur, Bangladesh
                  </p>
                </div>
              </li>
              <li className="mb-2 d-flex align-items-center gap-2">
                <BsTelephone />
                <span>+880 1737 238747</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <MdEmail />
                <span>signaturebd23@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col col-md-2">
            <h4 className="mb-3">Get In Touch</h4>
            <div className="d-flex gap-3">
              <a href="https://www.facebook.com/Biodegradableplasticbagbd" className="text-white fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;