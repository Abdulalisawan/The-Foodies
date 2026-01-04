import React from 'react';

const Skeleton = ({ variant = 'card', count = 1, className = '' }) => {
  const baseClasses = 'bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg';

  const variantClasses = {
    card: 'w-full h-64 rounded-xl',
    text: 'w-full h-4 rounded-md',
    heading: 'w-1/2 h-8 rounded-md',
    avatar: 'w-12 h-12 rounded-full',
  };

  const skeletonElement = (
    <div
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.card} ${className}`}
    />
  );

  if (count > 1) {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i}>{skeletonElement}</div>
        ))}
      </div>
    );
  }

  return skeletonElement;
};

export default Skeleton;
