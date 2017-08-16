import React from 'react';
import PropTypes from 'prop-types';
import { TodoListEditedItem as TodoListEditedItemComponent } from '../../components/todo-list/TodoListEditedItem.jsx';

export class TodoListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        }).isRequired,
        onCancel: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            editedItem: props.item
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.item !== nextProps.item) {
            this.setState({
                editedItem: nextProps.item,
            });
        }
    }

    _onTitleChange = (event) => {
        const value = event.target.value;

        this.setState((previousState) => ({
            editedItem: {
                ...previousState.editedItem,
                title: value
            }
        }));
    };

    _onDescriptionChange = (event) => {
        const value = event.target.value;

        this.setState((previousState) => ({
            editedItem: {
                ...previousState.editedItem,
                description: value
            }
        }));
    };

    render() {
        return (
            <TodoListEditedItemComponent
                item={this.state.editedItem}
                saveDisabled={this.state.editedItem === this.props.item}
                onTitleChange={this._onTitleChange}
                onDescriptionChange={this._onDescriptionChange}
                onCancel={this.props.onCancel}
                onSave={() => this.props.onSave(this.state.editedItem)}
            />
        );
    }
}