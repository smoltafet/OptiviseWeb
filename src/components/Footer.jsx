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
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Login</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Watch Demo</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Schedule Call</a></li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a></li>
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
  