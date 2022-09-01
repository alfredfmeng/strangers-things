import React, { useState } from 'react';
import { loginUser } from '../api';
import handleLocalStorage from '../utils/handleLocalStorage';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = await loginUser(username, password);
    await handleLocalStorage(token);
    setUsername('');
    setPassword('');
  };
  console.log('THIS IS FROM OUTSIDE', username, password);
  return (
    <form id="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
