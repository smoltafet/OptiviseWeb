import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showError, setShowError] = useState(false);
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

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email login:', { email, password });
    
    // Always show error message for email/password login
    setShowError(true);
    
    // Hide error after 5 seconds
    setTimeout(() => {
      setShowError(false);
    }, 5000);
  };

  // Google Sign-In is handled by the GoogleLogin component

  // Google Sign-In callback function
  const handleGoogleSignIn = (response) => {
    console.log('Google Sign-In successful!');
    console.log('Credential:', response.credential);
    
    // Decode the JWT token to get user info
    try {
      const payload = JSON.parse(atob(response.credential.split('.')[1]));
      console.log('User ID:', payload.sub);
      console.log('Name:', payload.name);
      console.log('Email:', payload.email);
      console.log('Picture:', payload.picture);
      
      // Redirect to Optivise.us after successful authentication
      window.location.href = 'https://optivise.us';
    } catch (error) {
      console.error('Error decoding Google token:', error);
    }
  };

  // Initialize Google Sign-In button
  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: '859607125627-3ejhtjo5mc7gcrvhrr833g2aq5mttq3p.apps.googleusercontent.com',
          callback: handleGoogleSignIn
        });
        
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button'),
          {
            theme: 'outline',
            size: 'large',
            width: '100%',
            text: 'signin_with',
            shape: 'rectangular'
          }
        );
      } else {
        // Retry if Google Identity Services is not loaded yet
        setTimeout(initializeGoogleSignIn, 100);
      }
    };
    
    initializeGoogleSignIn();
  }, []);

  const handleBackClick = () => {
    setIsTransitioning(true);
    
    // Wait for fade animation to complete, then navigate
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
        <div className={`min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100'}`} style={{backgroundColor: '#fcfcfb'}}>
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
      
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className={`transform transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="flex justify-start">
            <img src="/logo.png" alt="Optivise" className="w-20 h-20" />
          </div>
        </div>

        {/* Title */}
        <div className={`transform transition-all duration-1000 ease-out delay-200 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900">
              Sign in to Optivise
            </h2>
            <p className="mt-2 text-gray-600">
              Schedule a demo to get access to Optivise.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className={`transform transition-all duration-1000 ease-out delay-400 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="space-y-6">
            {/* Error Message */}
            {showError && (
              <div className="text-red-600 text-sm text-center">
                Wrong email and password
              </div>
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                required
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className={`transform transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <div className="space-y-4">
            {/* Email Sign In Button */}
            <button
              onClick={handleEmailSubmit}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Sign In with Email
            </button>

            {/* Separator Line */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
            </div>

            {/* Google Sign In Button */}
            <div id="google-signin-button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
