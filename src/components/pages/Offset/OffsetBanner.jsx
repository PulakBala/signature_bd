import React from "react";


const OffsetBanner = ({ cardsData = [
    { imageSrc: '/offset6.jpg'},
    { imageSrc: '/offset7.jpeg'},
    { imageSrc: '/offset8.jpg'},
    { imageSrc: '/offset5.jpeg'}
] }) =>{
    return(
        <>
            <section className="banner-section pb-5">
            <img 
                src='/offset_H.png' 
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
            <p className="py-5">Signature BD takes pride in delivering exceptional printing solutions with a focus on quality and precision. Our offset printing services are designed to produce sharp, vibrant, and professional prints on a wide range of materials. Whether it’s brochures, catalogs, or product packaging, we ensure that every detail reflects excellence, helping your brand stand out in today’s competitive market.

To complement our offset printing, we offer durable and high-quality backboards that provide added strength and a premium look to your products. These backboards not only protect the contents but also enhance the overall presentation, making them ideal for retail displays and packaging solutions.

At Signature BD, we believe in crafting printing solutions that elevate your brand, combining advanced technology and creative expertise to deliver the best results for your business. Trust us to bring your vision to life with unmatched quality and professionalism.</p>
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