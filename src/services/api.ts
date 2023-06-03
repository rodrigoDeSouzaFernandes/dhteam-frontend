import axios from 'axios';

export const Api = axios.create({
  baseURL: 'http://localhost:1337/api/',
  timeout: 5000,
});
