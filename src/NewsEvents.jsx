import React from 'react';
import NewsEvH from './components/pages/NewsEvents/NewsEvH';
import Banner from './components/pages/sustanability/Banner';
import PreviousEvents from './components/pages/NewsEvents/PreviouseEvents';
const NewsEvents = () => {
    return (
        <>
            <NewsEvH />
            <Banner imageSrc="/public/expoaccessories-event-banner.jpg" imageAlt="Banner" />
            <PreviousEvents/>
        </>
    );
};

export default NewsEvents;