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
        isCreateNewFormOpen: PropTypes.bool.isRequired,
        onCreateNew: PropTypes.func.isRequired,
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onMove: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        onCancelEditing: PropTypes.func.isRequired,
        onCreateNewClick: PropTypes.func.isRequired,
        onCreateNewCancel: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
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
                createNewFormVisible={this.props.isCreateNewFormOpen}
                isDragging={this.state.isDragging}
                onDelete={this.props.onDelete}
                onExpand={this.props.onStartEditing}
                onCancel={this.props.onCancelEditing}
                onSave={this.props.onUpdate}
                onReorder={this.props.onMove}
                onCreateNewClick={this.props.onCreateNewClick}
                onCreateCancel={this.props.onCreateNewCancel}
                onCreate={this.props.onCreateNew}
                onDragStarted={this._itemDragStarted}
                onDragEnded={this._itemDragEnded}
            />
        );
    }
}

const DndTodoList = DragDropContext(HTML5Backend)(TodoList);
export { DndTodoList as TodoList };
