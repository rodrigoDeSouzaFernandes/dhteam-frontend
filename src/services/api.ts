import axios from 'axios';

export const backendUrl = 'http://localhost:1337';

export const Api = axios.create({
  baseURL: `${backendUrl}/api/`,
  timeout: 5000,
});
