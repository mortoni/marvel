import { createStore, applyMiddleware, compose } from 'redux'
import {createLogger} from 'redux-logger'
import reducer from '../Reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger({
})

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
