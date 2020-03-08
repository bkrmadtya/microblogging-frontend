import axios from '../config/axios';

const login = async userDetails => {
  console.log('[USER DETAILS LOGIN] : ', userDetails);

  const response = await axios.post('user/login', userDetails);
  return response.data;
};

const signup = async newUser => {
  console.log('[SIGN UP] : ', newUser);

  const response = await axios.post('user/signUp', newUser);
  // const createdUser = await response.data;

  console.log(response);

  // return createdUser;
};

export default {
  signup,
  login
};
