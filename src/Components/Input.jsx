import React, { forwardRef } from 'react';

const Input = forwardRef(({
  label,
  error,
  helperText,
  fullWidth = false,
  size = 'md',
  className = '',
  type = 'text',
  ...props
}, ref) => {
  const baseClasses = 'font-medium rounded-lg border-2 transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0';

  const sizeClasses = {
    sm: 'px-2 py-1.5 text-sm',
    md: 'px-3 py-2.5 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const borderClasses = error
    ? 'border-red-500 focus:border-red-600 focus-visible:outline-red-600'
    : 'border-gray-300 focus:border-emerald-600 focus-visible:outline-emerald-600';

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <div className={widthClass}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        className={`
          ${baseClasses}
          ${sizeClasses[size] || sizeClasses.md}
          ${borderClasses}
          ${widthClass}
          ${className}
          dark:bg-gray-700 dark:text-white dark:border-gray-600
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
