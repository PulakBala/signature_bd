import React from "react";

const BioSection = ({ title, text, imgSrc, imgAlt }) => {
    return (
        <section className="content-section">
            <div className="container py-5">
                <h2 className="text-center text-uppercase p-2 text-white" style={{ backgroundColor: '#70ad00' }}>
                    {title}
                </h2>
                <div className="row d-flex justify-content-between align-items-center mt-4">
                    <div className="col-md-6 " style={{textAlign: "justify"}}>
                        <p>{text}</p>
                    </div>
                    <div className="col-md-6 d-flex mx-auto">
                        <img 
                            src={imgSrc} 
                            alt={imgAlt} 
                            className="img-fluid" 
                            style={{ maxWidth: '100%', height: 'auto' }} 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BioSection;