import * as React from 'react';
import { AvatarImage } from './Avatar.styles';

const Avatar = () => (
    <div className="panel panel-default">
        <AvatarImage
            className="img-rounded"
            alt="Profile picture"
        />
    </div>
);

export { Avatar };