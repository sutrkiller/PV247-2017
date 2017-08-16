import React from 'react';
import PropTypes from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import { ItemPane } from './TodoListItemStyles';
import { TodoListBarItem } from './TodoListBarItem.jsx';
import { TodoListEditedItem } from './TodoListEditedItem.jsx';

function TodoListItem(props) {
    return (
        <CSSTransition
            timeout={{enter: 250, exit: 150}}
            classNames="edited-item"
            in={props.isEdited}
        >
            <ItemPane>
                {props.isEdited ? (
                    <TodoListEditedItem
                        key={`edited-${props.item.id}`}
                        item={props.item}
                        onCancel={props.onCancel}
                        onSave={props.onSave}
                    />) : (
                    <TodoListBarItem
                        key={props.item.id}
                        item={props.item}
                        expandDisabled={props.expandDisabled}
                        reorderDisabled={props.reorderDisabled}
                        onDelete={props.onDelete}
                        onExpand={props.onExpand}
                        onReorder={props.onReorder}
                    />
                )}
            </ItemPane>
        </CSSTransition>
    );
}

TodoListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
    isEdited: PropTypes.bool,
    expandDisabled: PropTypes.bool,
    reorderDisabled: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
};

export { TodoListItem };