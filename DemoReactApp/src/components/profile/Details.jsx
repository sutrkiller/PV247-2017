import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from './Input.jsx';

const Details = ({ handleSubmit }) => (
    <div className="panel panel-default">
        <div className="panel-body">
            <form onSubmit={handleSubmit}>
                <Field
                    type="email"
                    placeholder="undefined@null.zero"
                    screenReaderName="E-mail"
                    glyphiconClassName="glyphicon-envelope"
                    readOnly
                    name="email"
                    component={Input}
                />
                <Field
                    type="text"
                    placeholder="David Allen"
                    screenReaderName="Full name"
                    glyphiconClassName="glyphicon-user"
                    name="fullName"
                    component={Input}
                />
                <Field
                    type="tel"
                    placeholder="0118 999 881 999 119 7253"
                    screenReaderName="Phone number"
                    glyphiconClassName="glyphicon-phone"
                    name="phone"
                    component={Input}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Update details
                </button>
            </form>
        </div>
    </div>
);

Details.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export { Details };