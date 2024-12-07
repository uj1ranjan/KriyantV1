import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Import your data',
      description:
        'Connect your data sources, upload files, or add a website for crawling, and Chatbase will use all of that data to train your chatbot.',
    },
    {
      number: '02',
      title: 'Customize behavior & appearance',
      description:
        "Customize the chatbot's appearance, behavior, and responses to match your brand and requirements.",
    },
    {
      number: '03',
      title: 'Embed on your website',
      description:
        'Add a simple code snippet to your website to integrate the chatbot seamlessly.',
    },
    {
      number: '04',
      title: 'Integrate with your tools',
      description:
        'Connect with your existing tools and workflows to streamline your operations.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-pink-600 font-semibold mb-4">HOW IT WORKS</h2>
          <h3 className="text-3xl font-bold">
            Add your data sources, train the AI, customize it to your liking, and add it to your website.
          </h3>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start space-x-8 py-6 border-b border-gray-200 last:border-0"
            >
              <div className="text-xl font-bold text-gray-400">{step.number}</div>
              <div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
