import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              <img src="/logo.svg" alt="Chatbase" className="h-8" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/affiliates" className="text-gray-600 hover:text-gray-900">
              Affiliates
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/signin" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Link>
            <Link
              to="/try-for-free"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
            >
              Try for Free →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
