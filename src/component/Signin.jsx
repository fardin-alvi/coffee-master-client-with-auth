import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Signin = () => {
    const { createuser } = useContext(AuthContext)

    const navigate = useNavigate()

    const handlesignin = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        createuser(email, password)
            .then(res => {
                const createat = res.user.metadata.creationTime
                const user = { name, email, createat }
                console.log(res.user)
                navigate('/users')

                fetch('https://server-side-chi-seven.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)

                }).then(res => res.json())
                    .then(data => {
                        console.log(data.user);
                    })
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            <Link to='/' className='my-6 w-10/12 mx-auto flex items-center gap-x-2'><FaArrowLeftLong />Back to Home</Link>
            <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handlesignin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                        <p className='text-center mt-5'>Have an Account  <Link to='/login' >Log In</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;