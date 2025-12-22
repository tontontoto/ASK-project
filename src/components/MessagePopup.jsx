import React, { useEffect } from 'react';
import '../styles/message-popup.css';

const MessagePopup = ({ message, image, isVisible, onClose, duration = 2200 }) => {
  useEffect(() => {
    if (isVisible && (message || image)) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, message, image, onClose, duration]);

  if (!isVisible || (!message && !image)) return null;

  return (
    <>
      <div className="message-overlay" onClick={onClose}></div>
      <div className="message-popup">
        {image && (
          <img src={image} alt="Popup" className="popup-image" />
        )}
        {message && (
          <p className="message-text" dangerouslySetInnerHTML={{ __html: message }}></p>
        )}
      </div>
    </>
  );
};

export default MessagePopup;

