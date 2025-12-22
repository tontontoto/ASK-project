import React from 'react';
import NumberedButtonsContainer from './NumberedButtonsContainer';

const ExtendedSection = ({ buttonCount, startNumber, onButtonClick }) => {
  const randomHeight = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;

  return (
    <section 
      className="extended-section"
      style={{
        minHeight: `${randomHeight}px`,
        padding: '50px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <NumberedButtonsContainer 
        buttonCount={buttonCount}
        startNumber={startNumber}
        onButtonClick={onButtonClick}
      />
    </section>
  );
};

export default ExtendedSection;

