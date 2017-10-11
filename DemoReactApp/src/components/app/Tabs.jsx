import * as React from 'react';

const Tabs = () => (
    <ul className="nav nav-tabs nav-justified">
        <li role="presentation" className="active">
            <a href="">Items</a>
        </li>
        <li role="presentation">
            <a href="">Profile</a>
        </li>
    </ul>
);

export { Tabs };