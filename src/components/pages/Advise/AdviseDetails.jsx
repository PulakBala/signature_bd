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
            <p className="py-5">Signature BD specializes in high-quality auto label (self-adhesive) printing that meets the diverse needs of businesses across industries. Our labels are designed for durability, precision, and easy application, making them ideal for packaging, branding, and product identification.

With advanced printing technology, we ensure vibrant colors, sharp details, and customizable designs that align perfectly with your brand’s identity. Whether you need labels for bottles, boxes, or other surfaces, our self-adhesive solutions adhere seamlessly and maintain their integrity even in challenging environments.

At Signature BD, we prioritize innovation and quality, offering reliable and visually appealing label printing services that help your products leave a lasting impression. Trust us to deliver labels that stick to your needs and elevate your brand.</p>
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