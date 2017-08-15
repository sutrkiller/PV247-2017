import React from 'react';
import { uuid } from '../Utils/uuidGenerator';
import Immutable from 'immutable';
import { TodoListItem } from './TodoListItem.jsx';
import styled from 'styled-components';
import { TodoListEditedItem } from './TodoListEditedItem.jsx';
import CSSTransition from 'react-transition-group/CSSTransition';

const ButtonRow = styled.div`
    margin-top: 16px;
`;

export class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            list: this._loadInitialTodoList(),
            editedItemId: null,
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if (this.state.list !== nextState.list) {
            localStorage.setItem('todoList', JSON.stringify(nextState.list.toJS()));
        }
    }

    _getDefaultTodoList = () => {
        return Immutable.List([
            {
                id: uuid(),
                title: 'Wash dishes',
                description: 'Not again!'
            },
            {
                id: uuid(),
                title: 'Kill spider',
                description: 'All lives matter'
            }
        ]);
    };

    _loadInitialTodoList = () => {
        const storedListJSON = localStorage.getItem('todoList');
        return storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : this._getDefaultTodoList();
    };

    _onAddClick = () => {
        this.setState((previousState) => ({
            list: previousState.list.push({
                id: uuid(),
                title: 'New item',
                description: ''
            })
        }));
    };

    _deleteItem = (deletedItemId) => {
        this.setState((previousState) => ({
            list: previousState.list.filterNot(item => item.id === deletedItemId)
        }));
    };

    _startEditing = (itemId) => {
        this.setState({
            editedItemId: itemId
        });
    };

    _cancelEditing = () => {
        this.setState({
            editedItemId: null
        });
    };

    _updateItem = (item) => {
        this.setState(previousState => {
            let newState = {
                editedItemId: null,
            };

            const itemIndex = previousState.list.findIndex(i => i.id === item.id);
            if (itemIndex >= 0) {
                newState.list = previousState.list.update(itemIndex, previousItem => ({...previousItem, ...item}));
            }

            return newState;
        });
    };

    _renderTodoItem = (item) => {
        const itemComponent = item.id === this.state.editedItemId ? (
            <TodoListEditedItem
                key={`edited-${item.id}`}
                item={item}
                onCancel={this._cancelEditing}
                onSave={this._updateItem}
            />) : (
            <TodoListItem
                key={item.id}
                item={item}
                onDelete={this._deleteItem}
                onExpand={this._startEditing}
            />);

        return (
            <CSSTransition
                key={item.id}
                timeout={{enter: 250, exit: 150}}
                classNames="edited-item"
                in={item.id === this.state.editedItemId}
            >
                {itemComponent}
            </CSSTransition>
        );
    };

    render() {
        const { list } = this.state;

        const itemElements = list.map(this._renderTodoItem).toJS();

        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-sm-9 col-md-6">
                        {itemElements}
                    </div>
                </div>
                <ButtonRow className="row">
                    <div className="col-xs-12 col-sm-9 col-md-6">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this._onAddClick}
                        >
                            Create new
                        </button>
                    </div>
                </ButtonRow>
            </div>
        );
    }
}