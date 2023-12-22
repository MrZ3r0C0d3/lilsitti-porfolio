import React, { useState } from 'react';
import Frontend from './FrontendBurger';

export default function Burger() {

	const [techStack, setTechStack] = useState<React.ReactNode>(null);;
	
	const [fillColors, setFillColors] = useState({
		top: '#EAE2D7',
		bottom: '#EAE2D7',
		tomato: '#EAE2D7',
		salade: '#EAE2D7',
		cheese: '#EAE2D7',
		patty: '#EAE2D7',
	});

	const handleTopClick = () => {
		setFillColors({
			top: '#F4C064',
			bottom: '#EAE2D7',
			tomato: '#EAE2D7',
			salade: '#EAE2D7',
			cheese: '#EAE2D7',
			patty: '#EAE2D7',
		});
		setTechStack(<Frontend />);
	};

	const handleBottomClick = () => {
		setFillColors({
			top: '#EAE2D7',
			bottom: '#F4C064',
			tomato: '#EAE2D7',
			salade: '#EAE2D7',
			cheese: '#EAE2D7',
			patty: '#EAE2D7',
		});
		setTechStack(null);
	};

	const handleMiddleClick = () => {
		setFillColors({
			top: '#EAE2D7',
			bottom: '#EAE2D7',
			tomato: '#FF603E',
			salade: '#91F18B',
			cheese: '#FFE954',
			patty: '#99774F',
		});
		setTechStack(null);
	};

	return (
		<div className='flex flex-col my-20'>
			
			<svg className="z-[9999] mx-auto max-h-[300px] w-auto" viewBox="0 0 376 366" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="burger_icon">
					<g id="bottom_part" onClick={handleBottomClick} fill={fillColors.bottom}>
						<path id="Rectangle 1" d="M6 292H370V306C370 337.48 344.48 363 313 363H63C31.5198 363 6 337.48 6 306V292Z" stroke="black" strokeWidth="6"/>
					</g>
					<g id="mid_part" onClick={handleMiddleClick}>
						<rect fill={fillColors.patty} id="patty" x="6" y="209" width="364" height="64" rx="32" stroke="black" strokeWidth="6"/>
						<rect fill={fillColors.tomato} id="tomato" x="6" y="155" width="364" height="35" rx="17.5"  stroke="black" strokeWidth="6"/>
						<path fill={fillColors.salade} id="salade" fillRule="evenodd" clipRule="evenodd" d="M3 211.292C3 215.716 4.37745 220.029 6.94103 223.633L8.55 225.895C14.1 233.699 25.5083 249.306 36.6083 250.866C47.7083 252.427 59.1167 239.942 70.2167 233.699C81.625 227.456 92.725 227.456 103.825 225.895C115.233 224.335 126.333 221.213 137.433 219.653C148.842 218.092 159.942 218.092 171.042 214.971C182.45 211.849 193.55 205.607 204.958 208.728C216.058 211.849 227.158 224.335 238.567 233.699C249.667 243.063 260.767 249.306 272.175 246.184C283.275 243.063 294.375 230.577 305.783 229.017C316.883 227.456 328.292 236.82 339.392 233.699C350.492 230.577 361.9 214.971 367.45 207.167L371.686 201.211C372.541 200.01 373 198.572 373 197.097V195.55C373 192.485 370.515 190 367.45 190C361.9 190 350.492 190 339.392 190C328.292 190 316.883 190 305.783 190C294.375 190 283.275 190 272.175 190C260.767 190 249.667 190 238.567 190C227.158 190 216.058 190 204.958 190C193.55 190 182.45 190 171.042 190C159.942 190 148.842 190 137.433 190C126.333 190 115.233 190 103.825 190C92.725 190 81.625 190 70.2167 190C59.1167 190 47.7083 190 36.6083 190C25.5083 190 14.1 190 8.55 190C5.48482 190 3 192.485 3 195.55V211.292Z"  stroke="black" strokeWidth="6"/>
						<path fill={fillColors.cheese} id="cheese" d="M188.009 229.241C190.48 230.663 193.52 230.663 195.991 229.241L299.458 169.683C306.556 165.597 303.657 154.75 295.467 154.75H88.533C80.3428 154.75 77.4437 165.597 84.5421 169.683L188.009 229.241Z" stroke="black" strokeWidth="6"/>
					</g>
					<g id="top_part" onClick={handleTopClick} fill={fillColors.top}>
						<g id="Ellipse 1">
							<mask id="path-6-inside-1_16_281" fill="white">
								<path d="M373 139C373 120.746 368.215 102.671 358.918 85.807C349.621 68.9427 335.994 53.6195 318.815 40.7122C301.636 27.8048 281.242 17.5661 258.796 10.5807C236.351 3.59534 212.295 -7.97896e-07 188 0C163.705 7.97897e-07 139.649 3.59534 117.204 10.5807C94.7583 17.5662 74.3641 27.8048 57.1852 40.7122C40.0064 53.6195 26.3794 68.9428 17.0823 85.807C7.78516 102.671 3 120.746 3 139L188 139H373Z"/>
							</mask>
							<path d="M373 139C373 120.746 368.215 102.671 358.918 85.807C349.621 68.9427 335.994 53.6195 318.815 40.7122C301.636 27.8048 281.242 17.5661 258.796 10.5807C236.351 3.59534 212.295 -7.97896e-07 188 0C163.705 7.97897e-07 139.649 3.59534 117.204 10.5807C94.7583 17.5662 74.3641 27.8048 57.1852 40.7122C40.0064 53.6195 26.3794 68.9428 17.0823 85.807C7.78516 102.671 3 120.746 3 139L188 139H373Z" stroke="black" strokeWidth="12" mask="url(#path-6-inside-1_16_281)"/>
						</g>
					</g>
					<rect id="Rectangle 4" x="253" y="45" width="19" height="11" rx="5.5" fill="black"/>
					<rect id="Rectangle 5" x="291" y="62" width="19" height="11" rx="5.5" fill="black"/>
					<rect id="Rectangle 6" x="267" y="79" width="19" height="11" rx="5.5" fill="black"/>
					<rect id="Rectangle 7" x="304" y="96" width="19" height="11" rx="5.5" fill="black"/>
				</g>
				
			</svg>
			<div className='relative'>
				{techStack}
			</div>
			
		</div>
		

	);
}