import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export const profileApi = {
  getProfile(id) {
    return instance.get(`/profile/${id}`);
  },
};
