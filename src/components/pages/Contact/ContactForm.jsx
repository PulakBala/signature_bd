import React, { useState } from 'react';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        accessories: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-form-container py-5"
         style={{maxWidth: 800, margin: '0 auto'}}
        >
            <h1 className="text-center mb-3">Get in Touch</h1>
            <p className="text-center mb-4">Fill out the form below</p>

            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            name="fullName"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <select
                            className="form-select"
                            name="accessories"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Accessories</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Your Message"
                        name="message"
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="text-center py-5">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;