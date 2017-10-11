import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { TodoListRedux } from '../../containers-redux/todo-list/TodoList.jsx';

const Content = () => [
    <Route exact path={routes.ROOT} component={TodoListRedux} key="default" />,
];

export { Content };