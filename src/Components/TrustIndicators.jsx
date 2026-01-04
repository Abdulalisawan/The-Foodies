import React from 'react';
import { FaCheckCircle, FaLock, FaMedal, FaHandshake } from 'react-icons/fa';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <FaCheckCircle className="w-12 h-12" />,
      title: 'Verified Reviews',
      description: 'All reviews are from authenticated users',
      color: 'text-green-600 dark:text-green-400',
    },
    {
      icon: <FaLock className="w-12 h-12" />,
      title: 'Secure & Private',
      description: 'Your data is encrypted and never shared',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <FaMedal className="w-12 h-12" />,
      title: 'Quality Assured',
      description: 'Strict moderation ensures content quality',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: 'Community Trust',
      description: 'Built on transparency and honesty',
      color: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-10 mx-4 md:mx-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {indicators.map((indicator, idx) => (
          <div key={idx} className="text-center">
            <div className={`flex justify-center mb-4 ${indicator.color}`}>
              {indicator.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {indicator.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {indicator.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustIndicators;
