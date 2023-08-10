import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));
//여러개의 미들웨어 적용

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
