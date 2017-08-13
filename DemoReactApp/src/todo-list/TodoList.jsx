import React from 'react';
import { uuid } from '../Utils/uuidGenerator';
import Immutable from 'immutable';
import { TodoListItem} from './TodoListItem.jsx';
import styled from 'styled-components';
import { TodoListEditedItem } from './TodoListEditedItem.jsx';

const ButtonRow = styled.div`
    margin-top: 16px;
`;

export class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            list: Immutable.List([
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
            ]),
            editedItemId: null
        };
    }

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

    render() {
        const { list } = this.state;

        const itemElements = list.map(item => {
            if (item.id === this.state.editedItemId) {
                return <TodoListEditedItem
                    key={`edited-${item.id}`}
                    item={item}
                    onCancel={this._cancelEditing}
                />;
            }

            return <TodoListItem
                key={item.id}
                item={item}
                onDelete={this._deleteItem}
                onExpand={this._startEditing}
            />;
        });

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
                            Add
                        </button>
                    </div>
                </ButtonRow>
            </div>
        );
    }
}