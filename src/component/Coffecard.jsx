import React from 'react';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffecard = ({ coffee, coffees, setcoffes }) => {
    const { _id, name, chef, supplier, taste, category, details, photo } = coffee

    const handledelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            console.log(data);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            
                            const remaining = coffees.filter(cof => cof._id != _id)
                            setcoffes(remaining)

                    }
                })
            }
        });

    }
    return (
        <div className="card card-side bg-base-100 shadow-md p-4 border rounded-lg flex items-center">
            {/* Coffee Image */}
            <figure className="w-1/3">
                <img
                    src={photo}// Replace with your image URL
                    alt="Coffee"
                    className="rounded-lg"
                />
            </figure>

            {/* Coffee Details */}
            <div className='flex gap-x-5'>
                <div className="w-2/3 p-4">
                    <h2 className="card-title text-lg font-semibold">Name: {name}</h2>
                    <p className="text-sm">Chef: {chef}</p>
                    <p className="text-sm font-medium">Price: 890 Taka</p>
                </div>
                <div className="flex flex-col gap-3">
                    {/* View Button */}
                    <Link to={`/viewmore/${_id}`} className="btn btn-sm bg-neutral-200 text-black hover:bg-neutral-300 flex items-center gap-1">
                        <FaEye /> View
                    </Link>

                    {/* Edit Button */}
                    <Link to={`/updatecoffee/${_id}`} className="btn btn-sm bg-gray-700 text-white hover:bg-gray-800 flex items-center gap-1">
                        <FaEdit /> Edit
                    </Link>

                    {/* Delete Button */}
                    <button onClick={()=>handledelete(_id)} className="btn btn-sm bg-red-500 text-white hover:bg-red-600 flex w-24 items-center gap-1">
                        <FaTrash /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Coffecard;
