import React from 'react';
import Hero from './components/Hero';
import TextSection from './components/TextSection';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer.jsx';
import List from './components/List.tsx';
import Video from './components/Video';
import Role from './components/Role';
import Header from './components/Header'; 
function App() {
  return (
    <div className="overflow-x-hidden">
 
      <div className="md:px-[15%] sm:px-3 gap-2">
        <Header />
        <Hero />
        <Role />
        <img src="/quick.png" alt="Analytics" className="w-full rounded-4xl mt-1" />
        <TextSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Video />
          <WhyUs />
        </div>
        <List />
        <Footer />
      </div>
    </div>
  );
}

export default App;
