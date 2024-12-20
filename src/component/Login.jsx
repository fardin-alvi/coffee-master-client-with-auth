import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Login = () => {
    const { singin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handlelogin = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        const password = event.target.password.value;

        singin(email, password)
            .then(res => {
                console.log(res.user)
                navigate('/users')
                const lastSignInTime = res?.user?.metadata.lastSignInTime
                const user = { email, lastSignInTime }

                fetch('https://server-side-chi-seven.vercel.app/users', {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
                <form onSubmit={handlelogin} className="card-body">
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
                        <button className="btn btn-primary">Log In</button>
                        <p className='text-center mt-5'>Don't Have an Account  <Link to='/signin' >Sign Up</Link></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;