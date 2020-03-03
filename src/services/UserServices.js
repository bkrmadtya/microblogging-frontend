import axios from "../config/axios";

const getAllUser = async () => {
  const response = await axios.get("/");
  const users = await response.data;
  console.log(users);
  return users;
};

export default {
  getAllUser
};
