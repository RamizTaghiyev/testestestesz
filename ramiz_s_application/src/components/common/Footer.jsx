import React from 'react';
import EditText from '../ui/EditText';
import RatingBar from '../ui/RatingBar';

const Footer = () => {
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Email subscription submitted');
  };

  return (
    <footer className="w-full bg-global-2 text-global-11">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Email Subscription Section */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-helvetica font-bold mb-2">
              Stay Updated with Finzo
            </h3>
            <p className="text-global-8 font-helvetica">
              Get the latest financial tips and app updates
            </p>
          </div>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <EditText 
                  placeholder="Enter your email"
                  type="email"
                  className="w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-global-2 text-global-11 px-6 py-3 rounded-[26px] font-helvetica font-bold hover:bg-opacity-80 transition-all duration-200"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        {/* Rating Section */}
        <div className="text-center mb-8">
          <p className="text-global-8 font-helvetica mb-2">Rate your experience with Finzo</p>
          <div className="flex justify-center">
            <RatingBar 
              rating={4}
              size="large"
              onRatingChange={(rating) => console.log('Rating:', rating)}
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <h4 className="font-helvetica font-bold text-global-11 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Security</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-helvetica font-bold text-global-11 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-helvetica font-bold text-global-11 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-helvetica font-bold text-global-11 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Privacy</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Terms</a></li>
              <li><a href="#" className="text-global-8 hover:text-global-11 font-helvetica transition-colors duration-200">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-global-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-helvetica font-bold text-global-11">
                Finzo
              </h2>
              <p className="text-global-8 font-helvetica text-sm">
                Save smart. Achieve more.
              </p>
            </div>
            
            <div className="text-center sm:text-right">
              <p className="text-global-8 font-helvetica text-sm">
                © 2024 Finzo. All rights reserved.
              </p>
              <p className="text-global-8 font-helvetica text-sm">
                Trusted by 15+ million users worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;