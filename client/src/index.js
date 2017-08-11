import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import finimizeApp from './reducers';

import App from './App';
import './index.css';

let store = createStore(finimizeApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
