import React from 'react';
import NumberedButton from './NumberedButton';

const NumberedButtonsContainer = ({ buttonCount, startNumber, onButtonClick }) => {
  return (
    <div className="numbered-buttons-container">
      {Array.from({ length: buttonCount }, (_, index) => (
        <NumberedButton
          key={startNumber + index}
          number={startNumber + index}
          onClick={onButtonClick}
        />
      ))}
    </div>
  );
};

export default NumberedButtonsContainer;

