import React from 'react'

export default function SocialMediaFooter() {
	return (
		<footer>
			<ul>
				<li>
					<em>&copy; { new Date().getFullYear() } coinhover.io</em>
				</li>
				<li>
					<a href="https://github.com/CoinHover" target="_blank" title="Follow on Github">
						<div className="icon-github"></div>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/coinhover" target="_blank" title="Follow on Twitter">
						<div className="icon-twitter"></div>
					</a>
				</li>
				<li>
					<a href="https://www.facebook.com/coinhover/" target="_blank" title="Follow on Facebook">
						<div className="icon-facebook-squared"></div>
					</a>
				</li>
			</ul>
		</footer>
	)
}