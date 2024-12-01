import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from './Navbar';
import Footer from './Footer';

const Updatecoffee = () => {
    const coffee = useLoaderData()
    const { _id } = coffee

    const handleupdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const chef = form.chef.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value

        const updatecoffee = { name, chef, supplier, taste, category, details, photo }

        fetch(`https://server-side-chi-seven.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatecoffee)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-addcard bg-cover bg-center'>
            <nav>
                <Navbar />
            </nav>
            <Link to='/' className='w-8/12 mx-auto flex items-center gap-x-2 mt-4'><FaArrowLeftLong /><span className='text-xl'>Back to Home</span></Link>
            <div className="max-w-4xl mx-auto bg-[#F4F3F0] mt-10 p-10 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center mb-4">Update Existing Coffee Details</h1>
                <p className="text-center mb-8 text-gray-600">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleupdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <!-- Name --> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Enter coffee name" className="input input-bordered" />
                        </div>
                        {/* <!-- Chef --> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Chef</span>
                            </label>
                            <input name='chef' type="text" placeholder="Enter coffee chef" className="input input-bordered" />
                        </div>
                        {/* <!-- Supplier --> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <input name='supplier' type="text" placeholder="Enter coffee supplier" className="input input-bordered" />
                        </div>
                        {/* <!-- Taste --> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <input name='taste' type="text" placeholder="Enter coffee taste" className="input input-bordered" />
                        </div>
                        {/* <!-- Category --> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input name='category' type="text" placeholder="Enter coffee category" className="input input-bordered" />
                        </div>
                        {/* <!-- Details --> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input name='details' type="text" placeholder="Enter coffee details" className="input input-bordered" />
                        </div>
                        {/* <!-- Photo URL --> */}
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name='photo' type="text" placeholder="Enter photo URL" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="mt-6 text-center">
                        <button className="btn btn-block bg-[#D2B48C] px-10">Update Coffee</button>
                    </div>
                </form>
            </div>
            <footer className='mt-10'>
                <Footer />
            </footer>
        </div>
    );
};

export default Updatecoffee;