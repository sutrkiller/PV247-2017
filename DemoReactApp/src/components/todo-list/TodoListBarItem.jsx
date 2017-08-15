import React from 'react';
import PropTypes from 'prop-types';
import {
    ItemBar,
    TitlePane,
    Title,
    ActionPane,
    Action,
    DangerAction,
} from './TodoListBarItemStyles';

function TodoListBarItem(props) {
    return (
        <ItemBar disabled={props.expandDisabled}>
            <ActionPane>
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
    );
}

TodoListBarItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onExpand: PropTypes.func.isRequired,
    expandDisabled: PropTypes.bool,
};

export { TodoListBarItem };