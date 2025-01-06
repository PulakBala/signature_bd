import React from "react";
import BioSection from "./BioSection";

const BioDegradableDetails = () => {
    const sections = [
        {
            title: "100% Biodegradable and Compostable",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/public/bio4.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "BIO Product Life-Cycle",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/public/bio3.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "Benefits",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/public/bio5.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "RMG Accessories",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/public/bio1.jpg",
            imgAlt: "Bio Product Life-Cycle"
        },

        {
            title: "Single Use Products",
            text: "Our bio products are made from cornstarch and free from petrochemicals. They are reusable, water-resistant, breathable, food safe, and will decompose into CO2 neutrally. We have the 'OK Compost' quality seal, thus ensuring they are 100% biodegradable & compostable. The 'OK Compost' quality seal was issued to us by the globally recognized TÜV Austria group.",
            imgSrc: "/public/bio4.jpg",
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
                                src="/public/bio1.jpg" 
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