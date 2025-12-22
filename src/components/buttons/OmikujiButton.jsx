import React from 'react';
import '../../styles/buttons/omikuji-button.css';

const OmikujiButton = ({ onClick, text = 'おみくじ！' }) => {
  return (
    <div className="btn-13">
      <button className="btn-13-input" onClick={onClick} type="button">
        {text}
      </button>
    </div>
  );
};

export default OmikujiButton;

