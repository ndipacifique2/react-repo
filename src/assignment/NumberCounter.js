import React, { useState } from 'react';
import './Check1.css';

function NumberCounter() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
  
    <div className="number-counter">
      
       <p className="number">{number}</p>
      <div className="buttons-container">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
     
    </div>
  );
}

export default NumberCounter;
