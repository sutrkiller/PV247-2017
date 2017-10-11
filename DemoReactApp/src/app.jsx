require.context('../static/', true);
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ReactDom from 'react-dom';
import React from 'react';
import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { TodoApp } from './components/todo-list/TodoApp.jsx';
import { app } from './reducers/app';
import { getInitialState} from './utils/geInitialState';

const thunk = require('redux-thunk').default;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk, logger];

const store = createStore(app, getInitialState(), composeEnhancers(
    applyMiddleware(...middleware)
));

ReactDom.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('app'));
