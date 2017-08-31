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
        save: PropTypes.func.isRequired,
        onCreateNewClick: PropTypes.func.isRequired,
    };

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            this.props.save();
        }
    }

    render() {
        return (
            <TodoListComponent
                list={this.props.list}
                editedItemId={this.props.editedItemId}
                createNewFormVisible={this.props.isCreateNewFormOpen}
                onCreateNewClick={this.props.onCreateNewClick}
            />
        );
    }
}

const DndTodoList = DragDropContext(HTML5Backend)(TodoList);
export { DndTodoList as TodoList };
