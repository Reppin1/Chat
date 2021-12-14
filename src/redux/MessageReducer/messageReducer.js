const SET_MESSAGES = 'SET_MESSAGES';

const initialState = {
  messages: [],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      return {...state, messages: action.payload};
    }
    default:
      return state;
  }
};

export const setMessage = (item) => ({
  type: SET_MESSAGES,
  payload: item,
});
