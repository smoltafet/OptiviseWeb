import React, { useState, useEffect, useRef } from 'react';

const KeyBenefits = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => new Set([...prev, index]));
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const benefits = [
    {
      title: "Generate",
      description: "Optivise automatically creates new design or feature variants for targeted areas of your site, enabling precise experimentation.",
      image: "/generate_photo1.png"
    },
    {
      title: "Execute",
      description: "Those variants are deployed live to real users based on admin-defined traffic thresholds, ensuring balanced and unbiased testing.",
      image: "/execite_photo2.png"
    },
    {
      title: "Analyze",
      description: "As data flows in, Optivise aggregates user interactions like clicks and conversions, revealing which experiences truly perform best.",
      image: "/analyze_photo3.png"
    },
    {
      title: "Push",
      description: "With one approval, admins can promote winning variants directly to production — creating a site that continuously optimizes itself.",
      image: "/execture_photo4.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
          <div className="text-center mb-16">
            <div className="text-blue-600 text-sm font-medium mb-4">How It Works</div>
            <h2 className="text-6xl font-light text-gray-900 mb-6 leading-tight">
              Your website evolves through a continuous, intelligent feedback loop.
            </h2>
          </div>
        </div>

        {/* Process Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Steps */}
          <div className="space-y-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                ref={el => stepRefs.current[index] = el}
              >
                {/* Content */}
                <div
                  className={`text-center transition-all duration-1000 ease-out ${
                    visibleSteps.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 text-2xl font-light">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-light text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Separating Line (except for last item) */}
                {index < benefits.length - 1 && (
                  <div className="flex justify-center mt-16">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
