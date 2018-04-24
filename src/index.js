import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { mainReducer as reducers } from './reducers/reducer';

import App from './components/App';

let makeMiddlewareStore = applyMiddleware(thunkMiddleware, logger)(createStore);
let store = makeMiddlewareStore(reducers);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);