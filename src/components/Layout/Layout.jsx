import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Layout.css'
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div className='page__container'>
            <NavigationBar />
            <main className='page__content'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;