import React from 'react';
import ProjectPoster from './ProjectPoster';

export default function HomeProject(){ 
	return(
		<div className="my-10">
			<h2 className="mb-6">Project</h2>
			<p>Step into my <span className="bodoni-moda-italic-uppercase">coding kitchen</span> and <span className="bodoni-moda-italic-uppercase">savor</span> the digital wonders I&lsquo;ve crafted. Each project is a <span className="bodoni-moda-italic-uppercase">unique</span> recipe of <span className="bodoni-moda-italic-uppercase">passion</span> and <span className="bodoni-moda-italic-uppercase">innovation</span>. Click, explore, and relish the taste of <span className="bodoni-moda-italic-uppercase">my web creations</span>.</p>
			<div className="grid grid-cols-3 below-tablet:grid-cols-1 below-desktop:grid-cols-2 justify-items-center gap-y-12 max-w-[1920px]">
				<ProjectPoster title='Bartendu' src='/Bartendu.jpg' href='https://google.com' />
				<ProjectPoster title='Bartendu' src='/Bartendu.jpg' href='https://google.com'/>
				<ProjectPoster title='Bartendu' src='/Bartendu.jpg' href='https://google.com' />
			</div>
		</div>
	);
}