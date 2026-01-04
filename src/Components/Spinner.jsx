import React from 'react';

const Spinner = ({ size = 'md', variant = 'primary', fullScreen = false }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const variantClasses = {
    primary: 'border-emerald-600 border-t-emerald-200',
    white: 'border-white border-t-gray-200',
    gray: 'border-gray-600 border-t-gray-200',
  };

  const spinner = (
    <div
      className={`
        ${sizeClasses[size] || sizeClasses.md}
        ${variantClasses[variant] || variantClasses.primary}
        border-4 rounded-full animate-spin
      `}
      role="status"
      aria-label="Loading"
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Spinner;
