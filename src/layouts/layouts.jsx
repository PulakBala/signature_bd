// src/layouts/Layout.jsx
import React from 'react';
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';
import SubHeader from '../Components/SubHeader';
import Footer from '../Components/Footer';


const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header/>
            <MainContent/>
            <Footer/>   
        </div>
    );
};

export default Layout;
