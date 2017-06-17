import React from 'react'
import PropTypes from 'prop-types'

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}

	render() {
		return (
			<div className="app-bg">
				<section className="welcome">
					<header>					
						<h1>CoinHover</h1>
						<h2>Watch all your cryptocurrency balances</h2>
						<p>Currently in development...</p>
					</header>
					<footer>
						<ul>
							<li>
								<div className="icon-github"></div>
							</li>
							<li>
								<div className="icon-twitter"></div>
							</li>
							<li>
								<div className="icon-facebook-squared"></div>
							</li>
						</ul>
					</footer>
				</section>
			</div>
		)
	}
}

export default Portfolio;