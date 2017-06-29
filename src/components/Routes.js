import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/Portfolio'
import NoMatch from './NoMatch'

const Routes = () => {
    return (
        <Switch>
        	<Route exact={ true } path="/" component={ Portfolio }/>
        	<Route component={ NoMatch } />
        </Switch>
    );
}

export default Routes