import React, { useState, useEffect } from 'react';

const tauntMessages = [
  "まだやる気ないの？",
  "その程度？",
  "もっと本気出せるでしょ？",
  "本当にそれでいいの？",
  "もっと頑張れるはず！",
  "まだまだ余裕があるでしょ？",
  "本気を見せてよ！",
  "その程度の実力？",
  "もっと上を目指そうよ！",
  "諦めるのはまだ早い！"
];

const TauntButton = () => {
  const [buttonText, setButtonText] = useState('');

  const getRandomTaunt = () => {
    const randomIndex = Math.floor(Math.random() * tauntMessages.length);
    return tauntMessages[randomIndex];
  };

  const updateButtonText = () => {
    setButtonText(getRandomTaunt());
  };

  useEffect(() => {
    updateButtonText();
  }, []);

  return (
    <button id="tauntButton" onClick={updateButtonText}>
      {buttonText || 'ボタン'}
    </button>
  );
};

export default TauntButton;

