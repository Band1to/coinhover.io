import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Portfolio from './Portfolio'
import SocialMediaFooter from './common/SocialMediaFooter'

const portfolio = enzyme.shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
	it('should render', () => {
		const tree = toJson(portfolio);
		expect(tree).toMatchSnapshot();
	});

	it('header contains the correct text', () => {
		expect(portfolio.find(".welcome h1").text()).toEqual('COINHOVER');
		expect(portfolio.find(".welcome h2").text()).toEqual('Watch all your cryptocurrency asset balances in once place.');
	});

	it('contains the SocialMediaFooter component', () => {
		expect(portfolio.find(SocialMediaFooter).length).toBe(1);
	});
});