import React, { useState, useEffect } from 'react';
import Greeting from './components/Greeting';
import ExtendedSection from './components/ExtendedSection';
import TauntButton from './components/TauntButton';
import NumberedButtonsContainer from './components/NumberedButtonsContainer';
import './styles/index.css';

function App() {
  const [sections, setSections] = useState([]);
  const [buttonCounter, setButtonCounter] = useState(2); // 初期ボタンは1なので、次は2から

  // サイトを伸ばす機能
  const extendSite = () => {
    const buttonCount = Math.floor(Math.random() * 5) + 1; // 1〜5個のボタン
    const currentStartNumber = buttonCounter;
    
    setButtonCounter(prev => prev + buttonCount);
    
    setSections(prev => [
      ...prev,
      {
        id: Date.now(),
        buttonCount: buttonCount,
        startNumber: currentStartNumber
      }
    ]);
  };

  return (
    <div className="app">
      <main style={{ minHeight: '10000px' }}>
        <Greeting />
        
        <section 
          className="initial-section"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 20px'
          }}
        >
          <NumberedButtonsContainer 
            buttonCount={1}
            startNumber={1}
            onButtonClick={extendSite}
          />
        </section>

        {sections.map(section => (
          <ExtendedSection
            key={section.id}
            buttonCount={section.buttonCount}
            startNumber={section.startNumber}
            onButtonClick={extendSite}
          />
        ))}
      </main>
      
      <TauntButton />
    </div>
  );
}

export default App;

