import React from 'react'

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
						<h1>COINHOVER</h1>
						<h2>Watch all your cryptocurrency<br/> asset balances in once place.</h2>
						<p>Currently in development...</p>
					</header>
					<footer>
						<ul>
							<li>
								<a href="https://github.com/CoinHover" target="_blank" title="Follow on Github">
									<div className="icon-github"></div>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/coinhover" target="_blank" title="Follow on Twitter">
									<div className="icon-twitter"></div>
								</a>
							</li>
							<li>
								<a href="https://www.facebook.com/coinhover/" target="_blank" title="Follow on Facebook">
									<div className="icon-facebook-squared"></div>
								</a>
							</li>
						</ul>
					</footer>
				</section>
			</div>
		)
	}
}

export default Portfolio;