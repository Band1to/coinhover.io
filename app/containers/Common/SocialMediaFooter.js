import React from 'react';

export default function SocialMediaFooter() {
  return (
    <footer>
      <ul>
        <li>
          <em>&copy; { new Date().getFullYear() } coinhover.io</em>
        </li>
        <li>
          <a href="https://github.com/CoinHover" target="_blank" title="Follow on Github">
            <div className="icon-github" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/coinhover" target="_blank" title="Follow on Twitter">
            <div className="icon-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/coinhover/" target="_blank" title="Follow on Facebook">
            <div className="icon-facebook-squared" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
