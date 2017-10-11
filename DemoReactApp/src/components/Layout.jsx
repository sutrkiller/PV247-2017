import * as React from 'react';
import { Tabs } from './app/Tabs.jsx';
import { TodoListRedux } from '../containers-redux/todo-list/TodoList.jsx';
import { SavingStatus } from '../containers-redux/todo-list/SavingStatus.jsx';

const Layout = () => (
    <div className="container">
        <div className="row form-group">
            <div className="col-xs-12">
                <h1>TODO List</h1>
            </div>
            <div className="col-xs-7 col-md-4">
                <Tabs />
            </div>
            <div className="col-xs-2 col-md-2">
                <SavingStatus />
            </div>
        </div>
        <div className="row form-group">
            <TodoListRedux />
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

export { Layout };