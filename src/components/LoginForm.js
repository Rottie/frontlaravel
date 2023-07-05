import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin, onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password
    };

    axios.post('http://localhost:8000/api/login', credentials)
      .then(response => {
        onLogin(response.data.user);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <button onClick={() => onRegister()}>Register</button>
      </form>
    </div>
  );
};

export default LoginPage;
