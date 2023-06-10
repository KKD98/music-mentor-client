import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const AllClasses = () => {
    const [classes, setClasses] = useState([]);

    // TODO
    useEffect(() => {
        fetch('http://localhost:5000/allclass')
            .then(res => res.json())
            .then(data => {
                setClasses(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    console.log(classes);
    return (
        <div className='pt-16'>
            <Helmet>
                <title>AllClasses | MusicMentor</title>
            </Helmet>
            <p className='text-4xl text-center font-semibold text-rose-700 my-3'>Total Classes: {classes.length}</p>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {classes.map(singleClass =>
                <div  key={singleClass._id} className="card w-full bg-black text-white shadow-xl">
                    <figure><img src={singleClass.class_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{singleClass.class_name} Class</h2>
                        <p>Instructor Name: {singleClass.instructor_name}</p>
                        <p>Available seats: {singleClass.available_seats}</p>
                        <p>Price: {singleClass.price}</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-rose-700 hover:bg-rose-900 text-white">Select</button>
                        </div>
                    </div>
                </div>
            )}
            </div>

        </div>
    );
};

export default AllClasses;