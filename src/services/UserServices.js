import axios from "../config/axios";

const getUserByUsername = async username => {
  const response = await axios.get(`user/${username}`);
  const user = await response.data;
  return user;
};

const updatePassword = async (passwordDetails, userId) => {
  console.log(passwordDetails, userId);
  const response = await axios.patch(`user/updatePassword?userId=${userId}`, {
    ...passwordDetails
  });
  const res = await response.data;
  return res;
};

export default {
  getUserByUsername,
  updatePassword
};
