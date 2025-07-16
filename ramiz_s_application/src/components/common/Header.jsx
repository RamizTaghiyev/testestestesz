import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-global-11 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-helvetica font-bold text-global-5">
              Finzo
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-global-6 hover:text-global-5 font-helvetica font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="text-global-6 hover:text-global-5 font-helvetica font-medium transition-colors duration-200">
              Testimonials
            </a>
            <a href="#download" className="text-global-6 hover:text-global-5 font-helvetica font-medium transition-colors duration-200">
              Download
            </a>
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden lg:block">
            <Button 
              variant="primary" 
              size="medium"
              onClick={() => console.log('Login clicked')}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-md text-global-6 hover:text-global-5 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-global-6 hover:text-global-5 font-helvetica font-medium transition-colors duration-200">
              Features
            </a>
            <a href="#testimonials" className="text-global-6 hover:text-global-5 font-helvetica font-medium transition-colors duration-200">
              Testimonials
            </a>
            <a href="#download" className="text-global-6 hover:text-global-5 font-helvetica font-medium transition-colors duration-200">
              Download
            </a>
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="medium"
                fullWidth
                onClick={() => console.log('Login clicked')}
              >
                Login
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;