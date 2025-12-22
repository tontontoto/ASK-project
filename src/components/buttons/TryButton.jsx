import React from 'react';
import '../../styles/buttons/try-button.css';

const TryButton = ({ onClick, onToggleHeader, text = '押す覚悟があるなら押してみな？' }) => {
  const handleClick = () => {
    if (onToggleHeader) {
      onToggleHeader();
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="btn-try" onClick={handleClick} type="button">
      {text}
    </button>
  );
};

export default TryButton;

