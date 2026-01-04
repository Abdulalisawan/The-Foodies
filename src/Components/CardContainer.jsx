import React from 'react';

const CardContainer = ({
  children,
  variant = 'default',
  onClick,
  hoverable = true,
  className = '',
  ...props
}) => {
  const baseClasses = 'rounded-xl overflow-hidden transition-all duration-200';

  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg',
    bordered: 'bg-white dark:bg-gray-800 border-2 border-emerald-600',
    subtle: 'bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700',
  };

  const hoverClasses = hoverable ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';

  return (
    <div
      className={`
        ${baseClasses}
        ${variantClasses[variant] || variantClasses.default}
        ${hoverClasses}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardContainer;
