import React, { useState } from 'react';
import { registerUser, getMe } from '../api';
import handleLocalStorage from '../utils/handleLocalStorage';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password === retypePassword) {
      const token = await registerUser(username, password);
      handleLocalStorage(token);
      const user = await getMe(token);
      props.setCurrentUser(user);
      setUsername('');
      setPassword('');
    } else {
      window.alert('Passwords do not match');
    }
  };

  return (
    <form id="register-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" onChange={handleChange} required />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        onChange={(evt) => setPassword(evt.target.value)}
        required
      />

      <label htmlFor="retypePassword" name="retypePassword">
        Re-type Password:
      </label>
      <input
        type="password"
        name="retypePassword"
        onChange={(evt) => setRetypePassword(evt.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
