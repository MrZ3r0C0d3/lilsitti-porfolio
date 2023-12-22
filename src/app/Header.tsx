import React from 'react';

export default function Header() {
	return (
		<div className="flex justify-between p-5 bg-gray-200">
			<div>
				<a>Lil Sitti</a>
			</div>
			<nav>
				<ul className="flex space-x-4">
					<li><a>About Me</a></li>
					<li><a>Projects</a></li>
					<li><a>Contact</a></li>
				</ul>
			</nav>
		</div>
	);
}