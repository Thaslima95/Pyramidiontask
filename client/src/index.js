import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import logger from "redux-logger"
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import {rootReducer}  from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';






const rootReducer = (state,action)=> {return state;}

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer,{
  movies:[]
},composeWithDevTools(applyMiddleware(logger,thunk)));
root.render(
   <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
