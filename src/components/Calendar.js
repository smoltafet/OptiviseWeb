import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Calendar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger slide-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    setIsTransitioning(true);
    
    // Wait for fade animation to complete, then navigate
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <div className={`min-h-screen flex flex-col py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100'}`} style={{backgroundColor: '#fcfcfb'}}>
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className={`absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>
      
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className={`transform transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Book an Appointment
            </h1>
            <p className="text-lg text-gray-600">
              Select a time that works for you to discuss Optivise
            </p>
          </div>
        </div>

        {/* Booking Popup */}
        <div className={`transform transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/AcZssZ1AseJdX6IRshNpdbjYaH_xcUak0fSGaiyW6mg=?gv=true" 
              style={{border: 0}} 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="Book an Appointment - Optivise"
            ></iframe>
          </div>
        </div>

        {/* Instructions */}
        <div className={`transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="text-center">
            <p className="text-gray-600">
              Choose your preferred time slot above. You'll receive a confirmation email with the meeting details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
