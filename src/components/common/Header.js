import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// const mapStateToProps = ({ portfolio }) => ({
// 	portfolio
// });

export default function Header(props) {
	let total = 0;
	return (
		<header>
			<h1><span className="plus">+</span>COINHOVER</h1>
			<h2>Watch your cryptocurrency asset balances in once place.</h2>
			<em className="num">${ total }</em>
		</header>
	)
}

// export default Portfolio;
// const PortfolioContainer = Portfolio;
// export default connect(mapStateToProps, null)(PortfolioContainer);