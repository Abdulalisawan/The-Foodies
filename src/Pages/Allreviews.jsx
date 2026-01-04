import React, { useEffect, useState, useMemo } from 'react';
import { useLoaderData, useNavigate, useRevalidator } from 'react-router';

import Card from '../Components/Card';
import FilterSidebar from '../Components/FilterSidebar';
import Pagination from '../Components/Pagination';
import ActiveFilters from '../Components/ActiveFilters';
import { FaSearch } from 'react-icons/fa';

const ITEMS_PER_PAGE = 6;

const Allreviews = () => {
  const data = useLoaderData();
  const revalidator = useRevalidator();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    categories: [],
    minRating: null,
    minPrice: 0,
    maxPrice: 5000,
    dateRange: null,
    sort: 'newest',
  });

  // Auto-revalidate data every 3 seconds
  useEffect(() => {
    const interval = setTimeout(() => {
      revalidator.revalidate();
    }, 3000);
    return () => clearTimeout(interval);
  }, [revalidator]);

  // Navigate with search parameter
  useEffect(() => {
    const delay = setTimeout(() => {
      navigate(`/reviews?search=${search}`);
    }, 500);
    return () => clearTimeout(delay);
  }, [search, navigate]);

  // Filter and sort reviews
  const filteredData = useMemo(() => {
    let result = data || [];

    // Search filter
    if (search.trim()) {
      result = result.filter(
        (item) =>
          item.foodName?.toLowerCase().includes(search.toLowerCase()) ||
          item.restaurantName?.toLowerCase().includes(search.toLowerCase()) ||
          item.shortDescription?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (filters.categories.length > 0) {
      result = result.filter((item) => filters.categories.includes(item.foodCategory));
    }

    // Rating filter
    if (filters.minRating) {
      result = result.filter((item) => (item.rating || 0) >= filters.minRating);
    }

    // Price range filter
    if (filters.minPrice || filters.maxPrice) {
      result = result.filter(
        (item) =>
          (item.restaurantPrice || 0) >= filters.minPrice &&
          (item.restaurantPrice || 0) <= filters.maxPrice
      );
    }

    // Date range filter
    if (filters.dateRange) {
      const now = new Date();
      const dateRanges = {
        week: 7 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        quarter: 90 * 24 * 60 * 60 * 1000,
        year: 365 * 24 * 60 * 60 * 1000,
      };
      const timeFrame = dateRanges[filters.dateRange];
      result = result.filter((item) => {
        const reviewDate = new Date(item.reviewDate).getTime();
        return now.getTime() - reviewDate <= timeFrame;
      });
    }

    // Sorting
    result.sort((a, b) => {
      switch (filters.sort) {
        case 'newest':
          return b.reviewDate - a.reviewDate;
        case 'highest':
          return (b.rating || 0) - (a.rating || 0);
        case 'oldest':
          return a.reviewDate - b.reviewDate;
        default:
          return b.reviewDate - a.reviewDate;
      }
    });

    return result;
  }, [data, search, filters]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handleRemoveFilter = (filterType, filterValue) => {
    switch (filterType) {
      case 'category':
        setFilters({
          ...filters,
          categories: filters.categories.filter((c) => c !== filterValue),
        });
        break;
      case 'rating':
        setFilters({ ...filters, minRating: null });
        break;
      case 'price':
        setFilters({ ...filters, minPrice: 0, maxPrice: 5000 });
        break;
      case 'date':
        setFilters({ ...filters, dateRange: null });
        break;
      case 'sort':
        setFilters({ ...filters, sort: 'newest' });
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const handleClearAll = () => {
    setFilters({
      categories: [],
      minRating: null,
      minPrice: 0,
      maxPrice: 5000,
      dateRange: null,
      sort: 'newest',
    });
    setSearch('');
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-900 dark:to-emerald-700 py-12">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Find your <br /> favourite Authentic Food
          </h1>
          <p className="text-emerald-100 text-lg">
            {filteredData.length} delicious reviews to explore
          </p>
        </div>
      </div>

      {/* Search and Controls */}
      <div className="px-4 md:px-8 py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 w-full md:max-w-md">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by food name, restaurant, or description..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="text-gray-700 dark:text-gray-300 font-semibold">
                Sort by:
              </div>
              <select
                value={filters.sort}
                onChange={(e) => {
                  handleFilterChange({ ...filters, sort: e.target.value });
                }}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rated</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Active Filters Display */}
        <ActiveFilters
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAll={handleClearAll}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar
              onFilterChange={handleFilterChange}
              activeFilters={filters}
              onClearAll={handleClearAll}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {paginatedData.length === 0 ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="flex items-center justify-center mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-white">
                    No reviews found
                  </h2>
                  <span className="ml-2 text-emerald-500 text-2xl sm:text-3xl">
                    <FaSearch />
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg mb-4">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={handleClearAll}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {paginatedData.map((review) => (
                    <Card key={review._id} eachdata={review} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allreviews;