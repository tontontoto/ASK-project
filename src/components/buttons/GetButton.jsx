import React from 'react';
import '../../styles/buttons/get-button.css';

const GetButton = ({ onClick, text = 'ポ〇モンゲットだぜ！' }) => {
  return (
    <button className="get-btn" onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default GetButton;

