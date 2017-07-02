import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notEmpty } from '../../utils/utility'

const mapStateToProps = ({ portfolio }) => ({
	portfolio
});

const calcTotal = (assets) => {
	let values;
	if (assets) {
		values = new Set(assets.map((asset) => asset.value));
	}
	return 0;
};

export function Header(props) {
	const assets = props.portfolio;
	console.log('assets', assets);
	let total = notEmpty(assets) ? calcTotal(assets) : 0;
	console.log(' total', total);
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

Header.propTypes = {
    objectWithShape: PropTypes.shape({
	    portfolio: PropTypes.array
	})
}