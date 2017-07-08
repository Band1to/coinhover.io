import React from 'react'
import { browserHistory, BrowserRouter, hashHistory, Route, Switch } from 'react-router-dom'
import Portfolio from './portfolio/Portfolio'
import Home from './home/Home'
import NoMatch from './NoMatch'

const Routes = () => {
    return (
    	<BrowserRouter history={ browserHistory }>
	        <Switch>
	        	<Route exact={ true } path="/" component={ Home }/>
	        	<Route exact={ true } path="/portfolio" component={ Portfolio }/>
	        	<Route component={ NoMatch } />
	        </Switch>
        </BrowserRouter>
    );
}

export default Routes