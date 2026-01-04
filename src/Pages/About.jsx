import React from 'react'
import { FaLeaf, FaUsers, FaHeart, FaStar, FaCheckCircle } from 'react-icons/fa'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Foodies</h1>
          <p className="text-lg md:text-xl text-emerald-50">Discover authentic cuisine and share your culinary adventures with our community</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaLeaf className="text-emerald-600" />
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              The Foodies is dedicated to bringing food lovers together and helping them discover authentic culinary experiences. Our platform allows users to review restaurants and food items, share their experiences, and build a community of passionate food enthusiasts.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              We believe that food is more than just sustenance—it's a cultural expression, a source of joy, and a way to connect with others. By sharing honest reviews and recommendations, we empower our community to make better dining choices and explore new flavors.
            </p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center gap-3">
            <FaHeart className="text-red-500" />
            Why Choose The Foodies
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Authentic Reviews',
                description: 'Read genuine reviews from real food lovers in our community',
                icon: <FaStar className="text-yellow-500 text-2xl" />
              },
              {
                title: 'Easy to Share',
                description: 'Add your own reviews with photos and detailed descriptions',
                icon: <FaCheckCircle className="text-emerald-600 text-2xl" />
              },
              {
                title: 'Community Driven',
                description: 'Connect with other food enthusiasts and discover new favorites',
                icon: <FaUsers className="text-blue-500 text-2xl" />
              },
              {
                title: 'Organized Exploration',
                description: 'Filter by cuisine type, rating, and location to find what you want',
                icon: <FaLeaf className="text-green-500 text-2xl" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FaUsers className="text-blue-600" />
              Our Team
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
              The Foodies is built by a passionate team of developers and food enthusiasts who believe in the power of community. We're constantly working to improve the platform and add new features that enhance your experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Whether you're a professional chef, a home cook, or simply someone who loves good food, you're part of our community. We're excited to have you here and look forward to reading your reviews!
            </p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 rounded-lg p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-emerald-50 mb-6 text-lg">We'd love to hear from you. Get in touch with our team.</p>
          <a href="/contact" className="inline-block bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-colors">
            Contact Us
          </a>
        </section>
      </div>
    </div>
  )
}

export default About
