import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

const PreviousEvents = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    // টেক্সট লিমিট ফাংশন
    const truncateText = (text, limit) => {
        const words = text.split(' ');
        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return text;
    };

    // মোডাল টগল ফাংশন
    const handleShowModal = (event) => {
        setSelectedEvent(event);
        setShowModal(true);
    };

    const events = [
        {
            title: "Annual Conference 2023",
            date: "December 15, 2023",
            location: "Dhaka, Bangladesh",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, sit ipsa? Beatae distinctio sit placeat odit libero quaerat molestiae, fuga repudiandae repellat illo asperiores nam minus totam eius exercitationem est natus id fugit? Error nulla incidunt, cum esse voluptates rerum quae voluptatibus ut tempore mollitia amet deleniti molestias cupiditate unde?"
        },
        {
            title: "Participation in seminars and product shows",
            date: "December 15, 2024",
            location: "Dhaka, Bangladesh",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, sit ipsa? Beatae distinctio sit placeat odit libero quaerat molestiae, fuga repudiandae repellat illo asperiores nam minus totam eius exercitationem est natus id fugit? Error nulla incidunt, cum esse voluptates rerum quae voluptatibus ut tempore mollitia amet deleniti molestias cupiditate unde?"
        },
        {
            title: "Happy new year 2025",
            date: "January 1, 2025",
            location: "Dhaka, Bangladesh",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, sit ipsa? Beatae distinctio sit placeat odit libero quaerat molestiae, fuga repudiandae repellat illo asperiores nam minus totam eius exercitationem est natus id fugit? Error nulla incidunt, cum esse voluptates rerum quae voluptatibus ut tempore mollitia amet deleniti molestias cupiditate unde?"
        },
        // ... অন্যান্য ইভেন্টস ...
    ];

    return (
        <div className="container py-5 d-none">
            <h1 className="text-center mb-4">Previous Events</h1>
            
            <div className="row g-4">
                {events.map((event, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card h-100">
                            <img src="/event1.jpg" alt={event.title} className="card-img-top" style={{height: "200px", objectFit: "cover"}} />
                            <div className="card-body">
                                <h2 className="card-title h5">{event.title}</h2>
                                <p>{truncateText(event.description, 30)}</p>
                                <div className="d-flex align-items-center gap-2 text-muted mb-2">
                                    <FaCalendarAlt /> <span>{event.date}</span>
                                </div>
                                <div className="d-flex align-items-center gap-2 text-muted">
                                    <FaMapMarkerAlt /> <span>{event.location}</span>
                                </div>
                                <div className="mt-3">
                                    <button 
                                        className="btn btn-primary me-2 d-flex align-items-center gap-2"
                                        onClick={() => handleShowModal(event)}
                                    >
                                        Learn More <FaArrowRight />
                                    </button>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} 
                style={{ display: showModal ? 'block' : 'none' }}
                tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{selectedEvent?.title}</h5>
                            <button 
                                type="button" 
                                className="btn-close" 
                                onClick={() => setShowModal(false)}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>{selectedEvent?.description}</p>
                            <div className="d-flex align-items-center gap-2 text-muted mb-2">
                                <FaCalendarAlt /> <span>{selectedEvent?.date}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2 text-muted">
                                <FaMapMarkerAlt /> <span>{selectedEvent?.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <div className="modal-backdrop fade show" onClick={() => setShowModal(false)}></div>}
        </div>
    );
};

export default PreviousEvents;

