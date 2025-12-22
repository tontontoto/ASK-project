import React from 'react';
import '../../styles/buttons/newupdate-button.css';

const NewUpdateButton = ({ onClick, text = 'NEWUPDATE' }) => {
  return (
    <button className="newupdate-btn" onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default NewUpdateButton;

