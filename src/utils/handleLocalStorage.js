const handleLocalStorage = (token) => {
  token ? localStorage.setItem('token', token) : localStorage.clear();
};

export default handleLocalStorage;
