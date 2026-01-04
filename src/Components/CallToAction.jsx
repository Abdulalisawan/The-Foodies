import React, { useContext } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../Context/Authcontext';

const CallToAction = () => {
  const { Userdata } = useContext(Authcontext);

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 mx-4 md:mx-10">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900 rounded-3xl overflow-hidden shadow-xl">
        <div className="relative px-6 md:px-12 py-12 md:py-16 text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -ml-16 -mt-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-20 -mb-20"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Discover Amazing Food?
            </h2>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              {Userdata
                ? "Start sharing your food experiences with our community today!"
                : 'Join thousands of food lovers and share your authentic food experiences'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {Userdata ? (
                <>
                  <Link
                    to="/Dashboard"
                    className="px-8 py-3 md:py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
                  >
                    Go to Dashboard
                  </Link>
                  <Link
                    to="/reviews"
                    className="px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-700 transition-colors duration-200 inline-block"
                  >
                    Explore Reviews
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/Register"
                    className="px-8 py-3 md:py-4 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    to="/reviews"
                    className="px-8 py-3 md:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-700 transition-colors duration-200 inline-block"
                  >
                    Browse Reviews
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
