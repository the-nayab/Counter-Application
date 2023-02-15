import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const getCounterColor = () => {
    if (count === 10) {
      return 'red';
    } else if (count >= 5 && count <= 9) {
      return 'blue';
    } else {
      return 'green';
    }
  };

  return (
    <div>
      <h1 style={{ color: getCounterColor() }}>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
