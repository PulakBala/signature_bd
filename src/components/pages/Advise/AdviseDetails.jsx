import React from "react";
import './AdviseDetails.css';


const AdviseDetails = ({ cardsData = [
    { imageSrc: '/public/advise.jpg', headline: 'Card 1 Headline' },
    { imageSrc: '/public/advise2.jpg', headline: 'Card 2 Headline' },
    { imageSrc: '/public/advise3.jpg', headline: 'Card 3 Headline' },
    { imageSrc: '/public/advise4.jpg', headline: 'Card 4 Headline' }
] }) =>{
    return(
        <>
            <section className="banner-section pb-5">
            <img 
                src='/public/adviseBanner.png' 
                className="banner-image"
                style={{
                    width: '100%',
                    height: '600px',
                    maxHeight: 'auto',
                    objectFit: 'cover',
                    minHeight: '250px'
                }}
            />
            <div className="container pb-5">
            <p className="py-5">Offset printing by Expo Accessories Ltd. offers high-quality, precision printing suitable for various applications, including brochures, catalogs, and packaging. Utilizing advanced technology, the company ensures vibrant colors, sharp images, and consistent results on a wide range of materials. Ideal for large-volume orders, Expo Accessories Ltd. combines efficiency with exceptional print quality to meet diverse business needs.</p>
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <div key={index} className="card">
                        <img 
                            src={card.imageSrc} 
                            alt={`Card ${index + 1}`} 
                            className="card-image"
                            style={{ width: '100%', height: '250px' }}
                        />
                    </div>
                ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default AdviseDetails;