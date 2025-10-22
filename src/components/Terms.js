import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Terms = () => {
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
              Optivise Terms of Service
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
                Welcome to Optivise ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, platform, and services (collectively, the "Services"). By accessing or using Optivise, you agree to these Terms. If you do not agree, please discontinue use immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to use Optivise only for lawful purposes and in accordance with these Terms. You are responsible for:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account information.</li>
                <li>Ensuring your use of Optivise complies with applicable laws and regulations.</li>
                <li>Not interfering with or disrupting our systems, APIs, or other users.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                All content, software, and technology on Optivise — including logos, trademarks, designs, and code — are owned by or licensed to Optivise. You may not reproduce, modify, or distribute our materials without prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. User Data and Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy matters to us. By using Optivise, you agree to the collection and use of data as outlined in our Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may collect anonymized analytics and user interaction data for improving our AI-driven experimentation features. Sensitive data will never be sold or shared with third parties without consent.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. AI-Generated Insights</h2>
              <p className="text-gray-700 leading-relaxed">
                Optivise uses AI to analyze and generate recommendations for experiments. These insights are suggestions only — you are responsible for verifying and implementing any changes to your site. We are not liable for outcomes based on AI recommendations.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Third-Party Integrations</h2>
              <p className="text-gray-700 leading-relaxed">
                Optivise integrates with external platforms like Statsig, Google Analytics, and Mixpanel. By connecting these accounts, you acknowledge that their respective terms and privacy policies also apply. We are not responsible for any issues arising from third-party services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to keep Optivise available 24/7 but do not guarantee uninterrupted service. We may update, suspend, or discontinue parts of the platform for maintenance or upgrades at any time.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                Optivise and its team shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our Services — including lost profits, data, or business opportunities.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms occasionally to reflect improvements or legal changes. The latest version will always be available on this page, with an updated effective date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms, please contact us:
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

export default Terms;
