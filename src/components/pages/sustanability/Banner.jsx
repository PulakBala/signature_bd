import React from 'react';

const Banner = ({ imageSrc, imageAlt, height = '600px' }) => {
    return (
        <section className="banner-section">
            <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="banner-image"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: height,
                    objectFit: 'cover',
                    minHeight: '250px'
                }}
            />
        </section>
    );
};

export default Banner;