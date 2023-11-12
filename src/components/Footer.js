// components/Footer.js
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4">
          <a href="#" className="text-2xl text-superlight hover:text-active transition-colors duration-200">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl text-superlight hover:text-active transition-colors duration-200">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl text-superlight hover:text-active transition-colors duration-200">
            <FaInstagram />
          </a>
        </div>
        <p className="text-superlight mt-4 ">© {new Date().getFullYear()} Coinexo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
