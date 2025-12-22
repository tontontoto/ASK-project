import React, { useState } from 'react';
import RandomButton from './RandomButton';
import InsultText from './InsultText';
import InputCheck from './InputCheck';
import '../styles/scroll-section.css';

const ScrollSection = ({ id, hasRandomButton, buttonType, insultText, hasInputCheck, onToggleHeader, isHeaderVisible, onButtonClick }) => {
  // セクションの高さをランダムに設定（500px〜2000px）
  // 再レンダリング時に高さが変わらないようにuseStateで保持
  const [randomHeight] = useState(() => Math.floor(Math.random() * (2000 - 500 + 1)) + 500);
  
  // ボタンがない場合は最小高さを100vhにする
  const minHeight = hasRandomButton && buttonType ? `${randomHeight}px` : '100vh';

  return (
    <section 
      className="scroll-section"
      style={{
        minHeight: minHeight,
        padding: '20px 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: '10px'
      }}
    >
      {hasInputCheck && (
        <InputCheck />
      )}
      {hasRandomButton && buttonType && (
        <RandomButton 
          onClick={() => console.log('Random button clicked')} 
          buttonType={buttonType}
          onToggleHeader={onToggleHeader}
          isHeaderVisible={isHeaderVisible}
          onButtonClick={onButtonClick}
          buttonId={id}
        />
      )}
      {!hasRandomButton && !hasInputCheck && insultText && (
        <InsultText text={insultText} />
      )}
    </section>
  );
};

export default ScrollSection;

