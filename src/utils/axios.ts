import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: 'https://blog-be-eacd.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
