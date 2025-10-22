import React from 'react';

const Header = () => {
  return (
    <header className="w-full z-50 sticky top-0 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo-transparent.png" alt="Optivise" className="w-8 h-8" />
          <h1 className="text-2xl font-medium text-gray-900">
            Optivise
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/optivise"
            className="text-gray-700 hover:text-gray-900 font-medium">
            Login
          </a>
          <button className="bg-gray-900 text-white hover:bg-gray-800 font-medium rounded-lg px-6 py-2 cursor-pointer">
            Get the demo →
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
