export const saveUserLocally = user => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getLocalSavedUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
