import React from 'react';
import Navbar from '../Components/Navbar';

import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Books from '../Components/Books';
import Banner from '../Components/Banner';


const Home = () => {
    return (
        <div>
            <div className='bg-green-500 mb-7'>
            <Banner/>
            </div>
            <Books/>
        </div>
    );
};

export default Home;