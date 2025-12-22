import React from 'react';
import '../../styles/buttons/navigation-button.css';

const NavigationButton = ({ onClick, text = 'ナビゲーション' }) => {
  return (
    <button className="navigation-button" onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default NavigationButton;

