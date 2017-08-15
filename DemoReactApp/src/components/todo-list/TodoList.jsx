import React from 'react';
import { uuid } from '../../utils/uuidGenerator';
import Immutable from 'immutable';
import styled from 'styled-components';
import { TodoListItem } from './TodoListItem.jsx';

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

    render() {
        const { list } = this.state;

        const itemElements = list.map(item => (
            <TodoListItem
                key={item.id}
                item={item}
                isEdited={item.id === this.state.editedItemId}
                expandDisabled={!!this.state.editedItemId}
                onDelete={() => this._deleteItem(item.id)}
                onExpand={() => this._startEditing(item.id)}
                onCancel={this._cancelEditing}
                onSave={this._updateItem}
            />
        ));

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