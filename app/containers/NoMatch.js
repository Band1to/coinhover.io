import React from 'react';
import SocialMediaFooter from './common/SocialMediaFooter';

export default function NoMatch() {
  return (
    <div className="app-bg">
      <section className="welcome">
        <h1>COINHOVER</h1>
        <p>Oops, could not find that...</p>
        <p>Did you mean: <a href="/">coinhover.io</a></p>
        <SocialMediaFooter />
      </section>
    </div>
  );
}
