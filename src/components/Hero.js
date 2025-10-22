import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo requested for:', email);
    setShowSuccess(true);
    setEmail('');
    
    // Hide success message and form after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setShowDemoForm(false);
    }, 3000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes unfold {
          0% {
            opacity: 0;
            transform: scaleX(0.1) scaleY(0.9);
          }
          100% {
            opacity: 1;
            transform: scaleX(1) scaleY(1);
          }
        }
      `}</style>
      <section className="relative min-h-[80vh] flex items-center justify-center py-20">
        <div className="text-center max-w-4xl mx-auto px-6">
        {/* Badge */}
        {/* <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            Backed by DUBHACKS Next
          </div>
        </div> */}

        {/* Main Headline */}
        <div className={`transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            AI-powered experimentation to{' '}
            <span className="text-blue-600">everyone</span>
          </h1>
        </div>

        {/* Description */}
        <div className={`transform transition-all duration-1000 ease-out delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            When developers need to run experiments at scale, use Optivise to automate your manual data extraction, validation and analysis process.
          </p>
        </div>

        {/* Buttons */}
        <div className={`transform transition-all duration-1000 ease-out delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center gap-2">
              Schedule a call →
            </button>
            {!showDemoForm && !showSuccess ? (
              <button 
                onClick={() => setShowDemoForm(true)}
                className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                Watch a demo ▷
              </button>
            ) : showSuccess ? (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-6 py-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-green-800 font-medium">Demo request sent successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div 
                  className="relative flex items-center bg-white border-2 border-blue-300 rounded-xl shadow-sm w-[28rem]"
                  style={{
                    animation: 'unfold 0.5s ease-out forwards',
                    transformOrigin: 'center',
                    opacity: 0,
                    transform: 'scaleX(0.1) scaleY(0.9)'
                  }}
                >
                  {/* Envelope Icon */}
                  <div className="pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Input Field */}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for a video demo"
                    className="flex-1 px-3 py-4 border-0 bg-transparent focus:outline-none text-gray-900 placeholder-gray-500"
                    required
                    autoFocus
                  />
                  
                  {/* Button */}
                  <button
                    type="submit"
                    className="bg-blue-50 text-gray-800 font-medium px-6 py-4 rounded-lg hover:bg-blue-100 transition-colors text-sm border-0 mr-1"
                  >
                    Get Demo
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;