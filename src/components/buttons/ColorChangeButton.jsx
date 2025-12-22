import React from 'react';
import '../../styles/buttons/color-change-button.css';

const ColorChangeButton = ({ onClick, text = '色を変える' }) => {
  return (
    <button className="color-change-button" onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default ColorChangeButton;

