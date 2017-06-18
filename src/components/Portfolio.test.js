import React from 'react'
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json'
import Portfolio from './Portfolio'
import SocialMediaFooter from './SocialMediaFooter'
import AssetSideBar from './AssetSideBar'

const portfolio = enzyme.shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
	it('should render', () => {
		const tree = toJson(portfolio);
		expect(tree).toMatchSnapshot();
	});

	it('contains the AssetSideBar component', () => {
		expect(portfolio.find(AssetSideBar).length).toBe(1);
	});

	it('contains the SocialMediaFooter component', () => {
		expect(portfolio.find(SocialMediaFooter).length).toBe(1);
	});
});