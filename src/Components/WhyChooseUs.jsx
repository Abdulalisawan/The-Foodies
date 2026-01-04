import React from 'react';
import { FaShieldAlt, FaTrophy, FaLightbulb, FaClock, FaUsers, FaRocket } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Verified Reviews',
      description: 'All reviews are from real users, ensuring authenticity and trustworthiness',
      color: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'Best Deals',
      description: 'Discover exclusive deals and offers from top restaurants near you',
      color: 'bg-yellow-100 dark:bg-yellow-900',
      iconColor: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Expert Insights',
      description: 'Get detailed reviews with photos, ratings, and honest feedback',
      color: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: 'Real-Time Updates',
      description: 'Stay updated with latest reviews and restaurant information',
      color: 'bg-pink-100 dark:bg-pink-900',
      iconColor: 'text-pink-600 dark:text-pink-400',
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Community Driven',
      description: 'Join a vibrant community of food enthusiasts and share your passion',
      color: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Easy Navigation',
      description: 'Simple and intuitive interface to find exactly what you are looking for',
      color: 'bg-red-100 dark:bg-red-900',
      iconColor: 'text-red-600 dark:text-red-400',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 mx-4 md:mx-10">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose The Foodies?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Experience food reviews like never before
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
          >
            <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center ${feature.iconColor} mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
