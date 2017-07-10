import React from 'react'
import { browserHistory, BrowserRouter, HashRouter, hashHistory, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'react-router';
import Portfolio from './portfolio/Portfolio'
import Home from './home/Home'
import NoMatch from './NoMatch'

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