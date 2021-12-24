import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

export const messagesApi = {
  getMessages(dialogId) {
    return instance.get(`/message?dialogId=${dialogId}`);
  },
  sendMessage({dialogId, text}) {
    return instance.post('/message', {dialogId, text});
  },
};
