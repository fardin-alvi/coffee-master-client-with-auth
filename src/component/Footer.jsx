import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import headerImage from '../assets/more/logo1.png'

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 px-6 sm:px-10 md:px-28">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="space-y-6">
                    <img className="w-16 h-16" src={headerImage} alt="Logo" />
                    <h2 className="text-2xl font-bold">Espresso Emporium</h2>
                    <p className="text-gray-600">
                        Always ready to be your friend. Come & connect with us to share your
                        memorable moments, to share with your best companion.
                    </p>
                    <div className="flex space-x-4 text-gray-500">
                        <a href="#" className="hover:text-gray-800">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="hover:text-gray-800">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" className="hover:text-gray-800">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="hover:text-gray-800">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                    <div>
                        <p className="text-xl font-semibold">Get In Touch</p>
                        <div className="mt-2 text-sm flex flex-col gap-y-2 text-gray-600">
                            <p>📞 +88 2653 333 333</p>
                            <p>✉️ info@gmail.com</p>
                            <p>📍 72 Wall Street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full">
                    <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full focus:outline-none"
                        />
                        <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered w-full focus:outline-none"
                            rows={3}
                        />
                        <button className="btn bg-gray-800 text-white hover:bg-gray-700 w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center mt-10 text-sm text-gray-500">
                © 2024 Espresso Emporium | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;