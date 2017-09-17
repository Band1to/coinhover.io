import React from 'react';
import { connect } from 'react-redux';
import Routes from './config/Routes';

class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default connect(null, null)(App);
