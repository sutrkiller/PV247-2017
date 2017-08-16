import React from 'react';
import PropTypes from 'prop-types';
import { FormPane, ButtonRow } from './TodoListEditedItem.styles';

export class TodoListEditedItem extends React.PureComponent {
    static propTypes = {
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string
        }).isRequired,
        saveDisabled: PropTypes.bool,
        onTitleChange: PropTypes.func.isRequired,
        onDescriptionChange: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired
    };

    render() {
        return (
            <FormPane>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" value={this.props.item.title} onChange={this.props.onTitleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control"
                                  rows="3"
                                  id="description"
                                  value={this.props.item.description}
                                  onChange={this.props.onDescriptionChange} />
                    </div>
                    <ButtonRow>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            disabled={this.props.saveDisabled}
                            onClick={this.props.onSave}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-sm"
                            onClick={this.props.onCancel}
                        >
                            Cancel
                        </button>
                    </ButtonRow>
                </form>
            </FormPane>
        );
    }
}