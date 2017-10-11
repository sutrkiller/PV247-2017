import * as React from 'react';
import { uuid } from '../../utils/uuidGenerator';

class Details extends React.PureComponent {
    componentWillMount() {
        this.setState({ componentId: uuid() });
    }

    render() {
        const { componentId } = this.state;
        const emailId = `${componentId}_email`;
        const fullNameId = `${componentId}_name`;
        const phoneId = `${componentId}_phone`;

        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label
                                className="sr-only"
                                htmlFor={emailId}
                            >
                                E-mail
                            </label>
                            <div className="input-group">
                                <div className="input-group-addon">
                                    <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                                </div>
                                <input
                                    className="form-control"
                                    type="email"
                                    id={emailId}
                                    placeholder="undefined@null.zero"
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-group">
                                <label
                                    className="sr-only"
                                    htmlFor={fullNameId}
                                >
                                    Full name
                                </label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id={fullNameId}
                                        placeholder="David Allen"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label
                                    className="sr-only"
                                    htmlFor={phoneId}
                                >
                                    Phone number
                                </label>
                                <div className="input-group">
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-phone" aria-hidden="true"></span>
                                    </div>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id={phoneId}
                                        placeholder="0118 999 881 999 119 7253"
                                    />
                                </div>
                            </div>
                        </div>

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
    }
}

export { Details };