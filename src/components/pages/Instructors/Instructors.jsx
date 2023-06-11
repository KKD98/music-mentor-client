import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    // TODO
    useEffect(() => {
        fetch('https://music-mentor-server.vercel.app/allinstructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='w-full pt-16'>
            <Helmet>
                <title>AllInstructors | MusicMentor</title>
            </Helmet>
            <h1 className='text-center text-4xl text-rose-700 font-semibold my-4'> All Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
            {
                instructors.map(instructor =>
                    <div key={instructor._id} className="w-full h-full relative bg-black text-white shadow-xl">
                        <figure><img className='w-full p-12 mb-12 rounded-full' src={instructor.image} alt="Shoes" /></figure>
                        <div className="bg-rose-700 p-3 absolute inset-x-0 bottom-0">
                            <h2 className="text-2xl font-semibold">{instructor.name}</h2>
                            <h2 className="text-xl font-semibold">{instructor.email}</h2>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Instructors;