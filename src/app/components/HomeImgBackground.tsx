import React, { useEffect } from 'react';

export default function HomeImgBackground() {
	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			const { clientX, clientY } = event;

			const img = document.querySelector('.home-introduction-img');
			const imgRect = img ? img.getBoundingClientRect() : null;
			const imgWidth = imgRect ? imgRect.width : 0;
			const imgHeight = imgRect ? imgRect.height : 0;

			// Calculate tilt values based on mouse position
			let tiltX = 0;
			if (imgRect) {
				tiltX = (clientY - imgRect.top) / imgHeight - 0.5;
			}
			let tiltY = 0;
			if (imgRect) {
				tiltY = (clientX - imgRect.left) / imgWidth - 0.5;
			}

			// Clamp tilt values to stay within the boundaries
			tiltX = Math.min(Math.max(tiltX, -0.5), 0.5);
			tiltY = Math.min(Math.max(tiltY, -0.5), 0.5);

			// Apply transformation to the image
			if (img) {
				const img = document.querySelector('.home-introduction-img') as HTMLDivElement;
				img.style.transform = `rotateX(${tiltX * 30}deg) rotateY(${tiltY * 30}deg)`;
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return (
		<div className="home-introduction-img-content">
			<div className='home-introduction-img'></div>
		</div>
	);
}