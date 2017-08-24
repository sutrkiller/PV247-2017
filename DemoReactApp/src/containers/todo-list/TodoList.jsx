import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { TodoList as TodoListComponent } from '../../components/todo-list/TodoList.jsx';

class TodoList extends React.Component {

    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        editedItemId: PropTypes.string,
        onCreateNew: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onMove: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        onCancelEditing: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            createNewFormVisible: false,
            isDragging: false,
        };
    }

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            // note that this should be done in action creator instead
            // we will handle this in following commits
            localStorage.setItem('todoList', JSON.stringify(nextProps.list.toJS()));
        }
    }

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
        this.props.onCreateNew(newItem);
        this.setState(() => ({ createNewFormVisible: false }));
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
                list={this.props.list}
                editedItemId={this.props.editedItemId}
                createNewFormVisible={this.state.createNewFormVisible}
                isDragging={this.state.isDragging}
                onDelete={this.props.onDelete}
                onExpand={this.props.onStartEditing}
                onCancel={this.props.onCancelEditing}
                onSave={this.props.onUpdate}
                onReorder={this.props.onMove}
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
