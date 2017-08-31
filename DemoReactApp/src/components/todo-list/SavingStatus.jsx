import Immutable from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { SavingIcon } from './SavingStatus.styles.jsx';

export class SavingStatus extends React.PureComponent {

    static propTypes = {
        list: PropTypes.instanceOf(Immutable.List).isRequired,
        isSaving: PropTypes.bool.isRequired,
        save: PropTypes.func.isRequired,
    };

    componentWillUpdate(nextProps) {
        if (this.props.list !== nextProps.list) {
            this.props.save();
        }
    }

    render() {
        const text = this.props.isSaving ? 'Saving' : 'Saved';
        const icon = this.props.isSaving
            ? <SavingIcon alt="saving">_</SavingIcon>
            : <i className="glyphicon glyphicon-check" alt="Saved"/>;

        return (
            <span className="pull-right">
                {icon}{'\u00A0'}{text}
            </span>
        );
    }
}
