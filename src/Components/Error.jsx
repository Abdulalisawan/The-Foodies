import React from 'react';
import { Link } from 'react-router';

const Errorjs = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Illustration */}
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
        className="w-80 mb-6"
      />

      {/* Error Text */}
      <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-lg shadow-md 
        hover:bg-emerald-950 transition"
      >
        Back to Home
      </Link>
    </div>
    );
};

export default Errorjs;