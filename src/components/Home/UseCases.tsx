import React from 'react';

const UseCases = () => {
  return (
    <div className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16">
          Here are some of the ways you can use Chatbase.
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Customer Support</h3>
            <p className="text-gray-400 mb-8">
              Experience swift query resolutions, available 24/7, with personalized
              assistance tailored to your customers' needs.
            </p>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="text-sm font-medium">Studio AI</div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  Hi! how can I help?
                </div>
                <div className="bg-purple-600 rounded-lg p-4 ml-auto max-w-[80%]">
                  Hi, I noticed you offer a premium version of the app. What extra features
                  does it include?
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Lead Generation</h3>
            <p className="text-gray-400 mb-8">
              Set your chatbot to collect leads and qualify them, all while providing
              a personalized experience to your customers.
            </p>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                <div className="text-sm font-medium">Studio AI</div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  Hi! how can I help?
                </div>
                <div className="bg-purple-600 rounded-lg p-4 ml-auto max-w-[80%]">
                  Could you explain the customization options?
                </div>
                <div className="bg-gray-700 rounded-lg p-4">
                  Please leave your email and we will get back to you shortly
                  <div className="mt-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-gray-600 rounded p-2 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
