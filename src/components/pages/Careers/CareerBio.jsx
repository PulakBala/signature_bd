import React from 'react';

const CareerBio = () => {
    return (
        <>
            <section className="bg-white py-4 py-md-4 col-lg-8 mx-auto px-2 px-md-0">

                <div className='container'>
                    <div className='row'>
                        <div className='mx-auto'>
                            <p style={{ 
                                textAlign: 'justify',
                                wordWrap: 'break-word',
                                overflowWrap: 'break-word'
                            }}>Signature bd is one of the diversified business entities in Bangladesh, running various businesses with the best efforts of a dynamic team to maintain its excellence. The core strength of the business mainly derives from the talented human resources of United Group. We hire people from diverse, experienced, and professional backgrounds. We have goodwill to engage freshers to give them opportunities to learn, grow, and earn.<br /> <br />

                                Our transformation of leadership approach is one of the core values to flourish innovative thoughts from the growing generation to compete in the national and global economy. We enrich the national GDP through sector-based people ’s technical and professional expertise. The bonding between people and culture creates a great vibe of patriotism, which gives us the essence of business development and addresses the requirements of business trends.<br /> <br />

                                We acknowledge that human capital is a valuable resource that increases capacity by managing various workplace challenges. We offer an attractive compensation package with various allowances and benefits to recognize the extraordinary efforts made by the people of Signature bd.<br /> <br />

                                We acknowledge the endeavor of individual and teamwork to find the best among the best. Talent hunt is our dynamic approach to sourcing the right people in the right place. We nurture our mission, vision, and values to retain talented people in our workforce. We value people by caring for their expectations to ensure long-term mutual benefits, good management practices, better understanding between employees and entrepreneurs, and a peaceful work environment.<br /> <br />

                                Our internal growth strategy motivates people of Signature bd to be competent employers and give opportunities to individual employees to develop professional and personal goals.</p>
                        </div>
                    </div>
                </div>




                <div className="card border-0 py-5">
                        <div className="row">
                        <div className="col-md-6 d-none">
                                <img
                                    src="/public/sir_edited.png"
                                    className="img-fluid rounded"
                                    style={{ 
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'contain'
                                    }}
                                    alt="Sustainability"
                                />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body p-0">
                                    <h3 className="card-title text-uppercase">Message from the CEO</h3>
                                    <div style={{ 
                                        maxHeight: window.innerWidth >= 768 ? '300px' : 'none',
                                        overflowY: window.innerWidth >= 768 ? 'auto' : 'visible', 
                                        marginBottom: '20px'
                                    }}>
                                        <p className="card-text" style={{ 
                                            textAlign: 'justify', 
                                            fontSize: '18px',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        }}>
                                            SIGNATURE BD is at the forefront of printing & packaging Sector in Bangladesh, which is equipped
with the latest & Advanced machinery & technology along with highly skilled professionals.
SIGNATURE BD stands on Quality. We provide a complete integrated printing and packaging
solution. As the managing director, I have 10 years of experience in this Sector.
Since its establishment of SIGNATURE BD has become diversified in business scope, our
activities also include the following: Total offest printing like book, brochure, photo card, garments
accessories, pharmaceutical, consumer, cosmetics, tissue box, calendar etc.
We have pre-press department for beginning printing process through graphic design and CTP
section, quality control section and other deferent kinds of fulfillment services. The company
constantly updates its technology and renews its equipment to improve productivity and quality. In
addition it employs modern managing techniques to improve its services and other corporate
management practices. I strongly believe that in future the name SIGNATURE BD will be an
iconic and brand name in Bangladesh.
                                        </p>
                                    </div>
                                    {/* <h5>Md. Ashraf Hossain</h5> */}
                                    <h6>CEO <br/> Signature bd</h6>

                                </div>
                            </div>
                           
                        </div>
                    </div>




            </section>
        </>
    );
};

export default CareerBio;