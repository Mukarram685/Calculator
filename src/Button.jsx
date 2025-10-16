import React from 'react';
import PropTypes from 'prop-types';

function Button({ text, onPress, variant = 'number' }) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'number':
        return 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white';
      case 'operator':
        return 'bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold';
      case 'scientific':
        return 'bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm';
      case 'memory':
        return 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm font-semibold';
      default:
        return 'bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white';
    }
  };

  return (
    <button
      className={`h-12 rounded-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 ${getButtonStyle()}`}
      onClick={() => onPress(text)}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPress: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['number', 'operator', 'scientific', 'memory'])
};

export default Button;
