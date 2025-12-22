import React, { useState, useEffect } from 'react';
import '../styles/countdown-button.css';

const CountdownButton = ({ onStart }) => {
  const [time, setTime] = useState(null);
  const [message, setMessage] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (time === 0) {
      // 0を消す
      setTimeout(() => {
        setTime(null);
        // メッセージ表示
        setMessage('なにしてるの？早く寝たら');
        
        // 2秒後にページを閉じる
        setTimeout(() => {
          window.close();
        }, 2000);
      }, 100);
    }
  }, [time]);

  const handleClick = () => {
    if (isStarted) return;
    
    setIsStarted(true);
    setTime(5);
    
    if (onStart) {
      onStart();
    }

    const timer = setInterval(() => {
      setTime(prevTime => {
        const newTime = prevTime - 1;
        if (newTime === 0) {
          clearInterval(timer);
        }
        return newTime;
      });
    }, 1000);
  };

  return (
    <div className="countdown-container">
      <button 
        id="startBtn" 
        className="countdown-start-btn"
        onClick={handleClick}
        disabled={isStarted}
      >
        カウントダウン開始
      </button>
      {time !== null && (
        <div id="count" className="countdown-count">
          {time}
        </div>
      )}
      {message && (
        <div id="message" className="countdown-message">
          {message}
        </div>
      )}
    </div>
  );
};

export default CountdownButton;

