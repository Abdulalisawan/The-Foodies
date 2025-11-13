import React from 'react';

const Newsletter = () => {
    return (
       <section className="w-full py-16 h-[50vh] flex justify-center">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Subscribe Our Newsletter to <br /> get the latest review and deals 
        </h2>

        <form className="flex flex-col  md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="px-4 py-3 w-64 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900"
          />

          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-3 w-64 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-900"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md hover:bg-emerald-900transition"
          >
            Subscribe
          </button>
        </form>

        
      </div>
    </section>
    );
};

export default Newsletter;