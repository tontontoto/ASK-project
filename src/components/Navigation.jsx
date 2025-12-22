import React from 'react';
import '../styles/navigation.css';

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

const Navigation = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <nav className="navigation">
      <button className="navigation-close" onClick={onClose}>×</button>
      <ul className="navigation-list">
        {tauntMessages.map((message, index) => (
          <li key={index} className="navigation-item">
            {message}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

