import React, { useState } from 'react';

function SimpleLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Hardcoded login credentials
    const correctUsername = 'admin';
    const correctPassword = '1234';

    if (username === correctUsername && password === correctPassword) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <button onClick={handleLogin} style={{ width: '100%' }}>
        Login
      </button>
      {message && <p style={{ marginTop: '15px' }}>{message}</p>}
    </div>
  );
}

export default SimpleLogin;
