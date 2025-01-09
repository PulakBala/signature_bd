// src/components/BoardOfDirectors.jsx
import React from 'react';

const BoardDirector = () => {
    return (
        <section className="container my-5 d-none">
            <h2 className=" mb-5 text-uppercase">Board Of Directors</h2>
            <div className="row">
                {/* Hasan Mahmood Raja - Chairman */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card border-0" style={{}}>
                        <img
                            src="/sir_edited.png" // Replace with the actual image path
                            className="card-img-top"
                            alt="Hasan Mahmood Raja"
                            style={{ height: 'auto', maxHeight: '500px' }}
                        />
                        <div className="card-body ">
                            <h5 className="card-title text-uppercase">Hasan Mahmood Raja</h5>
                            <p className="card-text">Chairman</p>
                        </div>
                    </div>
                </div>


                {/* Enamul Haque - MD */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card border-0">
                        <img
                            src="/sir_edited.png" // Replace with the actual image path
                            className="card-img-top"
                            alt="Enamul Haque"
                            style={{ height: 'auto', maxHeight: '500px' }}
                        />
                        <div className="card-body ">
                            <h5 className="card-title text-uppercase">Enamul Haque</h5>
                            <p className="card-text">Managing Director</p>
                        </div>
                    </div>
                </div>

                {/* Sanjid Shahnoor Syontu - Director Strategy */}
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card border-0">
                        <img
                            src="/sir_edited.png" // Replace with the actual image path
                            className="card-img-top"
                            alt="Sanjid Shahnoor Syontu"
                            style={{ height: 'auto', maxHeight: '500px' }}
                        />
                        <div className="card-body ">
                            <h5 className="card-title text-uppercase">Sanjid Shahnoor Syontu</h5>
                            <p className="card-text">Director Strategy</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BoardDirector;
