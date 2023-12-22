import React from 'react';
import ProgrammingSVG from '../../../public/programming';
import CookingSVG from '../../../public/cooking';
import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

export default function HomeHobbyImgAnimation() {
	return(
		<div className="my-12 max-h-[590px]" >
			<ReactCompareSlider 
				style={{
					display: 'flex', 
					border: '',}}
				handle={<ReactCompareSliderHandle 
					style={{
						color: 'black',
						boxShadow: '',
					}}
					linesStyle={{
						boxShadow: '',
						width: '4px',
					}}
					buttonStyle={{
						display: 'none',
					}}
				/>}
                
				itemOne={<ProgrammingSVG/>}
				itemTwo={<CookingSVG/>}

			/>
		</div>
        
	);
}