import React from 'react';

type ClipperProps = {
    className?: string,
}

export default function Clipper({className} : ClipperProps = {className: ''}) {
	return(
		<svg className={className} width="53" height="87" viewBox="0 0 53 87" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.685059" y="9.99988" width="45" height="66" transform="rotate(0.594716 0.685059 9.99988)" fill="#99774F"/>
			<rect y="4.42859" width="45" height="82.7041" transform="rotate(-5.64782 0 4.42859)" fill="#C3945D"/>
		</svg>
	);
}
