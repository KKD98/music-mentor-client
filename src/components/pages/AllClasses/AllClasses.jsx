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
    //     fetch('https://music-mentor-server.vercel.app/allclass')
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
        const res = await fetch('https://music-mentor-server.vercel.app/approvedclass');
        return res.json();
      });
    

    return (
        <div className='pt-16'>
            <Helmet>
                <title>AllClasses | MusicMentor</title>
            </Helmet>
            <p className='text-4xl text-center font-semibold text-black my-3'>All Classes</p>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-4'>
            {classes.map(classItem =>
               <SingleClass key={classItem._id} classItem={classItem}></SingleClass>
            )}
            </div>

        </div>
    );
};

export default AllClasses;