import React from 'react';

const featuresData = [
  { id: 1, title: 'Feature 1', image: 'https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63235b_project-thumb-03.webp' },
  { id: 2, title: 'Feature 2', image: 'https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63231b_project-thumb-02.webp' },
  { id: 3, title: 'Feature 3', image: 'https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63231b_project-thumb-02.webp' },
  { id: 4, title: 'Feature 4', image: 'https://cdn.prod.website-files.com/66fedc3fd1f116089b6322d8/66fedc3fd1f116089b63231b_project-thumb-02.webp' },
];

function Features() {
  return (
    <section className="py-5">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <h2 className="text-6xl font-bold text-left mb-12 font-light">Our Features</h2>

        {/* Grid: 1 column on mobile, 2 columns on small, and 4 columns on medium/desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featuresData.map(feature => (
            <div 
              key={feature.id} 
              className="relative h-110 overflow-hidden rounded-4xl"
            >
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover" 
              />
              {/* Button overlay positioned at the bottom of the image */}
              <div className="absolute top-5 left-5 m-2 bg-white p-2 rounded-4xl">
                <button className="text-gray-800">
                  {feature.title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
