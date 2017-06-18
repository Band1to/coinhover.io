import React from 'react'
import SocialMediaFooter from './SocialMediaFooter'

export default function NoMatch() {
	return (
		<div className="app-bg">
			<section className="welcome">				
				<h1>COINHOVER</h1>
				<p>Oops, could not find that... did you mean</p>
				<p><a href="/">coinhover.io</a></p>
				<SocialMediaFooter />
			</section>
		</div>
	)
}