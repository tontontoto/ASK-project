import React from 'react';
import '../styles/greeting.css';

const Greeting = ({ message = 'こんにちは' }) => {
  return (
    <section className="entrance-section">
      <h1 className="greeting-text">{message}</h1>
    </section>
  );
};

export default Greeting;

