import React from 'react';

const CareerOpor = () => {
    const jobListings = [
        {
            id: 1,
            title: "Dart-Apps Developer",
            postDate: "01 Jun, 2024",
            endDate: "04 Feb, 2026"
        },
        {
            id: 2,
            title: "Digital Marketing",
            postDate: "01 Jun, 2024",
            endDate: "04 Feb, 2026"
        },
        {
            id: 3,
            title: "Laravel Developer",
            postDate: "01 Jun, 2024",
            endDate: "04 Feb, 2026"
        }
    ];

    return (
        <div className="container my-5 d-none">
            <h2 className="text-center mb-5">CURRENT CAREER OPPORTUNITIES</h2>
            <div className="row g-4">
                {jobListings.map((job) => (
                    <div className="col-12" key={job.id}>
                        <div className="job-card d-flex align-items-center">
                            <div className="number-box me-3">{job.id}</div>
                            <div className="flex-grow-1">
                                <h5 className="mb-1">{job.title}</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>Post Date: {job.postDate}</li>
                                    <li>End Date: {job.endDate}</li>
                                </ul>
                            </div>
                            <div className="d-flex flex-wrap">
                                <button className="btn btn-custom me-2">VIEW CIRCULAR</button>
                                <button className="btn btn-custom">APPLY NOW</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .job-card {
                    background-color: #f7f7f7;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                }

                .job-card .number-box {
                    width: 50px;
                    height: 50px;
                    background-color: black;
                    color: limegreen;
                    font-size: 1.5rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;
                }

                .job-card .btn-custom {
                    background-color: black;
                    color: limegreen;
                    border: none;
                    padding: 10px 15px;
                }

                .job-card .btn-custom:hover {
                    background-color: limegreen;
                    color: black;
                }
            `}</style>
        </div>
    );
}

export default CareerOpor;