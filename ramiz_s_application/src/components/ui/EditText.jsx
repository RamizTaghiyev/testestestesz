import React, { useState } from 'react';
import PropTypes from 'prop-types';

const EditText = ({ 
  placeholder = '',
  value,
  onChange,
  type = 'text',
  disabled = false,
  fullWidth = true,
  className = '',
  ...props 
}) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const baseClasses = 'font-helvetica font-medium rounded-[26px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
  
  const inputClasses = `
    ${baseClasses}
    bg-edittext-1 text-global-11 placeholder-global-11 placeholder-opacity-70
    px-4 py-2 sm:px-6 sm:py-3
    text-sm sm:text-base
    leading-6
    ${fullWidth ? 'w-full' : 'w-auto'}
    ${disabled ? 'cursor-not-allowed opacity-50' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
      disabled={disabled}
      className={inputClasses}
      {...props}
    />
  );
};

EditText.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default EditText;