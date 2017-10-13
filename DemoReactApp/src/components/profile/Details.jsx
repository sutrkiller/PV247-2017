import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from './Input.jsx';
import {
    validateNonEmptyness,
    validatePhone
} from '../../utils/validation';

const validateFullName = validateNonEmptyness('full name');

const Details = ({ handleSubmit, valid, anyTouched }) => (
    <div className="panel panel-default">
        <div className="panel-body">
            <form onSubmit={handleSubmit}>
                <Field
                    type="email"
                    placeholder="undefined@null.zero"
                    screenReaderName="E-mail"
                    glyphiconClassName="glyphicon-envelope"
                    readOnly
                    required
                    name="email"
                    component={Input}
                />
                <Field
                    type="text"
                    placeholder="David Allen"
                    screenReaderName="Full name"
                    glyphiconClassName="glyphicon-user"
                    name="fullName"
                    required
                    component={Input}
                    validate={validateFullName}
                />
                <Field
                    type="tel"
                    placeholder="0118 999 881 999 119 7253"
                    screenReaderName="Phone number"
                    glyphiconClassName="glyphicon-phone"
                    name="phone"
                    component={Input}
                    validate={validatePhone}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={anyTouched && !valid}
                >
                    Update details
                </button>
            </form>
        </div>
    </div>
);

Details.propTypes = {
    valid: PropTypes.bool.isRequired,
    anyTouched: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export { Details };