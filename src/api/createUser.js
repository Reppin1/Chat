import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
})

export const UserApi = {
  createUser({firstName,lastName,email,password,avatarUrl}){
    return instance.post('auth/registrations', {firstName,lastName,email,password,avatarUrl});
  },
  async authMe(){
    return await instance.get('/auth/me').then(response => response.data)
  }
  // sendCode(value) {
  //   return instance.get(`/auth/code?email=${value}`);
  // }
}