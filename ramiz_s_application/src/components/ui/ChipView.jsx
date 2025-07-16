import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ChipItem = ({ 
  children, 
  leftImage, 
  onClick, 
  selected = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-helvetica font-bold rounded-[28px] border-2 border-[#efefef] transition-all duration-200 cursor-pointer hover:bg-opacity-90';
  
  const chipClasses = `
    ${baseClasses}
    bg-global-11 text-global-5
    px-4 py-2 sm:px-6 sm:py-3
    text-sm sm:text-base
    ${selected ? 'ring-2 ring-blue-500' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      onClick={onClick}
      className={chipClasses}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick && onClick();
        }
      }}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="" 
          className="w-6 h-6 sm:w-7 sm:h-7"
          width={leftImage.width}
          height={leftImage.height}
        />
      )}
      <span className="leading-6">{children}</span>
    </div>
  );
};

const ChipView = ({ 
  children,
  className = '',
  gap = '8px',
  ...props 
}) => {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (index) => {
    setSelectedChip(index);
  };

  const containerClasses = `
    flex flex-col sm:flex-row items-center justify-center
    gap-2 sm:gap-4
    mt-4 sm:mt-8
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={containerClasses} {...props}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClick: () => handleChipClick(index),
            selected: selectedChip === index,
          });
        }
        return child;
      })}
    </div>
  );
};

ChipItem.propTypes = {
  children: PropTypes.node,
  leftImage: PropTypes.shape({
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  className: PropTypes.string,
};

ChipView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  gap: PropTypes.string,
};

export { ChipView as default, ChipItem };