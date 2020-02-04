import React from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App'
import reducers from './Reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);