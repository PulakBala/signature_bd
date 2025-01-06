import React from "react";


const OffsetBanner = ({ cardsData = [
    { imageSrc: '/public/offset1.jpg', headline: 'Card 1 Headline' },
    { imageSrc: '/public/offset2.jpg', headline: 'Card 2 Headline' },
    { imageSrc: '/public/offset3.jpg', headline: 'Card 3 Headline' },
    { imageSrc: '/public/offset4.webp', headline: 'Card 4 Headline' }
] }) =>{
    return(
        <>
            <section className="banner-section py-5">
            <img 
                src='/public/offsetBanner.png' 
                className="banner-image"
                style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: 'auto',
                    objectFit: 'cover',
                    minHeight: '250px'
                }}
            />
            <div className="container pb-5">
            <p className="py-5">Offset printing by Expo Accessories Ltd. offers high-quality, precision printing suitable for various applications, including brochures, catalogs, and packaging. Utilizing advanced technology, the company ensures vibrant colors, sharp images, and consistent results on a wide range of materials. Ideal for large-volume orders, Expo Accessories Ltd. combines efficiency with exceptional print quality to meet diverse business needs.</p>
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                {cardsData.map((card, index) => (
                    <div key={index} className="card" style={{ flex: '0 0 calc(25% - 10px)', margin: '0 5px' }}>
                        <img 
                            src={card.imageSrc} 
                            alt={`Card ${index + 1}`} 
                            className="card-image"
                            style={{ width: '100%', height: '250px' }}
                        />
                        <h3>{card.headline}</h3>
                    </div>
                ))}
            </div>
            </div>
        </section>
        </>
    )
}

export default OffsetBanner;