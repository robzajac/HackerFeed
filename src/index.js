import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { mainReducer as reducers } from './reducers/reducer';

import App from './components/App';

const store = createStore(reducers);

render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);