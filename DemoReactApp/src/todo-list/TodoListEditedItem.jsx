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
            <ItemPane>
                <FormPane>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" value={this.state.editedItem.title} onChange={this._onTitleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control"
                                      rows="3"
                                      id="description"
                                      value={this.state.editedItem.description}
                                      onChange={this._onDescriptionChange} />
                        </div>
                        <ButtonRow>
                            <button className="btn btn-primary btn-sm"
                                    disabled={this.state.editedItem === this.props.item}
                                    onClick={() => this.props.onSave(this.state.editedItem)}>Save
                            </button>
                            <button className="btn btn-default btn-sm" onClick={this.props.onCancel}>Cancel</button>
                        </ButtonRow>
                    </form>
                </FormPane>
            </ItemPane>
        );
    }
}