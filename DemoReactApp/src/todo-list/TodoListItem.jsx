import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemPane = styled.div`
    border-radius: 2px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    
    & + & {
        margin-top: 8px;
    }
    
    &:hover {
        background-color: #f5f5f5;
    }
`;

const TitlePane = styled.div`
    cursor: pointer;
    padding: 0 4px;
    display: flex;
    align-items: center;
    width: 100%;   
`;

const ActionPane = styled.div`;
    display: flex;
`;

const Action = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    color: #777;
    
    &:hover {
        background-color: #eee;
        color: #555;
    }
`;

const DangerAction = Action.extend`
     &:hover {
        background-color: #d9534f;
        color: #FFF;
    }
`;

export class TodoListItem extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        }).isRequired,
        onDelete: PropTypes.func.isRequired
    };

    render() {
        return (
            <ItemPane>
                <ActionPane>
                    <Action>
                        <i className="glyphicon glyphicon-menu-down" aria-hidden="true"/>
                    </Action>
                </ActionPane>
                <TitlePane>
                    {this.props.item.title}
                    </TitlePane>
                <ActionPane>
                    <DangerAction onClick={() => this.props.onDelete(this.props.item.id)}>
                        <i className="glyphicon glyphicon-remove" aria-hidden="true"/>
                    </DangerAction>
                </ActionPane>
            </ItemPane>
        );
    }
}