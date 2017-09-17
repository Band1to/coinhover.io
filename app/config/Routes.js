import React from 'react';
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom';
import { Portfolio } from 'containers';
import { Home } from 'containers';
import { NoMatch } from 'containers';

const Routes = () => (
  <HashRouter history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route component={NoMatch} />
    </Switch>
  </HashRouter>
);

export default Routes;
