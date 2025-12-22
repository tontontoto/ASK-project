import React from 'react';
import NewUpdateButton from './buttons/NewUpdateButton';
import TryButton from './buttons/TryButton';
import GetButton from './buttons/GetButton';
import OmikujiButton from './buttons/OmikujiButton';
import OseyoButton from './buttons/OseyoButton';
import ColorChangeButton from './buttons/ColorChangeButton';
import NavigationButton from './buttons/NavigationButton';
import BackToTopButton from './buttons/BackToTopButton';

const RandomButton = ({ onClick, buttonType, onToggleHeader, isHeaderVisible, onButtonClick, buttonId }) => {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(buttonType, buttonId);
    }
    if (onClick) {
      onClick();
    }
  };

  const renderButton = () => {
    switch (buttonType) {
      case 'newupdate':
        return <NewUpdateButton onClick={handleClick} />;
      case 'try':
        return <TryButton onClick={handleClick} onToggleHeader={onToggleHeader} />;
      case 'get':
        return <GetButton onClick={handleClick} />;
      case 'omikuji':
        return <OmikujiButton onClick={handleClick} />;
      case 'oseyo':
        return <OseyoButton onClick={handleClick} />;
      case 'colorchange':
        return <ColorChangeButton onClick={handleClick} />;
      case 'navigation':
        return <NavigationButton onClick={handleClick} />;
      case 'backtotop':
        return <BackToTopButton onClick={handleClick} />;
      default:
        return <NewUpdateButton onClick={handleClick} />;
    }
  };

  return renderButton();
};

export default RandomButton;

