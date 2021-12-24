const SET_MESSAGES = 'SET_MESSAGES';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const SET_USER_TO_CHAT_WITH = 'SET_USER_TO_CHAT_WITH';

const initialState = {
  messages: [],
  user: {},
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES: {
      return {...state, messages: action.payload};
    }
    case ADD_NEW_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    }
    case SET_USER_TO_CHAT_WITH: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setMessage = (message) => ({
  type: SET_MESSAGES,
  payload: message,
});

export const setUserToChatWith = (user) => ({
  type: SET_USER_TO_CHAT_WITH,
  payload: user,
});

export const addNewMessage = (message) => ({
  type: ADD_NEW_MESSAGE,
  payload: message,
});
