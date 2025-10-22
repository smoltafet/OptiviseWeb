import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="py-16" style={{ backgroundColor: '#fcfcfb' }}>
        <div className="w-full">
          <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Logo Section */}
            <div className="flex items-center mb-8 md:mb-0">
              <img 
                src="/logo.png" 
                alt="Optivise" 
                className="w-16 h-16 mr-5"
              />
              <span className="text-4xl font-medium text-gray-900">Optivise</span>
            </div>

            {/* Links Section */}
            <div className="flex flex-col md:flex-row gap-12">
              {/* Product Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><Link to="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Login</Link></li>
                  <li><Link to="/schedule" className="text-gray-600 hover:text-gray-900 transition-colors">Watch Demo</Link></li>
                  <li><Link to="/schedule" className="text-gray-600 hover:text-gray-900 transition-colors">Schedule Call</Link></li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
                  <li><Link to="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</Link></li>
                  <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</Link></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  