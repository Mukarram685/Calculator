import React from 'react';

function Button({ text, onPress }) {
  return (
    <button
      className="w-16 h-16 bg-gray-200 m-2 rounded-lg hover:bg-gray-300"
      onClick={() => onPress(text)}
    >
      {text}
    </button>
  );
}

export default Button;
