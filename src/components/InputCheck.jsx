import React, { useState } from 'react';
import '../styles/input-check.css';

const InputCheck = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleButtonClick = () => {
    // 400px の高さを埋めるために大量にエラー文を生成
    let errors = "";
    errors = "何で名前なんか入力してるんｗ";
    setErrorMessage(errors);
  };

  return (
    <div className="input-check-container">
      <div className="center">
        <label>
          名前：
          <input 
            type="text" 
            id="nameText" 
            placeholder="ここに名前を入力してください"
          />
        </label>
        <input 
          type="button" 
          value="Check" 
          id="checkButton" 
          onClick={handleButtonClick}
        />
      </div>

      {errorMessage && (
        <p id="msg" className="error">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputCheck;

