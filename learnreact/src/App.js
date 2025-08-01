import React from 'react';
import Fibonacci from './fibonacci';
import Factorial from './Factorial';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Programs</h1>
      <Fibonacci />
      <hr />
      <Factorial />
    </div>
  );
}

export default App;
