import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import reducer from '../reducers';

const middlewares = [promise];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
