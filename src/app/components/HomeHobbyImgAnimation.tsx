import React from "react";
import programmingSvg from '../../../public/programming.svg';
import cookingSvg from '../../../public/programming.svg';
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

export default function HomeHobbyImgAnimation() {
    return(
        <div className="my-12" >
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
                
            itemOne={<ReactCompareSliderImage src="/programming.svg" alt="Image one" style={{maxHeight: '590px', width: 'auto', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#EAE2D7'}} />}
            itemTwo={<ReactCompareSliderImage src="/cooking.svg" alt="Image two" style={{maxHeight: '590px', width: 'auto', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#EAE2D7'}} />}
            />
        </div>
        
    )
};