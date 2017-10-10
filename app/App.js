import React from 'react';
import { connect } from 'react-redux';
import Routes from './config/Routes';
import { setSearch } from './actions';
import local_coins from './coins.json';

class App extends React.Component {
  componentWillMount() {
    this.props.setSearch(local_coins);
  }

  render() {
    return (
      <Routes />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSearch: (...args) => { dispatch(setSearch(...args)); }
});

export default connect(null, mapDispatchToProps)(App);
