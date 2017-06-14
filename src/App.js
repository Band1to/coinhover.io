import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'
const supportsHistory = "pushState" in window.history

export default class App extends React.Component {
	render() {
	    return (
			<Router forceRefresh={!supportsHistory}>
				<Routes />
			</Router>
	    );
	}
}