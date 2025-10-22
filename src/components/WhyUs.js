import React, { useState, useEffect, useRef } from 'react';

const WhyUs = () => {
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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="text-left mb-16">
            <div className="text-blue-600 text-sm font-medium mb-2">Why Us</div>
            <h2 className="text-6xl font-light text-gray-900 mb-6 leading-tight">
              We help your team experiment faster — and smarter.
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`} style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <div className="max-w-4xl">
            <p className="text-xl text-gray-600 leading-relaxed">
              With built-in AI and seamless integrations into tools like Statsig, Optivise automates experiment creation, deployment, and analysis. You'll get actionable insights without writing a single line of code — freeing your team to focus on innovation while Optivise continuously tests, learns, and improves your user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;