import React from 'react'
import { connect } from "react-redux"
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'

const supportsHistory = "pushState" in window.history

class App extends React.Component {
	render() {
	    return (
			<Router forceRefresh={!supportsHistory}>
				<Routes />
			</Router>
	    );
	}
}

export default connect(null, null)(App)