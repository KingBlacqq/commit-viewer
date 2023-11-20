import axios from 'axios';
const Api = axios.create({
  baseURL:"https://api.github.com/",
  auth: {
    username: import.meta.env.VITE_APP_API_USERNAME,
    password: import.meta.env.VITE_APP_API_KEY,
  }
})

export default Api;