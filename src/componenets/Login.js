import React, { useState } from 'react';
import { getMe, loginUser } from '../api';
import handleLocalStorage from '../utils/handleLocalStorage';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const token = await loginUser(username, password);
    if (!token) {
      window.alert('Invalid username or password');
    } else {
      handleLocalStorage(token);
      const user = await getMe(token);
      props.setCurrentUser(user);
      setUsername('');
      setPassword('');
    }
  };
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
