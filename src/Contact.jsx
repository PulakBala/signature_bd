import React from 'react';
import ContactForm from './components/pages/Contact/ContactForm';
import Banner from './components/pages/sustanability/Banner';

const Contact = () => {
    return (
        <div>
            <Banner imageSrc="/public/contactbanner.jpg" imageAlt="Contact" />
            <ContactForm/>
        </div>
    );
};

export default Contact;