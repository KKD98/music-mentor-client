import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import SingleClass from '../SingleClass/SingleClass';
import { useQuery } from '@tanstack/react-query';


const AllClasses = () => {
    const {user} = useContext(AuthContext);

    // const [classes, setClasses] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/allclass')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);
    //         })
    //         .catch(error => {
    //             console.log('Error fetching data:', error);
    //         });
    // }, []);

    // console.log(classes);

    const { data: classes = [], isLoading: loading } = useQuery(['allclasses'], async () => {
        const res = await fetch('http://localhost:5000/allclass');
        return res.json();
      });
    
      console.log(classes);

    return (
        <div className='pt-16'>
            <Helmet>
                <title>AllClasses | MusicMentor</title>
            </Helmet>
            <p className='text-4xl text-center font-semibold text-rose-700 my-3'>Total Classes: {classes.length}</p>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {classes.map(classItem =>
               <SingleClass key={classItem._id} classItem={classItem}></SingleClass>
            )}
            </div>

        </div>
    );
};

export default AllClasses;