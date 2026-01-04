import React from 'react';
import { FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Dealscard = ({deal}) => {
    return (
        <div
            key={deal.id}
            className="relative bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
          >
           
            <div className="absolute top-4 left-4 bg-rose-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-sm font-semibold z-10 shadow-md">
              <FaStar className="w-4 h-4" /> {deal.rating}
            </div>

            {/* Image Container */}
            <div className="relative h-80 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
              <img
                src={deal.img}
                alt={deal.name}
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              {/* Category Badge */}
              <div className="inline-block">
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900 px-3 py-1 rounded-full">
                  {deal.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight line-clamp-2">
                {deal.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{deal.address}</span>
              </div>

              {/* Time and Price Row */}
              <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <FaClock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  {deal.time}
                </div>
                <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                  {deal.price}
                </span>
              </div>
            </div>
          </div>
    );
};

export default Dealscard;