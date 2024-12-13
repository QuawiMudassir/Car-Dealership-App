import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const RevealCards = () => {
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/cars/featured/premium");
        const data = await response.json();
        if (Array.isArray(data)) {
          setFeaturedCars(data);
        }
      } catch (error) {
        console.error("Error fetching featured cars:", error);
      }
    };

    fetchFeaturedCars();
  }, []);

  return (
    <section className="p-8 bg-white">
      <h2 className="block text-center text-6xl font-bold text-teal-600 mb-6">
        Featured
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4">
        {featuredCars.length > 0 ? (
          featuredCars.map((car) => (
            <Card
              key={car._id}
              car={car}
            />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500 text-lg">
            No featured cars available.
          </p>
        )}
      </div>
    </section>
  );
};

const Card = ({ car }) => {
  return (
    <motion.div whileHover="hover" className="w-full h-[300px] relative">
      <div className="h-1/2 p-6 flex flex-col justify-center bg-black">
        <h3 className="text-xl mb-2 font-semibold text-white">{car.make} {car.model}</h3>
        <p className="text-sm font-light text-slate-300">Year: {car.year}</p>
        <p className="text-sm font-light text-slate-300">Color: {car.color}</p>
        <p className="text-sm font-light text-slate-300">Price: ${car.price}</p>
      </div>
      <motion.div
        initial={{
          top: "0%",
          right: "0%",
        }}
        variants={{
          hover: {
            top: "50%",
            right: "50%",
          },
        }}
        className="absolute inset-0 bg-slate-200 z-10"
        style={{
          backgroundImage: `url(${car.images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <a
        href="#"
        rel="nofollow"
        className="w-1/2 h-1/2 absolute bottom-0 right-0 z-0 grid place-content-center bg-white text-black hover:text-teal-500 transition-colors"
      >
        <div className="flex items-center">
        <Link to={`/cars/${car._id}`} className="text-lg">
          <span className="text-xs">MORE</span>          
            <FiArrowUpRight />
          </Link>
        </div>
      </a>
    </motion.div>
  );
};


export default RevealCards;
