import axios from "../config/axios";

const login = async userDetails => {
  const response = await axios.post("user/login", userDetails);
  return response.data;
};

const signup = async newUser => {
  const response = await axios.post("user/signUp", newUser);
  return response.data;
};

export default {
  signup,
  login
};
