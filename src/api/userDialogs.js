import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export const dialogApi = {
  getDialogs() {
    return instance.get('/dialog');
  },
};
