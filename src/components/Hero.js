import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[70vh] border border-gray-300 rounded-4xl overflow-hidden mt-1">
      <div className="flex h-full border-t border-gray-300">
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h2 className="text-8xl font-light mb-4 text-black">
            Experiments <br /> On scale.
          </h2>
          <button className="bg-black text-white px-8 py-5 rounded-full w-fit hover:bg-indigo-600 transition-all duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
        <img src="/quick-2.webp" alt="Hero" className="w-full max-w-[70vh] h-full object-contain " />
      </div>
    </section>
  );
};

export default Hero;