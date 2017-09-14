import React from 'react';
import * as enzyme from 'enzyme';
import toJson from 'enzyme-to-json';
import Portfolio from './Portfolio';
import SocialMediaFooter from '../common/SocialMediaFooter';
// import Header from '../common/Header'
import AssetsTable from '../assetsTable/AssetsTable';
import local_coins from '../../coins.json';
import remote_coins from '../../remote_tokens.json';
import { updateLocalCoins } from '../../services/coinFactory';

const portfolio = enzyme.shallow(<Portfolio />);

describe('<Portfolio /> component', () => {
  it('should render', () => {
    const tree = toJson(portfolio);
    expect(tree).toMatchSnapshot();
  });

  // it('contains the Header component', () => {
  // 	portfolio.setState({ loading: false });
  // 	expect(portfolio.find(Header).length).toBe(1);
  // });

  it('contains the AssetsTable component', () => {
    portfolio.setState({ loading: false });
    expect(portfolio.find(AssetsTable).length).toBe(1);
  });

  it('contains the SocialMediaFooter component', () => {
    portfolio.setState({ loading: false });
    expect(portfolio.find(SocialMediaFooter).length).toBe(1);
  });
});

describe('updateLocalCoins in coinFactory', () => {
  it('should be defined', () => {
    expect(updateLocalCoins).toBeDefined();
  });

  // it('should return the same length as local_coins', () => {
  // 	expect(local_coins).toHaveLength(90);
  // 	expect(remote_coins).toHaveLength(919);
  // 	expect(updateLocalCoins(local_coins, remote_coins)).toHaveLength(local_coins.length);
  // });
});
