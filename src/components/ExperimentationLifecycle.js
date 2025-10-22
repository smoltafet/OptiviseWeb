import React, { useState, useEffect, useRef } from 'react';

const ExperimentationLifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      title: "Automate Testing",
      description: "Optivise continuously identifies opportunities for improvement across your website, intelligently suggesting changes that drive engagement and growth."
    },
    {
      title: "Real Data Insights",
      description: "We integrate directly with platforms like Statsig to collect and interpret real user behavior, turning interactions into clear insights and measurable outcomes."
    },
    {
      title: "Close the Gap",
      description: "Our mission is to give every company — from startups to enterprises — the ability to test, learn, and evolve as fast as the industry leaders."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-left mb-16">
            <div className="text-blue-600 text-sm font-medium mb-2">What We Do</div>
            <h2 className="text-6xl font-light text-gray-900 mb-6 leading-tight">
              Optivise empowers teams to experiment like the world's biggest companies — without the complexity.
            </h2>
          </div>
        </div>

        {/* Three Column Layout with Dashed Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative px-8 py-12 transition-all duration-1000 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Dashed Line Separator (except for first column) */}
              {index > 0 && (
                <div className="absolute left-0 top-0 bottom-0 w-px border-l-2 border-dashed border-gray-300"></div>
              )}
              
              {/* Title */}
              <h3 className="text-2xl font-medium text-gray-900 mb-4">
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

    </section>
  );
};

export default ExperimentationLifecycle;
