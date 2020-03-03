import axios from "axios";
import { baseUrl } from "./environment";
axios.defaults.baseURL = baseUrl;

export default axios;
