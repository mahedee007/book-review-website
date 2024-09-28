import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div>
            
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;