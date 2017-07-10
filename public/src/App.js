import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './components/Routes'

const supportsHistory = "pushState" in window.history

			// <Router forceRefresh={!supportsHistory}>
			// </Router>
class App extends React.Component {
	render() {
	    return (
			<Routes />
	    );
	}
}

export default connect(null, null)(App)