import axios from "axios";

export let Axios = axios.create({
  baseURL: "http://localhost:4050/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
