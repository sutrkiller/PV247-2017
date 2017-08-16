import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import {
    ItemBar,
    TitlePane,
    Title,
    ActionPane,
    Action,
    DangerAction,
    GrabAction
} from './TodoListBarItemStyles';

const todoItemDragSourceSpecs = {
    beginDrag(props) {
        return { draggedItemId: props.item.id };
    },

    canDrag(props) {
        return !props.reorderDisabled;
    }
};

function collectDragSourceProps(connect) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
    };
}

const todoItemDropTargetSpecs = {
    hover(props, monitor) {
        const draggedItemId = monitor.getItem().draggedItemId;
        const hoveredItemId = props.item.id;

        if (draggedItemId !== hoveredItemId) {
            props.onReorder(draggedItemId, hoveredItemId);
        }
    }
};

function collectDropTargetProps(connect) {
    return {
        connectDropTarget: connect.dropTarget()
    };
}

function ConnectDnd(props) {
    return props.connectFunc(
        <div>
            {props.children}
        </div>
    );
}

ConnectDnd.prototypes = {
    connectFunc: PropTypes.func.isRequired
};

function TodoListBarItem(props) {
    return (
        <ConnectDnd connectFunc={props.connectDropTarget}>
            <ConnectDnd connectFunc={props.connectDragPreview}>
                <ItemBar disabled={props.expandDisabled}>
                    <ActionPane>
                        <ConnectDnd connectFunc={props.connectDragSource}>
                            <GrabAction disabled={props.reorderDisabled}>
                                <i className="glyphicon" aria-hidden="true" />
                            </GrabAction>
                        </ConnectDnd>
                        <Action disabled={props.expandDisabled} onClick={props.expandDisabled ? null : props.onExpand}>
                            <i className="glyphicon glyphicon-menu-down" aria-hidden="true" />
                        </Action>
                    </ActionPane>
                    <TitlePane disabled={props.expandDisabled} onClick={props.expandDisabled ? null : props.onExpand}>
                        <Title>{props.item.title}</Title>
                    </TitlePane>
                    <ActionPane>
                        <DangerAction onClick={() => props.onDelete()}>
                            <i className="glyphicon glyphicon-remove" aria-hidden="true" />
                        </DangerAction>
                    </ActionPane>
                </ItemBar>
            </ConnectDnd>
        </ConnectDnd>
    );
}

TodoListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
    expandDisabled: PropTypes.bool,
    reorderDisabled: PropTypes.bool,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    onReorder: PropTypes.func.isRequired,

    //React-dnd props
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
};

const DragTodoListBarItem = DragSource('TodoItem', todoItemDragSourceSpecs, collectDragSourceProps)(
    DropTarget('TodoItem', todoItemDropTargetSpecs, collectDropTargetProps)(TodoListBarItem));
export { DragTodoListBarItem as TodoListBarItem };