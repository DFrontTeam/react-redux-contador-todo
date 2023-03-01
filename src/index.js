import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { reducers } from './store';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducers,applyMiddleware(thunk));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
