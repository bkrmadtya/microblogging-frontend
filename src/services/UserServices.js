import axios from "../config/axios";

const getUserByUsername = async username => {
  const response = await axios.get(`user/${username}`);
  const user = await response.data;
  return user;
};

export default {
  getUserByUsername
};
