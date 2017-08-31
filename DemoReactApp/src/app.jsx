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
import { TodoListRedux } from './containers-redux/todo-list/TodoList.jsx';
import { app } from './reducers/app';
import { getInitialItems } from './utils/getInitialItems';

const initialState = { todoApp: { itemsList: getInitialItems() } };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger];

const store = createStore(app, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));

class MyComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>TODO List</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <TodoListRedux />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <h5>PV247{' '}
                            <small>2017</small>
                        </h5>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDom.render(
    <Provider store={store}>
        <MyComponent />
    </Provider>,
    document.getElementById('app'));
