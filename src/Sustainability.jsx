import React from 'react';
import SubSusH from './components/pages/sustanability/SubSusH';
import Banner from './components/pages/sustanability/Banner';
import SusDetails from './components/pages/sustanability/susDetails';


const Sustainability = () => {
    return (
        <div>
            <SubSusH/>
            <Banner imageSrc="/sustainability.png" imageAlt="Banner" />
            <SusDetails/>
        </div>
    );
};

export default Sustainability;