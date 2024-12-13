// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link to="/">Home</Link>
          <Link to="/cars">Cars</Link>
          <a href="/404">Contact Us</a>
          <a href="/404">Jobs</a>
          <a href="/404">Accessibility</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            {/* Facebook Icon */}
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            {/* Instagram Icon */}
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            {/* Twitter Icon */}
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            {/* LinkedIn Icon */}
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            {/* YouTube Icon */}
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Car Dealership, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
