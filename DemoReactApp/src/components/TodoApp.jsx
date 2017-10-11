import React from 'react';
import { SavingStatus } from '../../containers-redux/todo-list/SavingStatus.jsx';
import { TodoListRedux } from '../../containers-redux/todo-list/TodoList.jsx';

export class TodoApp extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1>TODO List</h1>
                    </div>
                    <div className="col-sm-9 col-md-6">
                        <SavingStatus />
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
