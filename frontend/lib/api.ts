import axios from "axios";

const api = axios.create({
  baseURL: "https://restaurant-platform-jc7b.onrender.com",
});

export default api;
