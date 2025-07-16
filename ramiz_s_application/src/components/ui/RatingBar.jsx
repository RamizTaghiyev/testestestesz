import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ 
  rating = 0,
  maxRating = 5,
  onRatingChange,
  size = 'medium',
  readonly = false,
  className = '',
  ...props 
}) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value) => {
    if (!readonly) {
      setCurrentRating(value);
      if (onRatingChange) {
        onRatingChange(value);
      }
    }
  };

  const handleMouseEnter = (value) => {
    if (!readonly) {
      setHoverRating(value);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const containerClasses = `
    flex items-center gap-1
    ${readonly ? '' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const renderStar = (index) => {
    const value = index + 1;
    const filled = (hoverRating || currentRating) >= value;
    
    return (
      <svg
        key={index}
        className={`${sizes[size]} transition-colors duration-200 ${
          filled ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        onClick={() => handleClick(value)}
        onMouseEnter={() => handleMouseEnter(value)}
        onMouseLeave={handleMouseLeave}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  };

  return (
    <div 
      className={containerClasses}
      role="radiogroup"
      aria-label={`Rating: ${currentRating} out of ${maxRating} stars`}
      {...props}
    >
      {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  onRatingChange: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  readonly: PropTypes.bool,
  className: PropTypes.string,
};

export default RatingBar;