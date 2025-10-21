import React from 'react';

const Pricing = () => {
  const tiers = [
    {
      title: 'Basic',
      price: '$0',
      duration: 'month',
      features: [
        'Feature One',
        'Feature Two',
        'Feature Three'
      ],
      buttonText: 'Get Started'
    },
    {
      title: 'Pro',
      price: '$29',
      duration: 'month',
      features: [
        'Feature One',
        'Feature Two',
        'Feature Three',
        'Premium Support'
      ],
      buttonText: 'Start Free Trial',
      recommended: true
    },
    {
      title: 'Enterprise',
      price: '$99',
      duration: 'month',
      features: [
        'All Pro features',
        'Custom Integrations',
        'Dedicated Manager'
      ],
      buttonText: 'Contact Us'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">Pricing Plans</h2>
        <p className="mt-4 text-lg text-gray-600">
          Choose the plan that suits your needs and upgrade your experience today.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-3xl shadow-lg overflow-hidden border-2 transition-transform duration-300 hover:scale-105 ${tier.recommended ? 'border-orange-500' : 'border-transparent'}`}
          >
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-sm font-semibold uppercase tracking-widest">
                Recommended
              </div>
            )}
            <div className="p-8 bg-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                <span className="text-xl text-gray-600 ml-1">/ {tier.duration}</span>
              </div>
              <ul className="mb-6 space-y-3 text-left">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors duration-300">
                {tier.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 