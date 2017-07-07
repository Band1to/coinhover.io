import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/Portfolio'
import Home from './home/Home'
import NoMatch from './NoMatch'

const Routes = () => {
    return (
        <Switch>
        	<Route exact={ true } path="/" component={ Home }/>
        	<Route exact={ true } path="/portfolio" component={ Portfolio }/>
        	<Route component={ NoMatch } />
        </Switch>
    );
}

export default Routes