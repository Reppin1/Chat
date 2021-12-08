import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
})

export const UserApi = {
  async createUser({firstName,lastName,email,password,avatarUrl}){
    return await instance.post('auth/registrations', {firstName,lastName,email,password,avatarUrl});
  },
  authMe(){
    return instance.get('/auth/me').then(response => response.data)
  },
  async login({email, password}) {
    return await instance.post('auth/login', {email, password})
  },
  logout() {
    return instance.get('/auth/logout')
  }
  // sendCode(value) {
  //   return instance.get(`/auth/code?email=${value}`);
  // }
}