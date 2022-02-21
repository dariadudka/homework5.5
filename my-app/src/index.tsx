import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './AppComponent';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { DifficultTimer } from './store/timer.store';


export const difficultTimer = new DifficultTimer();

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
            <AppComponent/>
          </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
