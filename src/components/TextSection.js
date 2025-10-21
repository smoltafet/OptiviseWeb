import React from 'react';

const TextSection = () => {
  const cards = [
    {
      title: "AI-Driven Optimization",
      content: "Leveraging AI to eliminate inefficiencies in product development and empower teams to focus on high-impact work.",
      height: "h-[340px]"
    },
    {
      title: "Time Efficiency",
      content: "We've seen firsthand how small UI changes consume disproportionate time and resources.",
      height: "h-[250px]"
    },
    {
      title: "Automation",
      content: "Automation and AI-driven decision-making can revolutionize how UI/UX optimization is done.",
      height: "h-[280px]"
    },
    {
      title: "Accessibility",
      content: "Making data-driven UI optimization faster and accessible to all companies.",
      height: "h-[280px]"
    }
  ];

  // Split the cards into two arrays for the two columns.
  const half = Math.ceil(cards.length / 2);
  const leftCards = cards.slice(0, half);
  const rightCards = cards.slice(half);

  return (
    <section className="py-2">
    
      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-2 cursor-pointer">
        {/* Left Column */}
        <div className="flex flex-col gap-2 w-full md:w-1/2 hover:cursor-pointer">
          {leftCards.map((card, index) => (
            <div
              key={index}
              className={`${card.height} p-8 border-2 border-gray-200 rounded-3xl hover:border-orange-500 transition-all duration-300 flex flex-col justify-between hover:text-orange-500 `}
            >
              <div>
                <h3 className="text-6xl font-light mb-4 text-left">{card.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg text-left">
                  {card.content}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:bg-black hover:text-white hover:cursor-pointer">
                →
              </div>
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          {rightCards.map((card, index) => (
            <div
              key={index}
              className={`${card.height} p-8 border-2 border-gray-200 rounded-3xl hover:border-orange-500 transition-all duration-300 flex flex-col justify-between hover:text-orange-500`}
            >
              <div>
                <h3 className="text-6xl font-light mb-4 text-left">{card.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-lg text-left">
                  {card.content}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:bg-black hover:text-white">
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TextSection;