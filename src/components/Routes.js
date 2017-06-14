import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Welcome from './Welcome'
// import Dashboard from './Dashboard'
// import NoMatch from './NoMatch'

const Routes = () => {
    return (
        <Switch>
        	<Route exact={ true } path="/" component={ Welcome }/>
        	{/*<Route path="/dashboard" component={ Dashboard }/>*/}
        	{/*<Route component={ NoMatch } />*/}
        </Switch>
    );
}

export default Routes