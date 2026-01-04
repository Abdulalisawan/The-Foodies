import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUtensils } from 'react-icons/fa';
import Badge from './Badge';

const ReviewMeta = ({ data }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 md:p-8 space-y-6">
      {/* Main Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Reviewer */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-900">
              <FaUser className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Reviewed By</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {data.reviewerName}
            </p>
          </div>
        </div>

        {/* Restaurant */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900">
              <FaUtensils className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Restaurant</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {data.restaurantName}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900">
              <FaMapMarkerAlt className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Location</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {data.restaurantLocation}
            </p>
          </div>
        </div>

        {/* Date */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900">
              <FaCalendarAlt className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Review Date</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {formatDate(data.reviewDate)}
            </p>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-3">
          Tags
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">{data.foodName}</Badge>
          <Badge variant="secondary">{data.restaurantName}</Badge>
          {data.rating >= 4 && (
            <Badge variant="success">Recommended</Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewMeta;
