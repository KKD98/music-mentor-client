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
            <h1 className='text-center text-4xl text-black font-semibold my-4'> All Instructors</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 w-full md:w-4/5 mx-auto'>
            {
                instructors.map(instructor =>
                    <div key={instructor._id} className="w-full h-full relative bg-white text-black shadow-black shadow-xl">
                        <figure className='border-2 border-black'><img className='w-full p-10 mb-16 rounded-full' src={instructor.image} alt="instructors" /></figure>
                        <div className="bg-rose-700 p-2 h-20 absolute inset-x-0 bottom-0">
                            <h2 className="text-sm font-semibold">{instructor.name}</h2>
                            <h2 className="text-sm font-medium">{instructor.email}</h2>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    );
};

export default Instructors;