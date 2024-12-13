// src/components/RevealCards.js
import React from "react";
import { Link } from 'react-router-dom';

const RevealCards = () => {
  return (
    <section className="p-8 bg-white">
      <h2 className="block text-center text-6xl font-bold text-teal-600 mb-6">
        Featured
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {/* Cards will be displayed here */}
      </div>
    </section>
  );
};

const Card = () => {
  return (
    <div className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">Car Make Model</h3>
        <p className="text-sm font-light text-slate-300">Year: 2022</p>
        <p className="text-sm font-light text-slate-300">Color: Red</p>
        <p className="text-sm font-light text-slate-300">Price: $30,000</p>
      </div>
      <div className="absolute inset-0 bg-slate-200 z-10" />
      <a
        href="#"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-teal-500 transition-colors"
      >
        <div className="flex items-center">
          <Link to="/cars/1" className="text-lg">
            <span className="text-xs">MORE</span>          
          </Link>
        </div>
      </a>
    </div>
  );
};

export default RevealCards;
