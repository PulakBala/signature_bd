// src/components/MainContent.jsx
import React from 'react';

const VidePart = () => {
		return (
				<main style={{ padding: '20px' }}>
						<section className='pb-5'> 
						<video
								src="./public/about-video.mp4"  // Apnar video file er path din
								style={{
										width: '100%',  // Full width of the container
										height: 'auto',  // Auto height to maintain aspect ratio
										objectFit: 'fill',  // Fill the video container area
								}}
								controls  // Optional: Video controls add korte chaile
						/>
						</section>
				</main>
		);
};

export default VidePart;
