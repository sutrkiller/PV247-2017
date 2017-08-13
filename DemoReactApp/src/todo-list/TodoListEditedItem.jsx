import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ItemPane } from './TodoListItemStyles';

const ButtonRow = styled.div`
    display: flex;
    
    button + button {
        margin-left: 4px;
    }
`;

const FormPane = styled.div`
    padding: 8px;
`;

export class TodoListEditedItem extends React.Component {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        }).isRequired,
        onCancel: PropTypes.func.isRequired
    };

    render() {
        return (
            <ItemPane>
                <FormPane>
                    <form>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" value={this.props.item.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" rows="3" id="description" value={this.props.item.description} />
                        </div>
                        <ButtonRow>
                            <button className="btn btn-primary btn-sm" onClick={e => e.preventDefault()}>Save</button>
                            <button className="btn btn-default btn-sm" onClick={this.props.onCancel}>Cancel</button>
                        </ButtonRow>
                    </form>
                </FormPane>
            </ItemPane>
        );
    }
}