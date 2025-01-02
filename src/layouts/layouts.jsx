// src/layouts/Layout.jsx
import React from 'react';
import Header from '../Components/Header';
import MainContent from '../Components/MainContent';


const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header/>
            <MainContent/>
        </div>
    );
};

export default Layout;
