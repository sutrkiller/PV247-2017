import React from 'react';
import PropTypes from 'prop-types';
import { TodoListEditedItem } from '../../containers/todo-list/TodoListEditedItem.jsx';
import { uuid } from '../../utils/uuidGenerator';

export class TodoListNewItem extends React.PureComponent {
    static propTypes = {
        onCreate: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
    }

    emptyItem = {
        id: uuid(),
        title: '',
        description: ''
    };

    render() {
        return (
            <TodoListEditedItem
                item={this.emptyItem}
                onCancel={this.props.onCancel}
                onSubmit={this.props.onCreate}
                submitButtonText="Create"
            />
        );
    }
}