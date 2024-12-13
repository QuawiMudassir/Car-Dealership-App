// src/components/GridHoverHero.js
import React from "react";

export const GridHoverHero = () => {
  return (
    <div className="bg-neutral-950">
      <div className="grid h-screen w-full grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(75px,_1fr))]">
        {[...Array(0)].map((_, i) => (
          <div
            key={i}
            className="h-full w-full border-[1px] border-neutral-900"
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8">
        <h1 className="text-center text-7xl font-black uppercase text-white sm:text-8xl md:text-9xl">
          Welcome to The Car Dealership
        </h1>
        <p className="mb-6 mt-4 max-w-3xl text-center text-lg font-light text-neutral-500 md:text-xl">
          We Help you get the best car for you
        </p>
        <button className="pointer-events-auto bg-teal-400 px-4 py-2 text-xl font-bold uppercase text-neutral-950 mix-blend-difference">
          Get In Touch
        </button>
      </div>
    </div>
  );
};
