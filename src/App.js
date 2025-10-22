import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer.jsx';
import Video from './components/Video';
import Header from './components/Header';
import ExperimentationLifecycle from './components/ExperimentationLifecycle';
import KeyBenefits from './components/KeyBenefits';
import Newsletter from './components/Newsletter';
import Login from './components/Login';
import Calendar from './components/Calendar';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Contact from './components/Contact';

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <div className="md:px-[15%] sm:px-3 gap-2">
        <Header />
        <Hero />
        <div className="border-t border-gray-200 my-16"></div>
        <ExperimentationLifecycle />
        <div className="border-t border-gray-200 my-16"></div>
        <KeyBenefits />
        <div className="border-t border-gray-200 my-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <Video />
          <WhyUs />
        </div>
        <div className="border-t border-gray-200 my-16"></div>
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/schedule" element={<Calendar />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
