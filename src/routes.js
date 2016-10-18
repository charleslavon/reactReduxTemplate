import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomeContainer from './containers/HomePageContainer';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomeContainer}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

