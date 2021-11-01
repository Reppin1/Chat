import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from "./AuthReducer/authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  auth : authReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export { store };
