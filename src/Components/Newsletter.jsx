import React, { useState } from 'react';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email');
      return;
    }

    setLoading(true);

    try {
      // Simulating backend call - Replace with actual API endpoint
      // For now, just show success message
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSuccess(true);
      setName('');
      setEmail('');
      toast.success('Successfully subscribed! Check your email for updates.');

      // Reset success state after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-10 mx-4 md:mx-10">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 rounded-3xl overflow-hidden shadow-lg">
        <div className="px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <div className="flex justify-center mb-4">
                <FaEnvelope className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-emerald-100 text-lg">
                Subscribe to our newsletter and get the latest food reviews and deals
              </p>
            </div>

            {success ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center">
                <FaCheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Thank You for Subscribing!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Welcome to The Foodies community. Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-3 rounded-lg border-2 border-transparent focus:border-emerald-300 focus:outline-none bg-white dark:bg-gray-700 dark:text-white transition-colors"
                    disabled={loading}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 rounded-lg border-2 border-transparent focus:border-emerald-300 focus:outline-none bg-white dark:bg-gray-700 dark:text-white transition-colors"
                    disabled={loading}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 font-bold py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-emerald-600 dark:border-emerald-400 border-t-transparent rounded-full animate-spin"></span>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <FaEnvelope className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-emerald-100 text-sm">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;