import React from 'react';
import { hashHistory } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SocialMediaFooter from '../Common/SocialMediaFooter';

export default function Home(props) {
  return (
    <div className="app-bg">
      <section className="welcome">
        <h1><span className="plus">+</span>COINHOVER</h1>
        <h2>The cryptocurrency portfolio calculator.</h2>
        <Link to="/portfolio">
          <button>Create a Portfolio</button>
        </Link>
        <SocialMediaFooter />
      </section>
    </div>
  );
}
