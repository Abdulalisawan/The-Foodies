import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I create a review?',
      answer: 'Sign up or log in to your account, navigate to the Dashboard, and click "Add Review". Fill in the details about the restaurant and dish, add photos, and share your experience with the community.',
    },
    {
      question: 'Can I edit my reviews after posting?',
      answer: 'Yes! You can edit any of your reviews from your Dashboard. Go to "My Reviews" and click the edit button. Your changes will be updated immediately.',
    },
    {
      question: 'How are the best deals determined?',
      answer: 'Our deals section features special offers from restaurants that offer great value for money. These are verified and regularly updated to ensure accuracy.',
    },
    {
      question: 'Is my personal information safe?',
      answer: 'Absolutely! We use industry-standard security measures including Firebase Authentication. Your personal data is encrypted and never shared with third parties.',
    },
    {
      question: 'Can I save my favorite reviews?',
      answer: 'Yes! Click the heart icon on any review card to add it to your favorites. You can view all your saved reviews in your Dashboard under "Favorite Reviews".',
    },
    {
      question: 'What if I see inappropriate content?',
      answer: 'We take community standards seriously. If you find inappropriate reviews, please use the report button to notify our moderation team. We review all reports promptly.',
    },
    {
      question: 'Do you have a mobile app?',
      answer: 'Our website is fully responsive and works great on mobile devices. A dedicated mobile app is in development. Stay tuned!',
    },
    {
      question: 'How often is new content added?',
      answer: 'New reviews are added daily by our active community. The Alldeals section is updated regularly with the latest restaurant offers.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 mx-4 md:mx-10">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Find answers to common questions about The Foodies
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 ml-4 transition-transform duration-300 ${
                  activeIndex === idx ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            {activeIndex === idx && (
              <div className="px-6 py-4 md:px-8 md:py-5 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Still have questions?{' '}
          <a
            href="mailto:support@thefoodies.com"
            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
