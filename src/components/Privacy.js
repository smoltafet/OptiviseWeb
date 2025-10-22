import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Trigger slide-in animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    setIsTransitioning(true);
    
    // Wait for fade animation to complete, then navigate
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <div className={`min-h-screen flex flex-col py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100'}`} style={{backgroundColor: '#fcfcfb'}}>
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className={`absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </button>
      
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {/* Header */}
        <div className={`transform transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Optivise Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: October 21, 2025
            </p>
          </div>
        </div>

        {/* Content */}
        <div className={`transform transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 space-y-8">
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                Your privacy is important to us. This Privacy Policy explains how Optivise ("we," "our," or "us") collects, uses, and protects your personal information when you use our website, platform, and services (collectively, the "Services").
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By accessing or using Optivise, you agree to the practices described below.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect the following types of information to provide and improve our Services:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Contact details such as name, email address, and organization (if applicable).</li>
                <li>Information submitted through forms, demo requests, or account registration.</li>
                <li>Preferences and communication settings.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you use Optivise, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Browser type, device information, and IP address.</li>
                <li>Usage metrics, including pages visited, clicks, and session duration.</li>
                <li>Analytics data gathered through tools like Statsig, Google Analytics, or similar services.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c. Third-Party Data</h3>
              <p className="text-gray-700 leading-relaxed">
                If you integrate Optivise with third-party platforms (e.g., Statsig, Google Analytics, Mixpanel), we may access limited data from those tools necessary to perform analytics or run experiments.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your data to:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Operate, maintain, and improve our Services.</li>
                <li>Analyze usage trends and measure experiment performance.</li>
                <li>Personalize your experience and deliver relevant insights.</li>
                <li>Communicate updates, service announcements, and technical notices.</li>
                <li>Ensure security and prevent fraud or misuse.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Track session activity and user interactions.</li>
                <li>Improve site performance and personalization.</li>
                <li>Collect aggregated usage data for analytics.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can disable cookies through your browser settings, but some features may not function properly without them.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell or rent your data.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share limited information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Service providers who help operate or analyze our platform.</li>
                <li>Analytics and monitoring tools (e.g., Statsig) that process anonymized data.</li>
                <li>Legal authorities, only when required by law or to protect our rights.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement industry-standard measures to protect your information against unauthorized access, alteration, or destruction. However, no system is completely secure, and we cannot guarantee absolute security of your data.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have rights to:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Access, correct, or delete your personal information.</li>
                <li>Object to or restrict certain types of processing.</li>
                <li>Request a copy of your data in a portable format.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@optivise.ai
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your information only as long as necessary to provide our Services, comply with legal obligations, and resolve disputes. When no longer needed, data is securely deleted or anonymized.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Optivise is not directed toward individuals under 16 years of age. We do not knowingly collect personal data from minors. If you believe a child has provided us information, please contact us for immediate removal.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy occasionally. Updates will be reflected by the "Last Updated" date above. Continued use of Optivise after updates constitutes acceptance of the revised policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions or privacy-related requests:
              </p>
              <p className="text-gray-700 leading-relaxed">
                📧 moltafet.sidiq1@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
