import React from 'react';

const CareerBenefits = () => {
    return (
        <>
            <section className="py-4 py-md-4" style={{backgroundColor: '#2b2b2b', color: 'white'}}>
                <div className='container py-5 '>
                    <div className='row py-5'>
                        {/* Headline Section - 5 columns */}
                        <div className='col-lg-5'>
                            <h1 className="fw-bold text-uppercase">Benefits</h1>
                        </div>

                        {/* Benefits Grid Section - 7 columns */}
                        <div className='col-lg-7'>
                            <div className='row g-4'>
                                {/* First Row */}
                                <div className='col-md-6 py-2'>
                                    <div className='d-flex align-items-center gap-3 text-uppercase'>
                                        <img src="/public/edu.png" alt="benefit" style={{ width: '50px', height: '50px' }} />
                                        <h5>Personal Career Growth</h5>
                                    </div>
                                </div>
                                <div className='col-md-6 py-2'>
                                    <div className='d-flex align-items-center gap-3 text-uppercase'>
                                        <img src="/public/heart.png" alt="benefit" style={{ width: '50px', height: '50px' }} />
                                        <h5>Healthy Work Environment</h5>
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className='col-md-6 py-2'>
                                    <div className='d-flex align-items-center gap-3 text-uppercase'>
                                        <img src="/public/learning.png" alt="benefit" style={{ width: '50px', height: '50px' }} />
                                        <h5>Learning & Development</h5>
                                    </div>
                                </div>
                                <div className='col-md-6 py-2'>
                                    <div className='d-flex align-items-center gap-3 text-uppercase'>
                                        <img src="/public/beach_holiday.png" alt="benefit" style={{ width: '50px', height: '50px' }} />
                                        <h5>
                                        Welfare Assistance</h5>
                                    </div>
                                </div>

                                {/* Third Row */}
                                <div className='col-md-6 py-2'>
                                    <div className='d-flex align-items-center gap-3 text-uppercase'>
                                        <img src="/public/MATERNITY.png" alt="benefit" style={{ width: '50px', height: '50px' }} />
                                        <h5>Maternity/Paternity Benefits</h5>
                                    </div>
                                </div>
                                <div className='col-md-6 py-2'>
                                    <div className='d-flex align-items-center gap-3 text-uppercase'>
                                        <img src="/public/WORK.png" alt="benefit" style={{ width: '50px', height: '50px' }} />
                                        <h5>Work-life Integration</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CareerBenefits;