import React from 'react';
import Clipper from '../../../public/Clipper';
import Image from 'next/image';

type ProjectProps = {
        title: string,
        src: string,
        href: string,
    }

export default function ProjectPoster(
	{title , src , href } : ProjectProps

){
	return(
		<div className='relative '>
			<hr className='border-solid border-4 border-black z-0  absolute w-[1000%] p-0 m-0 left-[-500%] top-[18px]' />
			<Clipper className='relative top-[2.5%] left-[35%] z-20'/>
			<a href={href} target='_blank'>
				<div className='bg-white w-[300px] h-[350px] flex flex-col project-image-container drop-shadow-md'>
					<div className='mx-3 py-8 flex flex-col '>
						<div className='h-[225px] max-h-[225px] w-auto bg-black '>
							<Image src={src} alt={title} width={1000} height={250} layout="responsive" loading="lazy" />
						</div>
						<div className='text-[24px] mt-3 bodoni-moda'>{title}</div>
					</div>
				</div> 
			</a>
			
		</div>
	);
}