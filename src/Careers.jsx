import React from 'react';
import Banner from './components/pages/sustanability/Banner';
import CarrersHe from './components/pages/Careers/CarrersHe';
import CareerBio from './components/pages/Careers/CareerBio';
import CareerBenefits from './components/pages/Careers/CareerBenefits';
import CareerOpor from './components/pages/Careers/CareerOpor';
const Careers = () => {
    return (
        <div>
            <CarrersHe/>
            <Banner imageSrc="/public/Career.jpeg" imageAlt="Careers" />
            <CareerBio/>
            <CareerBenefits/>
            <CareerOpor/>
        </div>
    );
};

export default Careers;