import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/cars" className="hover:text-white transition-colors">
            Cars
          </Link>
          <a
            href="/404"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Contact Us
          </a>
          <a
            href="/404"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Jobs
          </a>
          <a
            href="/404"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Accessibility
          </a>
        </div>

        
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <i className="fab fa-youtube"></i>
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
