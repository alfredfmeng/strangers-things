import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await loginUser(username, password);
  };

  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        onChange={(evt) => setUsername(evt.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        onChange={(evt) => setPassword(evt.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
