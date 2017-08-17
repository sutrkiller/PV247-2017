import React from 'react';
import { uuid } from '../../utils/uuidGenerator';
import Immutable from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { TodoList as TodoListComponent } from '../../components/todo-list/TodoList.jsx';

class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            list: this._loadInitialTodoList(),
            editedItemId: null,
            createNewFormVisible: false,
            isDragging: false,
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

    _showCreateNewForm = () => {
        this.setState({
            createNewFormVisible: true,
        });
    };

    _hideCreateNewForm = () => {
        this.setState({
            createNewFormVisible: false,
        });
    };

    _createNewItem = (newItem) => {
        this.setState((previousState) => ({
            list: previousState.list.push({...newItem}),
            createNewFormVisible: false,
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

    _moveItem = (moveItemId, destinationItemId) => {
        this.setState(previousState => {
            const moveItemIndex = previousState.list.findIndex(item => item.id === moveItemId);
            const destinationItemIndex = previousState.list.findIndex(item => item.id === destinationItemId);

            if ((moveItemIndex >= 0) && (destinationItemIndex >= 0)) {
                const movedItem = previousState.list.get(moveItemIndex);

                return {
                    list: previousState.list.delete(moveItemIndex).insert(destinationItemIndex, movedItem)
                };
            }

            return {};
        });
    };

    _itemDragStarted = () => {
        this.setState({
            isDragging: true,
        });
    };

    _itemDragEnded = () => {
        this.setState({
            isDragging: false,
        });
    };

    render() {
        return (
            <TodoListComponent
                list={this.state.list}
                editedItemId={this.state.editedItemId}
                createNewFormVisible={this.state.createNewFormVisible}
                isDragging={this.state.isDragging}
                onDelete={this._deleteItem}
                onExpand={this._startEditing}
                onCancel={this._cancelEditing}
                onSave={this._updateItem}
                onReorder={this._moveItem}
                onCreateNewClick={this._showCreateNewForm}
                onCreateCancel={this._hideCreateNewForm}
                onCreate={this._createNewItem}
                onDragStarted={this._itemDragStarted}
                onDragEnded={this._itemDragEnded}
            />
        );
    }
}

const DndTodoList = DragDropContext(HTML5Backend)(TodoList);
export { DndTodoList as TodoList };