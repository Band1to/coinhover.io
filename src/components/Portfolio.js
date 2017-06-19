import React from 'react'
import SocialMediaFooter from './SocialMediaFooter'
import AssetsTable from './AssetsTable'
import data from '../models/temp'

class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}

	render() {
		return (
			<div className="app-bg">
				<section className="portfolio">
					<header>
						<h1><span className="plus">+</span>COINHOVER</h1>
						<h2>Watch your cryptocurrency asset balances in once place.</h2>
					</header>
					<AssetsTable data={ data }/>
					<SocialMediaFooter />
				</section>
			</div>
		)
	}
}

export default Portfolio;