import React from "react";

const CorggotedDetails = ({ cardsData = [

    { imageSrc: '/cor6.jpg', headline: 'Card 1 Headline' },
    { imageSrc: '/cor10.webp', headline: 'Card 2 Headline' },
   
] }) =>{
    return(
        <>
            <section className="banner-section pb-5">
            <img 
                src='/carttondesign.png' 
                className="banner-image"
                style={{
                    width: '100%',
                    height: 'auto', // Change made here
                    objectFit: 'cover',
                    minHeight: '250px'
                }}
            />
            <div className="container pb-5">
            <p className="py-5">CORROGATED CARTON is a versatile and eco-friendly packaging solution that provides excellent protection for a wide range of products. Made from recycled materials, these cartons are not only sustainable but also lightweight, making them an ideal choice for shipping and storage.

With their robust structure, corrugated cartons can withstand the rigors of transportation while ensuring that your products arrive in perfect condition. They are customizable in size and design, allowing businesses to create packaging that reflects their brand identity. Whether for retail, e-commerce, or industrial use, corrugated cartons offer a reliable and cost-effective solution for all your packaging needs.

At Signature BD, we understand the importance of quality packaging, and our corrugated cartons are designed to meet the highest standards of durability and performance. Trust us to provide packaging solutions that protect your products and enhance your brand's image.</p>
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <div key={index} className="card" >
                        <img 
                            src={card.imageSrc} 
                            alt={`Card ${index + 1}`} 
                            className="card-image"
                            style={{ width: '100%', height: '400px' }}
                        />
                    </div>
                ))}
            </div>
            </div>
        </section>

        </>
    )
}

export default CorggotedDetails;