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
