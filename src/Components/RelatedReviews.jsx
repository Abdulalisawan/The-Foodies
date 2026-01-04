import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Card from './Card';

const RelatedReviews = ({ currentReviewId, category }) => {
  const [relatedReviews, setRelatedReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://the-foodies-server-sigma.vercel.app/reviews');
        const allReviews = await response.json();

        // Filter related reviews by category (excluding current review)
        const related = allReviews
          .filter(
            (review) =>
              review._id !== currentReviewId
          )
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);

        setRelatedReviews(related);
      } catch (error) {
        console.error('Error fetching related reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedReviews();
  }, [currentReviewId, category]);

  if (loading) {
    return (
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (relatedReviews.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Other Great Reviews
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Discover more amazing food experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedReviews.map((review) => (
          <Card key={review._id} eachdata={review} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/reviews"
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-emerald-700 bg-emerald-700 text-white font-semibold hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 transition-colors"
        >
          View All Reviews
        </Link>
      </div>
    </section>
  );
};

export default RelatedReviews;
