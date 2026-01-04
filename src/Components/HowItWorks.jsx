import React from 'react';
import { FaCheckCircle, FaUsers, FaStar, FaFireAlt } from 'react-icons/fa';

const HowItWorks = () => {
  const stats = [
    {
      icon: <FaUsers className="w-10 h-10" />,
      value: '50K+',
      label: 'Active Users',
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      icon: <FaCheckCircle className="w-10 h-10" />,
      value: '10K+',
      label: 'Reviews Posted',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <FaStar className="w-10 h-10" />,
      value: '4.8★',
      label: 'Average Rating',
      color: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: <FaFireAlt className="w-10 h-10" />,
      value: '500+',
      label: 'Restaurants',
      color: 'text-red-600 dark:text-red-400',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Discover',
      description: 'Browse authentic food reviews from real users',
    },
    {
      number: '2',
      title: 'Read Reviews',
      description: 'Get detailed insights about restaurants and dishes',
    },
    {
      number: '3',
      title: 'Share Experience',
      description: 'Post your own reviews and help the community',
    },
    {
      number: '4',
      title: 'Save Favorites',
      description: 'Bookmark reviews you want to remember',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 mx-4 md:mx-10 bg-gradient-to-b from-emerald-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl">
      {/* Statistics Section */}
      <div className="mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          The Foodies Impact
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Join thousands of food lovers discovering and sharing authentic culinary experiences
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-12">
          Simple steps to get started with The Foodies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connection line (hidden on mobile) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-emerald-300 dark:bg-emerald-700 -ml-4"></div>
              )}

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center relative z-10">
                <div className="w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
