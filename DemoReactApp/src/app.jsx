import '../node_modules/bootstrap/dist/css/bootstrap.css';

import ReactDom from 'react-dom';
import React from 'react';

class MyComponent extends React.Component {
    render() {
        return (
            <h1>It{' '}
                <span className="label label-default">works</span>{' '}
                <span className="glyphicon glyphicon-ok" aria-hidden="true" />
            </h1>);
    }
}

ReactDom.render(<MyComponent/>, document.getElementById('app'));