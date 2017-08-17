import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import {TodoListEditedItem} from '../../containers/todo-list/TodoListEditedItem.jsx';
import {TodoListBarItem} from '../../containers/todo-list/TodoListBarItem.jsx';
import { TodoListNewItem } from './TodoListNewItem.jsx';
import { ButtonRow } from './TodoList.styles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

function TodoList(props) {
    let itemElements = props.list.map(item =>
            item.id === props.editedItemId ? (
                <CSSTransition key={`edited-${item.id}`} timeout={{enter: 250, exit: 150}} classNames="edited-item" >
                    <TodoListEditedItem
                        item={item}
                        onCancel={props.onCancel}
                        onSubmit={props.onSave}
                        submitButtonText="Save"
                    />
                </CSSTransition>
            ) : (
                <CSSTransition key={`bar-${item.id}`} timeout={{enter: 150, exit: 0}} classNames="bar-item">
                    <TodoListBarItem
                        key={item.id}
                        item={item}
                        expandDisabled={!!props.editedItemId || props.isDragging}
                        reorderDisabled={!!props.editedItemId ||  props.isDragging}
                        onDelete={() => props.onDelete(item.id)}
                        onExpand={() => props.onExpand(item.id)}
                        onReorder={props.onReorder}
                        onDragStarted={props.onDragStarted}
                        onDragEnded={props.onDragEnded}
                    />
                </CSSTransition>
            )
    );

    if (props.createNewFormVisible) {
        itemElements = itemElements.push((
            <CSSTransition key="new-item" timeout={{ enter: 350, exit: 150}} classNames="new-item">
                <TodoListNewItem onCancel={props.onCreateCancel} onCreate={props.onCreate} />
            </CSSTransition>
        ));
    }

    return (
        <div>
            <div className="row">
                <div className="col-xs-12 col-sm-9 col-md-6">
                    <TransitionGroup>
                        {itemElements}
                    </TransitionGroup>
                </div>
            </div>
            <ButtonRow className="row">
                <div className="col-xs-12 col-sm-9 col-md-6">
                    {!props.createNewFormVisible ?
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={props.onCreateNewClick}
                        >
                            Create new
                        </button> : null}
                </div>
            </ButtonRow>
        </div>
    );
}

TodoList.propTypes = {
    list: PropTypes.instanceOf(Immutable.List).isRequired,
    editedItemId: PropTypes.string,
    createNewFormVisible: PropTypes.bool,
    isDragging: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,
    onCreateNewClick: PropTypes.func.isRequired,
    onCreateCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    onDragStarted: PropTypes.func.isRequired,
    onDragEnded: PropTypes.func.isRequired
};

export { TodoList };