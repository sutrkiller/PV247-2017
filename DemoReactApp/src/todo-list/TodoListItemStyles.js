import styled from 'styled-components';

export const ItemPane = styled.div`
    border-radius: 2px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    
    & + & {
        margin-top: 8px;
    }
    
    &.edited-item-enter {
        height: 40px;
    }
    
    &.edited-item-enter.edited-item-enter-active {
       height: 234px;
       transition: height 250ms ease-in;
    }
    
    &.edited-item-exit {
        height: 234px;
    }
    
    &.edited-item-exit.edited-item-exit-active {
        height: 40px;
        transition: height 150ms ease-in;
    }
`;

export const ItemBar = styled.div`
    display: flex;
    
    &:hover {
        background-color: #f5f5f5;
    }
`;

export const TitlePane = styled.div`
    cursor: pointer;
    padding: 0 4px;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 0;
`;

export const Title = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ActionPane = styled.div`;
    display: flex;
`;

export const Action = styled.div`
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

export const DangerAction = Action.extend`
     &:hover {
        background-color: #d9534f;
        color: #FFF;
    }
`;