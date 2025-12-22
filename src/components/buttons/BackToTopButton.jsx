import React from 'react';
import '../../styles/buttons/back-to-top-button.css';

const BackToTopButton = ({ onClick, text = 'ページの最初に戻る' }) => {
  return (
    <button className="back-to-top-button" onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default BackToTopButton;

