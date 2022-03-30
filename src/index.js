import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { requestBlogs, setTitle, setResult, setBody, setConfirmPassword, setSignUpName, setPendingState, setSearchingFor, setSignInEmail, setSignInPassword, setWrongDetails } from './Redux/Reducers';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// const logger = createLogger()
const rootReducer = combineReducers({setConfirmPassword, setSignUpName, setBody, setResult, setSearchingFor, setTitle, requestBlogs, setPendingState, setSignInEmail, setSignInPassword, setWrongDetails})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));    
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
