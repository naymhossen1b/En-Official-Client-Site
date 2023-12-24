import axios from "axios";

const SecureAxios = axios.create({
  baseURL: import.meta.env.VITE_API_LOCALHOST,
  withCredentials: true,
});

export default SecureAxios;
