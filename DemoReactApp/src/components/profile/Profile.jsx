import * as React from 'react';
import { Avatar } from './Avatar.jsx';
import { Details } from '../../containers-redux/profile/Details.jsx';

const Profile = () => [
    <div className="col-xs-12 col-md-2" key="picture">
        <Avatar />
    </div>,
    <div className="col-xs-12 col-md-4" key="details">
        <Details />
    </div>
];

export { Profile };