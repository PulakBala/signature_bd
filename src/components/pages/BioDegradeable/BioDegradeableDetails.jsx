import React from "react";
import BioSection from "./BioSection";

const BioDegradableDetails = () => {
    const sections = [
        {
            title: "100% Biodegradable and Compostable",
            text: "Our products are crafted with the planet in mind, ensuring they decompose naturally without leaving behind harmful residues. Made from eco-friendly materials, they break down into organic matter, enriching the soil and supporting the environment's natural processes. By choosing our biodegradable and compostable products, you contribute to a sustainable future, reduce environmental pollution, and help preserve the planet for future generations. Together, we can create a cleaner, greener world.",
            imgSrc: "/bio4.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "BIO Product Life-Cycle",
            text: "The journey of our bio-based products begins with the careful selection of natural, renewable resources, such as plant-based materials. These materials are processed into eco-friendly products designed for everyday use, ensuring minimal environmental impact. After their use, the products enter the biodegradation phase, breaking down naturally into organic components through composting or exposure to environmental conditions. This process enriches the soil, promoting sustainable growth and completing the cycle of renewal. Our BIO product life-cycle represents a commitment to harmony with nature, reducing waste, and fostering a sustainable future for the planet.",
            imgSrc: "/bio3.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "Benefits",
            text: "BIO products offer a range of benefits that make them an excellent choice for a sustainable future. They are environmentally friendly, decomposing naturally to reduce pollution and minimize environmental impact. Made from renewable resources, these products support the preservation of natural ecosystems while also being fully compostable, breaking down into nutrient-rich compost that promotes healthier soil and plant growth. By reducing landfill waste, BIO products contribute to waste management solutions, as they break down into organic materials instead of persisting as harmful waste. Additionally, they are safe and non-toxic, free from harmful chemicals, making them safe for both humans and the environment. Supporting a circular economy, BIO products encourage resource renewal through a complete life-cycle process, from production to composting. Embracing BIO products is a step toward green living, helping individuals and businesses reduce their carbon footprint and protect the planet for future generations.",
            imgSrc: "/bio5.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "RMG Accessories",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/bio1.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "Single Use Products",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/bio4.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        
        // Add more sections here
    ];

    return (
        <>
            <section className="hero-section">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <img 
                                src="/bio1.jpg" 
                                alt="Biodegradable Bags" 
                                className="img-fluid" 
                            />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h1 className="display-4 text-success font-weight-bold text-center text-lg-left">
                                100% Biodegradable and Compostable
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            {sections.map((section, index) => (
                <BioSection 
                    key={index}
                    title={section.title}
                    text={section.text}
                    imgSrc={section.imgSrc}
                    imgAlt={section.imgAlt}
                />
            ))}
        </>
    );
}

export default BioDegradableDetails;