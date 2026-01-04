import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingDisplay = ({ rating }) => {
  const ratingNum = parseInt(rating);
  const stars = Array.from({ length: 5 }).map((_, i) => i < ratingNum);

  return (
    <div className="flex flex-col gap-4">
      {/* Large Rating Display */}
      <div className="flex items-baseline gap-3">
        <div className="text-5xl md:text-6xl font-bold text-emerald-600 dark:text-emerald-400">
          {rating}
        </div>
        <div className="text-xl text-gray-600 dark:text-gray-400">/5</div>
      </div>

      {/* Stars */}
      <div className="flex gap-2">
        {stars.map((filled, i) => (
          <FaStar
            key={i}
            className={`w-6 h-6 ${
              filled
                ? 'text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Rating Text */}
      <div className="text-sm text-gray-600 dark:text-gray-400">
        {ratingNum === 5 && 'Excellent!'}
        {ratingNum === 4 && 'Very Good'}
        {ratingNum === 3 && 'Good'}
        {ratingNum === 2 && 'Fair'}
        {ratingNum === 1 && 'Poor'}
      </div>
    </div>
  );
};

export default RatingDisplay;
