import React, { useState } from 'react';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const data = useLoaderData()
    const [users, setusers] = useState(data)

    const handledelete = id => {
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
                fetch(`https://server-side-chi-seven.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remaining = users.filter(user => user._id != id)
                            setusers(remaining)

                        }
                    })
            }
        });
    }

    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <div className="overflow-x-auto mt-10 ">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last SignIn Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createat}</td>
                                <td>{user.lastSignInTime}</td>
                                <div className='flex gap-x-2'>
                                    <button className='btn'>E</button>
                                    <button onClick={() => handledelete(user._id)} className='btn'>X</button>
                                </div>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;