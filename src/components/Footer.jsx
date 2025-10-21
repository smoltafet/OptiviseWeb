const Footer = () => {
    return (
      <footer className="bg-white py-4 mt-5">
        <div className="container mx-auto space-y-8">
          {/* Bottom Section */}
          <div className="flex justify-between items-center border-t border-gray-300 pt-4 border-b border-gray-300 pb-4">
            <p>&copy; Optivise. All rights reserved.</p>
            <a href="/#" className="text-orange-500 hover:underline">
              Privacy Policy
            </a>
          </div>
  
          {/* Logo Section */}
          <div className="text-center pt-8 mb-5">
            <h1 className="text-9xl font-light text-black">
                 Optivise
            </h1>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  