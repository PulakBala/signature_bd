// src/components/MainContent.jsx
import React from 'react';
import VidePart from './pages/AboutUs/VideoPart';
import MvissionCard from './pages/AboutUs/MvissionCard';
import BoardDirector from './pages/AboutUs/BoardDirector';
import Factory from './pages/AboutUs/Factory';
import CertificatesAwards from './pages/AboutUs/CertificatesAwards';
import OurClients from './pages/AboutUs/OurClients';
import NewsLetter from './pages/AboutUs/NewsLetter';

const MainContent = () => {
    return (
        <main style={{ padding: '20px' }}>
          <VidePart/>
          <MvissionCard/>
          <BoardDirector/>
          <Factory/>
          <CertificatesAwards/>
          <OurClients/>
          <NewsLetter/>
        </main>
    );
};

export default MainContent;
