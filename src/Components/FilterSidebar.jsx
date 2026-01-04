import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const FilterSidebar = ({ onFilterChange, activeFilters, onClearAll }) => {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    rating: false,
    priceRange: false,
    date: false,
  });

  const categories = [
    'Biriyani',
    'Pizza',
    'Burger',
    'Kebab',
    'Curry',
    'Chinese',
    'Dessert',
    'Beverage',
  ];

  const ratings = [
    { value: 5, label: '⭐⭐⭐⭐⭐ (5 stars)' },
    { value: 4, label: '⭐⭐⭐⭐ (4+ stars)' },
    { value: 3, label: '⭐⭐⭐ (3+ stars)' },
  ];

  const dateFilters = [
    { value: 'week', label: 'Last Week' },
    { value: 'month', label: 'Last Month' },
    { value: 'quarter', label: 'Last 3 Months' },
    { value: 'year', label: 'Last Year' },
  ];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (category) => {
    const updated = activeFilters.categories?.includes(category)
      ? activeFilters.categories.filter((c) => c !== category)
      : [...(activeFilters.categories || []), category];
    onFilterChange({ ...activeFilters, categories: updated });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({
      ...activeFilters,
      minRating: activeFilters.minRating === rating ? null : rating,
    });
  };

  const handlePriceRangeChange = (e, type) => {
    const value = parseInt(e.target.value) || 0;
    onFilterChange({
      ...activeFilters,
      [type]: value,
    });
  };

  const handleDateChange = (date) => {
    onFilterChange({
      ...activeFilters,
      dateRange: activeFilters.dateRange === date ? null : date,
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md h-fit sticky top-24">
      {/* Clear All Button */}
      {Object.values(activeFilters).some((v) => v && (Array.isArray(v) ? v.length > 0 : v)) && (
        <button
          onClick={onClearAll}
          className="w-full mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
        >
          <FaTimes size={16} />
          Clear All Filters
        </button>
      )}

      {/* Category Filter */}
      <div className="mb-6 border-b dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('category')}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition"
        >
          Category
          <FaChevronDown
            size={14}
            className={`transform transition ${expandedSections.category ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.category && (
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <label
                key={category}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={activeFilters.categories?.includes(category) || false}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 accent-emerald-500 cursor-pointer rounded"
                />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition">
                  {category}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="mb-6 border-b dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('rating')}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition"
        >
          Rating
          <FaChevronDown
            size={14}
            className={`transform transition ${expandedSections.rating ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.rating && (
          <div className="mt-3 space-y-2">
            {ratings.map((rating) => (
              <label
                key={rating.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="rating"
                  checked={activeFilters.minRating === rating.value}
                  onChange={() => handleRatingChange(rating.value)}
                  className="w-4 h-4 accent-emerald-500 cursor-pointer"
                />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition">
                  {rating.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b dark:border-gray-700 pb-4">
        <button
          onClick={() => toggleSection('priceRange')}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition"
        >
          Price Range
          <FaChevronDown
            size={14}
            className={`transform transition ${expandedSections.priceRange ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.priceRange && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Min Price: ৳{activeFilters.minPrice || 0}
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={activeFilters.minPrice || 0}
                onChange={(e) => handlePriceRangeChange(e, 'minPrice')}
                className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Max Price: ৳{activeFilters.maxPrice || 5000}
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={activeFilters.maxPrice || 5000}
                onChange={(e) => handlePriceRangeChange(e, 'maxPrice')}
                className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
              Price: ৳{activeFilters.minPrice || 0} - ৳{activeFilters.maxPrice || 5000}
            </div>
          </div>
        )}
      </div>

      {/* Date Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('date')}
          className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition"
        >
          Date Range
          <FaChevronDown
            size={14}
            className={`transform transition ${expandedSections.date ? 'rotate-180' : ''}`}
          />
        </button>
        {expandedSections.date && (
          <div className="mt-3 space-y-2">
            {dateFilters.map((date) => (
              <label
                key={date.value}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="date"
                  checked={activeFilters.dateRange === date.value}
                  onChange={() => handleDateChange(date.value)}
                  className="w-4 h-4 accent-emerald-500 cursor-pointer"
                />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition">
                  {date.label}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
