'use client';
import React from 'react';
import HomeHobbyImgAnimation from './HomeHobbyImgAnimation';
import Burger from './Burger';

export default function HomeAboutMe(){
	return(
		<div className="mb-10 ">
			<h2 className="mb-6">About me</h2>
			<p>In the kitchen or at the keyboard, I find <span className="bodoni-moda-italic-uppercase">my joy</span>. Crafting delightful websites and experimenting with new recipes are <span className="bodoni-moda-italic-uppercase">my passions</span>.</p>
			<HomeHobbyImgAnimation />
			<p>Now, here&apos;s a glimpse of my <span className="bodoni-moda-italic-uppercase">tech stack</span><br/>served up like a <span className="bodoni-moda-italic-uppercase">tempting burger</span></p>
			<Burger />
		</div>
	);
}