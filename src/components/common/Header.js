import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notEmpty } from '../../utils/utility'
import { calcTotal } from '../../utils/math'

const mapStateToProps = ({ portfolio }) => ({
	portfolio
});

export function Header({ portfolio = [] }) {
	const total = notEmpty(portfolio) ? calcTotal(portfolio) : 0;

	return (
		<header>
			<h1><span className="plus">+</span>COINHOVER</h1>
			<h2>The cryptocurrency portfolio calculator.</h2>
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