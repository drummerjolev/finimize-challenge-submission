import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import finimizeApp from './reducers';

import AppContainer from './AppContainer';
import './index.css';

let store = createStore(
  finimizeApp,
  applyMiddleware(
    thunkMiddleware,
  ),
);

render (
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
