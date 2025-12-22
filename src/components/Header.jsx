import React from 'react';
import '../styles/header.css';

const Header = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <header className="header">
      <div className="header-content">
        <h2 className="header-title">Header</h2>
        {onClose && (
          <button className="header-close-button" onClick={onClose}>
            ×
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

