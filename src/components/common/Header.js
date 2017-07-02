import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const mapStateToProps = ({ portfolio }) => ({
	portfolio
});

export function Header(props) {
	console.log('Header props', props);
	let total = 0;
	return (
		<header>
			<h1><span className="plus">+</span>COINHOVER</h1>
			<h2>Watch your cryptocurrency asset balances in once place.</h2>
			<em className="num">${ total }</em>
		</header>
	)
}

const HeaderContainer = Header;
export default connect(mapStateToProps, null)(HeaderContainer);