import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ActiveFilters = ({ filters, onRemoveFilter, onClearAll }) => {
  const activeFiltersList = [];

  // Categories
  if (filters.categories?.length > 0) {
    filters.categories.forEach((cat) => {
      activeFiltersList.push({
        key: `cat-${cat}`,
        label: cat,
        onRemove: () => onRemoveFilter('category', cat),
      });
    });
  }

  // Rating
  if (filters.minRating) {
    activeFiltersList.push({
      key: 'rating',
      label: `${filters.minRating}+ Stars`,
      onRemove: () => onRemoveFilter('rating', null),
    });
  }

  // Price Range
  if (filters.minPrice || filters.maxPrice) {
    activeFiltersList.push({
      key: 'price',
      label: `৳${filters.minPrice || 0} - ৳${filters.maxPrice || 5000}`,
      onRemove: () => onRemoveFilter('price', null),
    });
  }

  // Date Range
  if (filters.dateRange) {
    const dateLabels = {
      week: 'Last Week',
      month: 'Last Month',
      quarter: 'Last 3 Months',
      year: 'Last Year',
    };
    activeFiltersList.push({
      key: 'date',
      label: dateLabels[filters.dateRange] || filters.dateRange,
      onRemove: () => onRemoveFilter('date', null),
    });
  }

  // Sort
  if (filters.sort) {
    const sortLabels = {
      newest: 'Newest First',
      highest: 'Highest Rated',
      oldest: 'Oldest First',
    };
    activeFiltersList.push({
      key: 'sort',
      label: sortLabels[filters.sort] || filters.sort,
      onRemove: () => onRemoveFilter('sort', null),
    });
  }

  if (activeFiltersList.length === 0) return null;

  return (
    <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-800 dark:text-white">
          Active Filters ({activeFiltersList.length})
        </h3>
        <button
          onClick={onClearAll}
          className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {activeFiltersList.map((filter) => (
          <div
            key={filter.key}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full border border-emerald-300 dark:border-emerald-600 text-sm font-medium shadow-sm hover:shadow-md transition"
          >
            <span>{filter.label}</span>
            <button
              onClick={filter.onRemove}
              className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition"
              aria-label={`Remove ${filter.label} filter`}
            >
              <FaTimes size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveFilters;
