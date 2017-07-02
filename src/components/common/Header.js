import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notEmpty } from '../../utils/utility'

const mapStateToProps = ({ portfolio }) => ({
	portfolio
});

const calcTotal = (assets) => {
	const values = assets.map((asset) => asset.value);
	const total = values.reduce((sum, value) => sum + value, 0);
	return total;
};

export function Header({ portfolio = [] }) {
	const assets = portfolio;
	let total = notEmpty(assets) ? calcTotal(assets) : 0;

	return (
		<header>
			<h1><span className="plus">+</span>COINHOVER</h1>
			<h2>Watch your cryptocurrency asset balances in once place.</h2>
			<em className="num">${ total.toFixed(2) }</em>
		</header>
	)
}

const HeaderContainer = Header;
export default connect(mapStateToProps, null)(HeaderContainer);

Header.propTypes = {
    objectWithShape: PropTypes.shape({
	    portfolio: PropTypes.array
	})
}