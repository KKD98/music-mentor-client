import React, { useEffect, useState } from 'react';
import SingleInstructor from './SingleInstructor/SingleInstructor';

const PopularInstructors = () => {
    const [allInstructor, setAllInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popularinstructors')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllInstructor(data)
        })
    },[])
    return (
        <div>
        <h1 className='text-center text-4xl font-semibold mt-12 mb-4'>---Popular Instructors of <span className='text-rose-700'>MUSIC MENTOR</span>
            ---</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    allInstructor.map(singleInstructor => <SingleInstructor key={singleInstructor._id} singleInstructor={singleInstructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;