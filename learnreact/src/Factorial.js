import React, { useState } from 'react';

function Factorial() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const calculateFactorial = (n) => {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
      fact *= i;
    }
    return fact;
  };

  const handleCalculate = () => {
    setResult(calculateFactorial(Number(number)));
  };

  return (
    <div>
      <h2>Factorial</h2>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter number" />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Factorial: {result}</p>}
    </div>
  );
}

export default Factorial;
