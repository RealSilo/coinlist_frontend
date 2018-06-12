import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/rootReducer';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
