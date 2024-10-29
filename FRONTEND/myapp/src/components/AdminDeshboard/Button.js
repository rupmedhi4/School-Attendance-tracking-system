// Button.js
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-md transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
