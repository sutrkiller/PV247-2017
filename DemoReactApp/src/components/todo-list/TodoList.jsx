import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { TodoListItem } from './TodoListItem.jsx';
import { ButtonRow } from './TodoList.styles';

function TodoList(props) {
    const itemElements = props.list.map(item => (
        <TodoListItem
            key={item.id}
            item={item}
            isEdited={item.id === props.editedItemId}
            expandDisabled={!!props.editedItemId}
            reorderDisabled={!!props.editedItemId}
            onDelete={() => props.onDelete(item.id)}
            onExpand={() => props.onExpand(item.id)}
            onCancel={props.onCancel}
            onSave={props.onSave}
            onReorder={props.onReorder}
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
                        onClick={props.onAdd}
                    >
                        Create new
                    </button>
                </div>
            </ButtonRow>
        </div>
    );
}

TodoList.propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    editedItemId: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
};

export { TodoList };