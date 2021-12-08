import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { authReducer } from "./AuthReducer/authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import { dialogReducer } from "./DialogReducer/dialogReducer";
import { messageReducer } from "./MessageReducer/messageReducer";

const rootReducer = combineReducers({
  auth : authReducer,
  dialog: dialogReducer,
  message: messageReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export { store };
