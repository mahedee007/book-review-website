import React from 'react';
import { Link } from 'react-router-dom';
import book from '../assets/undraw_undraw_undraw_undraw_undraw_notebook_ask4_ew5s_-1-_954q_-1-_yoow_-1-_n5mm.svg';

const Banner = () => {
    return (
        <div className='w-4/5 mx-auto min-h-[calc(100vh - 4rem)] flex flex-col lg:flex-row justify-between items-center pt-14 gap-y-3'>
            <div className='flex flex-col gap-6'>
                <h1 className='text-4xl font-black leading-[127%]'>Books to freshen up your <br /> bookshelf</h1>
                <Link to="/listed"><button className='btn'> View Listed Book</button></Link>
            </div>
            <img src={book} className='w-[500px]' alt="" />
        </div>
    );
};

export default Banner;