import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './AuthReducer/authReducer';
import { dialogReducer } from './DialogReducer/dialogReducer';
import { messageReducer } from './MessageReducer/messageReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  dialogs: dialogReducer,
  messages: messageReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export { store };
