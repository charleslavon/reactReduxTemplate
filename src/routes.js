import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import AppFrame from './components/AppFrame';
import Message from './components/Message';
import ActivitiesContainer from './containers/ActivitiesContainer';
import WorkoutsContainer from './containers/WorkoutsContainer';
import StartupContainer from './containers/StartupContainer';
import InboxContainer from './containers/InboxContainer';
import NotFoundPage from './components/NotFoundPage.js';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={StartupContainer}/>
            <Route component={AppFrame}>
                <Route path="wods" component={WorkoutsContainer}/>
                <Route path="activities" component={ActivitiesContainer}/>
                <Route path="inbox" component={InboxContainer}/>
                <Route path="inbox(/:id)" component={InboxContainer}>
                    <IndexRoute component={Message}/>
                </Route>
            </Route>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </Router>
);
