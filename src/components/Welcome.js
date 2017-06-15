import React from 'react'
import PropTypes from 'prop-types'
export default function Welcome (props) {
	return (
		<div className="app-bg">
			<section className="welcome">
				<header>					
					<h1>CoinHover</h1>
					<h2>Watch all your balances</h2>
				</header>
				<section className="coin-table">
					<p>Add Coin</p>
					<div className="ico-add"></div>
					<div className="coin-input"></div>
				</section>
			</section>
		</div>
	)
}