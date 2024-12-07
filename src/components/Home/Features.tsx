import React from 'react';

const Features = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-pink-600 font-semibold mb-4">POWERFUL FEATURES</h2>
          <h3 className="text-3xl font-bold">
            Everything you need for your no-code AI chatbot.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="mb-8">
              <img src="/features/answers.png" alt="Accurate Answers" className="w-full rounded-lg" />
            </div>
            <h4 className="text-xl font-bold mb-4">Trustworthy, Accurate Answers</h4>
            <p className="text-gray-600">
              With features like "Revise answers" and "Confidence score" you can be sure your
              chatbot is giving the right answers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="mb-8">
              <img src="/features/leads.png" alt="Lead Generation" className="w-full rounded-lg" />
            </div>
            <h4 className="text-xl font-bold mb-4">Lead Generation Engine</h4>
            <p className="text-gray-600">
              Collect leads and gather your customer's data, all while providing a personalized
              experience.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="mb-8">
              <img src="/features/analytics.png" alt="Analytics" className="w-full rounded-lg" />
            </div>
            <h4 className="text-xl font-bold mb-4">Advanced Analytics</h4>
            <p className="text-gray-600">
              Get insights into how users are interacting with your chatbot and monitor
              its performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
