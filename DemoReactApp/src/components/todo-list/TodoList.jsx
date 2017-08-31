import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import { TodoListEditedItem } from '../../containers-redux/todo-list/TodoListEditedItem.jsx';
import { TodoListBarItem } from '../../containers-redux/todo-list/TodoListBarItem.jsx';
import { TodoListNewItem } from '../../containers-redux/todo-list/TodoListNewItem.jsx';
import { ButtonRow } from './TodoList.styles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

function TodoList(props) {
    let itemElements = props.list.map(item =>
            item.id === props.editedItemId ? (
                <CSSTransition key={`edited-${item.id}`} timeout={{enter: 250, exit: 150}} classNames="edited-item" >
                    <TodoListEditedItem key={item.id} item={item} submitButtonText="Save" />
                </CSSTransition>
            ) : (
                <CSSTransition key={`bar-${item.id}`} timeout={{enter: 150, exit: 0}} classNames="bar-item">
                    <TodoListBarItem key={item.id} item={item} />
                </CSSTransition>
            )
    );

    if (props.createNewFormVisible) {
        itemElements = itemElements.push((
            <CSSTransition key="new-item" timeout={{ enter: 350, exit: 150}} classNames="new-item">
                <TodoListNewItem />
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
    onCreateNewClick: PropTypes.func.isRequired,
};

export { TodoList };
