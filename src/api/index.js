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
    return result;
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
    // const token = result.data.token ? result.data.token : null;
    console.log(result);
    return result;
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

export const newPost = async (
  { title, description, price, willDeliver },
  token
) => {
  try {
    const response = await fetch(`${BASE_URL}${COHORT}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
        },
      }),
    });
    const result = await response.json();
    console.log(result);
    const post = result.data.post ? result.data.post : null;
    return post;
  } catch (error) {
    throw error;
  }
};
