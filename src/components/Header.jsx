import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    // Wait for fade animation to complete, then navigate
    setTimeout(() => {
      navigate('/login');
    }, 300);
  };

  const handleDemoClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    
    // Wait for fade animation to complete, then navigate
    setTimeout(() => {
      navigate('/schedule');
    }, 300);
  };

  return (
    <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <header className="w-full z-50 sticky top-0 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-transparent.png" alt="Optivise" className="w-8 h-8" />
          <h1 className="text-2xl font-medium text-gray-900">
            Optivise
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLoginClick}
            className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
            Login
          </button>
          <button 
            onClick={handleDemoClick}
            className="bg-gray-900 text-white hover:bg-gray-800 font-medium rounded-lg px-6 py-2 cursor-pointer transition-colors">
            Get the demo →
          </button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
