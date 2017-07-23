import React from 'react'
import { browserHistory, HashRouter, Route, Switch } from 'react-router-dom'
import { Portfolio } from 'components'
import { Home } from 'components'
import { NoMatch } from 'components'

const Routes = () => {
  return (
	  <HashRouter history={ browserHistory }>
      <Switch>
      	<Route exact={ true } path="/" component={ Home }/>
      	<Route exact={ true } path="/portfolio" component={ Portfolio }/>
      	<Route component={ NoMatch } />
      </Switch>
    </HashRouter>
  );
}

export default Routes
