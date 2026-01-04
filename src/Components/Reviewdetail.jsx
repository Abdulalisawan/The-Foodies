import React from 'react';
import { FaStar, FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import RatingDisplay from './RatingDisplay';
import ReviewMeta from './ReviewMeta';
import ShareReview from './ShareReview';
import RelatedReviews from './RelatedReviews';

const Reviewdetail = () => {
    const data= useLoaderData()
    console.log(data)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 dark:from-emerald-700 dark:to-emerald-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 text-emerald-100 hover:text-white transition-colors mb-4"
              >
                <FaArrowLeft className="w-4 h-4" />
                Back to Reviews
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold">{data.foodName}</h1>
              <p className="text-emerald-100 mt-2">{data.restaurantName}</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              
              {/* Left Column - Image & Rating */}
              <div className="lg:col-span-1">
                {/* Image */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <img
                    src={data.photo}
                    alt={data.foodName}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Rating Card */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8">
                  <RatingDisplay rating={data.rating} />
                </div>

                {/* Share Card */}
                <ShareReview foodName={data.foodName} reviewerName={data.reviewerName} />
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-2">
                
                {/* Description Section */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 md:p-10 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Review
                  </h2>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
                    {data.description || 'No detailed description provided for this review.'}
                  </p>

                  {/* Highlights */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <FaStar className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                        <span>Rating: {data.rating}/5 stars</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <FaStar className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>Dish: {data.foodName}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <FaStar className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span>Restaurant: {data.restaurantName}</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <FaStar className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                        <span>Location: {data.restaurantLocation}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Meta Information */}
                <ReviewMeta data={data} />
              </div>
            </div>

            {/* Related Reviews */}
            <RelatedReviews currentReviewId={data._id} category={data.foodName} />

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Found this review helpful?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore more authentic food reviews and discover your next favorite dish
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/reviews"
                  className="px-8 py-3 bg-emerald-600 dark:bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
                >
                  View All Reviews
                </Link>
                <Link
                  to="/Alldeals"
                  className="px-8 py-3 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 font-semibold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900 transition-colors"
                >
                  Check Out Deals
                </Link>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Reviewdetail;