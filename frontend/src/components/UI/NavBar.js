// src/components/FlipNavWrapper.js
import React from "react";
import { Link } from "react-router-dom";

const FlipNavWrapper = () => {
  return (
    <div>
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  return (
    <nav className="bg-white p-4 border-b-[1px] border-gray-200 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-md">
      <NavLeft />
      <NavRight />
    </nav>
  );
};

const Logo = () => {
  return (
    <Link to="/" className="inline-block">
      <img
        src="https://img.freepik.com/free-vector/hand-drawn-car-illustration_23-2151187539.jpg?t=st=1733776334~exp=1733779934~hmac=af278d839fb8388d141bde607e1187d797d4d04ae963f3f05f96783cd674435a&w=996"
        alt="Hand-drawn car illustration"
        className="w-20 h-auto rounded"
      />
    </Link>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Logo />
      <NavLink text="Home" to="/" />
      <NavLink text="All Cars" to="/cars" />
      <NavLink text="Contact Us" to="/404" />
    </div>
  );
};

const NavLink = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <span className="flex items-center h-[30px] text-gray-500">{text}</span>
    </Link>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="/login">
        <button className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-medium rounded-md whitespace-nowrap">
          Sign in
        </button>
      </Link>
      <button className="px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-medium rounded-md whitespace-nowrap">
        Sign up
      </button>
    </div>
  );
};

export default FlipNavWrapper;
