import React, { useEffect, useState } from 'react';
import SingleClass from '../SingleClass/SingleClass';

const PopularClasses = () => {
    const [classes , setClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/popularclasses')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-center text-4xl font-semibold mt-12 mb-4'>---Popular Classes of <span className='text-rose-700'>MUSIC MENTOR</span>
            ---</h1>
        
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
           {
                classes.map(classItem => <SingleClass key={classItem._id} classItem={classItem}></SingleClass>)
            }
           </div>
        </div>
    );
};

export default PopularClasses;