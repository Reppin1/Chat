import { instance, UserApi } from "../../api/createUser";

const AUTH_GIT = 'AUTH_GIT'
const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_AVATAR = 'SET_AVATAR'
const SET_EMAIL = 'SET_EMAIL'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_AUTH_INFO = 'SET_AUTH_INFO'
const SET_INITIALS = 'SET_INITIALS'

const initialState = {
  initials: '',
  fullName: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  avatarUrl: '',
  isActive: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_GIT : {
      return { ...state, ...action.payload }
    }
    case SET_FIRST_NAME: {
      return { ...state, firstName: action.payload, fullName: '' }
    }
    case SET_LAST_NAME: {
      return { ...state, lastName: action.payload }
    }
    case SET_AVATAR: {
      return { ...state, avatarUrl: action.payload }
    }
    case SET_EMAIL: {
      return { ...state, email: action.payload }
    }
    case SET_PASSWORD: {
      return { ...state, password: action.payload }
    }
    case SET_AUTH_INFO: {
      return { ...state, ...action.payload }
    }
    case SET_INITIALS: {
      return { ...state, initials: action.payload }
    }
    default:
      return state
  }
};

export const authGit = (payload) => ({
  type: AUTH_GIT,
  payload
});

export const setFirstName = (payload) => ({
  type: SET_FIRST_NAME,
  payload
})

export const setLastName = (payload) => ({
  type: SET_LAST_NAME,
  payload
})

export const setAvatar = (payload) => ({
  type: SET_AVATAR,
  payload
})

export const setEmail = (payload) => ({
  type: SET_EMAIL,
  payload
})

export const setPassword = (payload) => ({
  type: SET_PASSWORD,
  payload
})

export const setInitials = (payload) => ({
  type: SET_INITIALS,
  payload
})

export const setAuthInfo = (payload) => ({
  type: SET_AUTH_INFO,
  payload
})

export const createUserAndSendSMS = (data) => async (dispatch) => {
  dispatch(setEmail(data.email))
  dispatch(setPassword(data.password))
  const result = await UserApi.createUser(data)
  if (result.status === 201) {
    await instance.get(`/auth/code?email=${data.email}`)
  }
}

export const authLogin = (data) => async (dispatch) => {
  const info = {
    email: data.email,
    password: data.password
  }
  try {
    const result = await UserApi.login(info)
    if (result.status === 200) {
      const user = await UserApi.authMe()
      if(user) {
        if(user.isActive) {
          dispatch(setAuthInfo(user))
        }
      }
    }
  } catch (e) {
    alert(`Пользователь с email: ${data.email} не найден`)
    console.log(e)
  }
}

export { authReducer }
