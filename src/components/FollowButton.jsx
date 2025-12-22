import React, { useState, useEffect, useRef } from 'react';
import '../styles/follow-button.css';

const taunts = [
  "押さなくていいよ",
  "どうせ進むだけ",
  "それ意味ある？",
  "戻れないけど",
  "見てるだけ？",
  "まだやるの？",
  "通り過ぎるんだ",
  "ここ押す？"
];

const FollowButton = ({ onButtonClick, baseScroll, baseTop, left }) => {
  const [buttonType] = useState(() => {
    const types = ["distance", "record", "progress", "taunt"];
    return types[Math.floor(Math.random() * types.length)];
  });
  
  const [buttonText, setButtonText] = useState('');
  const buttonRef = useRef(null);

  useEffect(() => {
    // ボタンのラベルを設定
    if (buttonType === "distance" || buttonType === "record") {
      setButtonText("押せ！！");
    } else if (buttonType === "progress") {
      setButtonText("押せ！！！");
    } else if (buttonType === "taunt") {
      setButtonText(taunts[Math.floor(Math.random() * taunts.length)]);
    }
  }, [buttonType]);

  // 初期位置を設定
  useEffect(() => {
    if (buttonRef.current && left !== null && baseTop !== null) {
      buttonRef.current.style.left = `${left}px`;
      buttonRef.current.style.top = `${baseTop}px`;
    }
  }, [left, baseTop]);

  // スクロールに追従する処理
  useEffect(() => {
    const handleScroll = () => {
      if (buttonRef.current && baseScroll !== null && baseTop !== null) {
        const diff = window.scrollY - baseScroll;
        const follow = diff < 120 ? diff * 0.6 : 120 * 0.6;
        buttonRef.current.style.top = `${baseTop + follow}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [baseScroll, baseTop]);

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick(buttonType);
    }
  };

  return (
    <button
      ref={buttonRef}
      className="follow-button"
      onClick={handleClick}
      type="button"
      data-type={buttonType}
    >
      {buttonText}
    </button>
  );
};

export default FollowButton;

