import React from 'react';

const Header = () => {
  return (
    <header className="w-full z-50 sticky top-0 px-5 bg-transparent bg-gradient-to-r to-indigo-400 from-purple-500 border-b border-gray-300 rounded-4xl">
      <div className="container mx-auto px-4 py-4 flex justify-between">
        <h1 className="text-7xl font-light text-white flex items-center gap-2">
        <img src="/optivise-logo.png" alt="Optivise" className="w-15 h-15 rounded-full" />
            Optivise
          </h1>
        <div className="flex items-center gap-4">
          <a
          href="/optivise"
          className="text-white bg-black hover:bg-gray-800 font-light rounded-full px-6 py-3 cursor-pointer">
            Get the demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
