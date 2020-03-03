import axios from "../config/axios";

const login = async userDetails => {
  console.log("[USER DETAILS LOGIN] : ", userDetails);

  const response = await axios.post("/login", userDetails);
  const user = await response.data;
  return user;
};

const signup = async newUser => {
  console.log("[SIGN UP] : ", newUser);

  const response = await axios.post("/signup", newUser);
  const createdUser = await response.data;

  return createdUser;
};

export default {
  signup,
  login
};
