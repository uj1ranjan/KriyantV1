import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-black text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-8">
            Custom ChatGPT for your business
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Build a custom GPT, embed it on your website and let it handle
            customer support, lead generation, engage with your users, and more.
          </p>
          <Link
            to="/build-chatbot"
            className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Build your Chatbot →
          </Link>
          <p className="text-gray-400 mt-4">No credit card required</p>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">Trusted by 5000+ businesses</p>
          <div className="flex justify-center items-center space-x-12 opacity-70">
            <img src="/logos/opal.svg" alt="Opal" className="h-8" />
            <img src="/logos/siemens.svg" alt="Siemens" className="h-8" />
            <img src="/logos/postman.svg" alt="Postman" className="h-8" />
            <img src="/logos/alpian.svg" alt="Alpian" className="h-8" />
            <img src="/logos/albaraka.svg" alt="AlBaraka" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
