import React from 'react';
import headerImage from '../assets/more/logo1.png'
const Navbar = () => {
    return (
        <div className="text-center text-white text-3xl bg-custom-background bg-cover bg-center flex justify-center items-center gap-x-2 h-16">
            <img className='h-12 w-12' src={headerImage} alt="" />
            <p>Espresso Emporium</p>
        </div>
    );
};

export default Navbar;