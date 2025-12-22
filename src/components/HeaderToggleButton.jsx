import React from 'react';
import '../styles/header-toggle-button.css';

const HeaderToggleButton = ({ onClick, isHeaderVisible }) => {
  return (
    <button className="header-toggle-button" onClick={onClick} type="button">
      {isHeaderVisible ? 'Headerを非表示' : 'Headerを表示'}
    </button>
  );
};

export default HeaderToggleButton;

