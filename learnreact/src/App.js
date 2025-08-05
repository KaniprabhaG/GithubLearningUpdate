import React from 'react';
import Fibonacci from './fibonacci';
import Factorial from './Factorial';
import SimpleLogin from './simpleLogin';

function App() {
  return (
    <div style={{ padding: '20px' }} className="App">
      <h1>React Programs</h1>

      <Fibonacci />
      <hr />

      <Factorial />
      <hr />

      <SimpleLogin />
    </div>
  );
}

export default App;
