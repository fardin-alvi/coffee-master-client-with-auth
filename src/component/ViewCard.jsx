import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

const ViewCard = () => {
    const coffees = useLoaderData()
    const { _id, name, chef, supplier, taste, category, details, photo } = coffees


    return (
        <div className='bg-addcard bg-cover bg-center'>
            <nav>
                <Navbar/>
            </nav>
            <Link to='/' className='w-8/12 mx-auto flex items-center gap-x-2 mt-4'><FaArrowLeftLong /><span className='text-xl'>Back to Home</span></Link>
            <section className='mt-10'>
                <div className="w-6/12 mx-auto flex gap-x-20 justify-center bg-base-200 shadow-md rounded-lg p-6">
                    <figure className="w-1/3">
                        <img
                            src={photo}
                            alt="Coffee"
                            className="rounded-lg"
                        />
                    </figure>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold text-center mb-2">Niceties</h2>
                        <ul className="text-gray-600 text-sm space-y-2">
                            <li>
                                <strong>Name:</strong> {name}
                            </li>
                            <li>
                                <strong>Chef:</strong> {chef}
                            </li>
                            <li>
                                <strong>Supplier:</strong> {supplier}
                            </li>
                            <li>
                                <strong>Taste:</strong> {taste}
                            </li>
                            <li>
                                <strong>Category:</strong> {category}
                            </li>
                            <li>
                                <strong>Details:</strong> {details}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <footer className='mt-10'>
                <Footer/>
            </footer>
        </div>
    );
};

export default ViewCard;