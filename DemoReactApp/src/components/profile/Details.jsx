import * as React from 'react';
import { Input } from './Input.jsx';

const Details = () => (
    <div className="panel panel-default">
        <div className="panel-body">
            <form>
                <Input
                    type="email"
                    placeholder="undefined@null.zero"
                    screenReaderName="E-mail"
                    glyphiconClassName="glyphicon-envelope"
                    input={{}}
                    readOnly
                />
                <Input
                    type="text"
                    placeholder="David Allen"
                    screenReaderName="Full name"
                    glyphiconClassName="glyphicon-user"
                    input={{}}
                />
                <Input
                    type="tel"
                    placeholder="0118 999 881 999 119 7253"
                    screenReaderName="Phone number"
                    glyphiconClassName="glyphicon-phone"
                    input={{}}
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

export { Details };