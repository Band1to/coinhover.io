import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Portfolio from './Portfolio'

const portfolioComponent = shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
	it('should render', () => {
		const tree = toJson(portfolioComponent);
		expect(tree).toMatchSnapshot();
	});
});