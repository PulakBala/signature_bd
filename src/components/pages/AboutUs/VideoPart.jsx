// src/components/MainContent.jsx
import React, { useRef, useEffect } from 'react';

const VidePart = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		const videoElement = videoRef.current;

		const handleIntersection = (entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					videoElement.play();  // Play the video when in view
				} else {
					videoElement.pause();  // Pause the video when out of view
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.5,  // Adjust this value as needed
		});

		if (videoElement) {
			observer.observe(videoElement);
		}

		return () => {
			if (videoElement) {
				observer.unobserve(videoElement);
			}
		};
	}, []);

	return (
		<main style={{ padding: '20px' }}>
			<section className='pb-5'> 
				<video
					ref={videoRef}  // Reference to the video element
					src="/46.mp4"  // Apnar video file er path din
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
