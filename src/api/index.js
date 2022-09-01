const BASE_URL = 'https://strangers-things.herokuapp.com/api/';
const COHORT = '2208-FTB-ET-WEB-FT';

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT}/posts`);
    const result = await response.json();
    return result.data.posts;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT}/users/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    return result.data.token;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const result = await response.json();
    return result.data.token;
  } catch (error) {
    throw error;
  }
};

export const getMe = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result.data.username;
  } catch (error) {
    throw error;
  }
};
