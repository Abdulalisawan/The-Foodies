import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Food Blogger',
      image: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'The Foodies has completely changed how I discover restaurants. The reviews are incredibly detailed and helpful!',
    },
    {
      name: 'Marcus Johnson',
      role: 'Casual Diner',
      image: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      text: 'I love how easy it is to find authentic food reviews. Really helps me make informed decisions about where to eat.',
    },
    {
      name: 'Priya Sharma',
      role: 'Travel Enthusiast',
      image: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      text: 'Perfect app for finding local cuisines when traveling. The community is so active and supportive!',
    },
    {
      name: 'James Wilson',
      role: 'Restaurant Owner',
      image: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      text: 'Great platform to get genuine feedback from customers. Helps us improve our services continuously.',
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 mx-4 md:mx-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          What Users Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Don't just take our word for it, hear from our community
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-200"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
