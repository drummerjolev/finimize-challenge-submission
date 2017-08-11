import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import finimizeApp from './reducers';

import AppContainer from './AppContainer';
import './index.css';

let store = createStore(finimizeApp);

render (
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
