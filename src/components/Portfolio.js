import React from 'react'
import SocialMediaFooter from './common/SocialMediaFooter'

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
						<h1><span className="plus">+</span> COINHOVER</h1>
						<h2>The cryptocurrency calculator</h2>
						<p>Currently in development...</p>
					</header>
					<SocialMediaFooter />
				</section>
			</div>
		)
	}
}

export default Portfolio;