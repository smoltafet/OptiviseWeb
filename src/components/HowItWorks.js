import React, { useState, useEffect } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    
    return () => clearTimeout(timer);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Extract",
      description: "Optivise extracts all of the necessary data from any platform your customers onboard from."
    },
    {
      number: "02", 
      title: "Validate",
      description: "Validate the extracted data for accuracy in our dashboard."
    },
    {
      number: "03",
      title: "Upload",
      description: "Directly upload the validated data to your platform."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header - Left aligned, no background */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-left mb-16">
            <div className="text-blue-600 text-sm font-medium mb-2">What we do</div>
            <h2 className="text-6xl font-light text-gray-900 mb-6 leading-tight">
              Automate your entire implementation process
            </h2>
            <p className="text-xl text-gray-600">
              Your implementation managers shouldn't be doing manual data extraction and validation.
            </p>
          </div>
        </div>

        {/* Steps Grid - Now wrapped in a div with bg-gray-50 */}
        <div className="bg-gray-50 p-8 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                isVisible ? 'animate-popIn' : 'opacity-0 scale-0'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards',
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)'
              }}
            >
              {/* Number */}
              <div className="text-6xl font-light text-blue-600 mb-6 leading-none">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(20px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
