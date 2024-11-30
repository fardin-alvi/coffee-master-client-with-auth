import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import errorimage from '../assets/404/404.gif'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Errorpage = () => {
    return (
        <div>
            <nav>
                <Navbar/>
            </nav>
            <Link to='/' className='flex justify-center mt-10 items-center gap-x-2'><FaArrowLeftLong /><span className='text-xl'>Back to Home</span></Link>
            <img className='mx-auto mt-3' src={errorimage} alt="" />
        </div>
    );
};

export default Errorpage;