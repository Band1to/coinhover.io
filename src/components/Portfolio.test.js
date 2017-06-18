import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Portfolio from './Portfolio'

const portfolioComponent = enzyme.shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
	it('should render', () => {
		const tree = toJson(portfolioComponent);
		expect(tree).toMatchSnapshot();
	});

	it('header contains the correct text', () => {
		const portfolio = enzyme.shallow(<Portfolio />);
		expect(portfolio.find(".welcome h1").text()).toEqual('COINHOVER');
		expect(portfolio.find(".welcome h2").text()).toEqual('Watch all your cryptocurrency asset balances in once place.');
	});
});