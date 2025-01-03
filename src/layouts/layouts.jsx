// src/layouts/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

import Footer from '../Components/Footer';


const Layout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <Header/>
            <Outlet/>
            <Footer/>   
        </div>
    );
};

export default Layout;
