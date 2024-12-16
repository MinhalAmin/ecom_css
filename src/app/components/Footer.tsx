import Image from "next/image";
import { FaTwitter, FaFacebook } from "react-icons/fa"; // You can use these icons or others as needed
import './Footer.css';  // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Footer content */}
        <div className="footer-flex footer-flex-md">
          <div className="text-center md:text-left">
            <h1 className="text-lg font-bold">Luxurious Lavender</h1>
            <p className="text-gray-400 text-sm">
              Indulge your senses in the extraordinary.
            </p>
          </div>
          <div className="footer-link-container">
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Contact
            </a>
            <a href="#" className="footer-link">
              Privacy
            </a>
          </div>
        </div>

        <div className="footer-border"></div>

        <div className="footer-flex footer-flex-md">
          <p className="text-gray-400 text-xs text-center md:text-left">
            © 2024 Luxurious Lavender. All Rights Reserved.
          </p>
          <div className="footer-icon-container">
            <a href="#" className="footer-icon">
              <FaFacebook />
            </a>
            <a href="#" className="footer-icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
