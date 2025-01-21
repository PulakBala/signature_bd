import React from "react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" text-white py-5" style={{background:'#2fb44e'}}>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Company Info */}
          <div className="col col-md-4">
            <img
              src="/logo.jpg"
              alt="EXPO Accessories"
              className="w-100 h-16 rounded"
              style={{ height: "180px" }}
            />
            <p>
              Established in 2023, Signature BD , supports Bangladesh's
              export-oriented garments industry and multinational companies. As
              a leading Green manufacturing factory in Bangladesh, Signature BD
              offers a diverse product range and significant production
              capacity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col col-md-2">
            <h4 className="mb-3">Quick Link</h4>
            <ul className="list-unstyled text-uppercase">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  News Events
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  Career
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none">
                  sustainability
                </a>
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
                    Corporate Office: Elephant Road, Dhaka, Bangladesh
                  </p>
                  <p className="mb-2 ">
                    <FaLocationDot className="mt-1" />
                     Factory Address : 291, Jammidar Bari , Motijheel , Dhaka, <span className="" style={{marginLeft: '16px'}}>Bangladesh</span>
                  </p>
                  <p className="d-none">
                    <FaLocationDot />
                    Factory Address: Holding#1/1, Block#B Ward#21,
                    Biprobarta,Gazipur, Bangladesh
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
              <a
                href="https://www.facebook.com/Biodegradableplasticbagbd"
                className="text-white fs-4"
              >
                <FaFacebook />
              </a>
              <a href="#" className="text-white fs-4 d-none">
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/8801737238747"
                className="text-white fs-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src="path/to/whatsapp-icon.png" alt="WhatsApp" style={{ width: '24px', height: '24px' }} /> */}
                <FaWhatsapp/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
