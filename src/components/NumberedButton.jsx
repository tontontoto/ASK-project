import React from 'react';
import '../styles/numbered-buttons.css';

const NumberedButton = ({ number, onClick }) => {
  return (
    <button 
      className="numbered-button" 
      id={`numbered-button-${number}`}
      onClick={onClick}
      type="button"
    >
      Button {number}
    </button>
  );
};

export default NumberedButton;

