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
        isDragging: PropTypes.bool.isRequired,
        onDelete: PropTypes.func.isRequired,
        onMove: PropTypes.func.isRequired,
        onStartEditing: PropTypes.func.isRequired,
        onCreateNewClick: PropTypes.func.isRequired,
        onDragStarted: PropTypes.func.isRequired,
        onDragEnded: PropTypes.func.isRequired,
    };

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            // note that this should be done in action creator instead
            // we will handle this in following commits
            localStorage.setItem('todoList', JSON.stringify(nextProps.list.toJS()));
        }
    }

    render() {
        return (
            <TodoListComponent
                list={this.props.list}
                editedItemId={this.props.editedItemId}
                createNewFormVisible={this.props.isCreateNewFormOpen}
                isDragging={this.props.isDragging}
                onDelete={this.props.onDelete}
                onExpand={this.props.onStartEditing}
                onReorder={this.props.onMove}
                onCreateNewClick={this.props.onCreateNewClick}
                onDragStarted={this.props.onDragStarted}
                onDragEnded={this.props.onDragEnded}
            />
        );
    }
}

const DndTodoList = DragDropContext(HTML5Backend)(TodoList);
export { DndTodoList as TodoList };
