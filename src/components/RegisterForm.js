import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = ({ onRegister, onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password
    };

    axios.post('http://localhost:8000/api/register', userData)
      .then(response => {
        onRegister(response.data.user);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit">Register</button>
        <button onClick={() => onLogin()}>Login</button>
      </form>
    </div>
  );
};

export default RegisterPage;
