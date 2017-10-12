import * as React from 'react';
import { Tabs } from './Tabs.jsx';
import { Content } from './Content.jsx';
import { SavingStatus } from '../../containers-redux/todo-list/SavingStatus.jsx';
import { LogoutButton } from '../../containers-redux/app/LogoutButton.jsx';

const ContentLayout = () => (
    <div className="container">
        <div className="row">
            <div className="col-xs-5">
                <h1>TODO List</h1>
            </div>
            <div className="col-xs-2 col-xs-push-2 col-md-1 col-md-push-0 text-right">
                <h6>
                    <LogoutButton />
                </h6>
            </div>
        </div>
        <div className="row form-group">
            <div className="col-xs-7 col-md-4">
                <Tabs />
            </div>
            <div className="col-xs-2 col-md-2">
                <SavingStatus />
            </div>
        </div>
        <div className="row form-group">
            <Content />
        </div>
        <div className="row">
            <div className="col-xs-12">
                <h5>PV247{' '}
                    <small>2017</small>
                </h5>
            </div>
        </div>
    </div>
);

export { ContentLayout };