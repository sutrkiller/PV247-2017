import * as React from 'react';
import * as PropTypes from 'prop-types';
import { uuid } from '../../utils/uuidGenerator';

class Input extends React.Component {
    static propTypes = {
        screenReaderName: PropTypes.string.isRequired,
        glyphiconClassName: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        readOnly: PropTypes.bool,
        input: PropTypes.shape({
            value: PropTypes.string.isRequired,
        }).isRequired,
    };

    componentWillMount() {
        this.setState({ componentId: uuid() });
    }

    render() {
        const inputName = `input_${this.state.componentId}`;

        return (
            <div className="form-group">
                <label
                    className="sr-only"
                    htmlFor={inputName}
                >
                    {this.props.screenReaderName}
                </label>
                <div className="input-group">
                    <div className="input-group-addon">
                        <span className={`glyphicon ${this.props.glyphiconClassName}`} aria-hidden="true"></span>
                    </div>
                    <input
                        {...this.props.input}
                        type={this.props.type}
                        className="form-control"
                        id={inputName}
                        placeholder={this.props.placeholder}
                        readOnly={this.props.readOnly}
                    />
                </div>
            </div>
        );
    }
}

export { Input };