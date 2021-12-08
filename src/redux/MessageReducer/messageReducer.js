const SET_MESSAGE = 'SET_MESSAGE'

const initialState = {
  item: [],
}

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return  { ...state, item: action.payload }
    }
    default:
      return state
  }
}

export const setMessage = (item) => ({
  type: SET_MESSAGE,
  payload: item
})