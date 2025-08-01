import React, { useState } from 'react';

function Fibonacci() {
  const [count, setCount] = useState('');
  const [series, setSeries] = useState([]);

  const generateFibonacci = (n) => {
    const result = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  };

  const handleGenerate = () => {
    setSeries(generateFibonacci(Number(count)));
  };

  return (
    <div>
      <h2>Fibonacci Series</h2>
      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} placeholder="Enter number" />
      <button onClick={handleGenerate}>Generate</button>
      <p>{series.join(', ')}</p>
    </div>
  );
}

export default Fibonacci;
