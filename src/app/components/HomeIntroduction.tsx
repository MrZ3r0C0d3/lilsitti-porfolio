'use client';
import React from 'react';
import HomeImgBackground from './HomeImgBackground';

export default function HomeIntroduction() {
    
	return(
		<div className="grid home-introduction-section">
			<HomeImgBackground/>
			<div>
				<h1>Sittichot<br></br>Phikhasorn</h1>
				<h2>Do what <span className="bodoni-moda-italic-uppercase">I love</span></h2>
				<h2>Love what <span className="bodoni-moda-italic-uppercase" >I do</span></h2>
			</div>
			<div className="text-right">
				<h2 className="bodoni-moda-italic-uppercase">Passionate</h2>
				<h2>Web Developper</h2>
			</div>
		</div>
	);
}