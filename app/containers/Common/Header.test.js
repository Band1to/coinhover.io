import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from './Header';

const header = enzyme.shallow(<Header />);

describe('<Header /> component', () => {
  it('should render', () => {
    const tree = toJson(header);
    expect(tree).toMatchSnapshot();
  });
});
