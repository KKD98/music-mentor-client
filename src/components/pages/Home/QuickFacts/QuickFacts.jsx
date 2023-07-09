import React from 'react';
import { FaDrum, FaFacebook, FaGuitar, FaInstagram, FaMusic, FaTwitter, FaUser } from "react-icons/fa";

const QuickFacts = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold my-12 text-black'>---Quick Facts <span className='text-rose-700'>The Numbers</span>
                ---</h1>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 w-[90%] md:w-4/5 mx-1 md:mx-auto'>
                <div className='flex gap-2 items-center w-full'>
                    <div className='border-2 border-rose-800 rounded-full p-5'>
                        <FaMusic className='text-4xl text-black'></FaMusic>
                    </div>
                    <div>
                        <p className='text-2xl text-black font-semibold'>28</p>
                        <p className='text-xl text-gray-600 font-semibold'>Students</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <div className='border-2 border-rose-800 rounded-full p-5'>
                        <FaUser className='text-4xl text-black'></FaUser>
                    </div>
                    <div>
                        <p className='text-2xl text-black font-semibold'>10</p>
                        <p className='text-xl text-gray-600 font-semibold'>Teachers</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <div className='border-2 border-rose-800 rounded-full p-5'>
                        <FaDrum className='text-4xl text-black'></FaDrum>
                    </div>
                    <div>
                        <p className='text-2xl text-black font-semibold'>14</p>
                        <p className='text-xl text-gray-600 font-semibold'>Classes</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center w-full'>
                    <div className='border-2 border-rose-800 rounded-full p-5'>
                        <FaGuitar className='text-4xl text-black'></FaGuitar>
                    </div>
                    <div>
                        <p className='text-2xl text-black font-semibold'>22</p>
                        <p className='text-xl text-gray-600 font-semibold'>Lessons</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickFacts;