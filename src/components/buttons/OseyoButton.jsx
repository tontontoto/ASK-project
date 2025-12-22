import React from 'react';
import '../../styles/buttons/oseyo-button.css';

const OseyoButton = ({ onClick, text = '押せよ！' }) => {
  return (
    <button className="btn-oseyo" onClick={onClick} type="button">
      <span>{text}</span>
    </button>
  );
};

export default OseyoButton;

