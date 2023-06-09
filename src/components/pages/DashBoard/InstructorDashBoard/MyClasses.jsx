import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    const [classes, setClasses] = useState([]);

    // TODO
    useEffect(() => {
        fetch('/allClasses.json')
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
        <div className='w-full'>
            <Helmet>
                <title>MyClasses | MusicMentor</title>
            </Helmet>
            <h1 className='text-center text-4xl text-rose-700 font-semibold my-4'>My All Classes</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ClassImage</th>
                            <th>ClassName</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(myClass => 
                            <tr key={myClass._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myClass.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {myClass.className}
                            </td>
                            <td>{myClass.price}</td>
                            <td>{myClass.status}</td>
                            <td>{myClass.feedback? myClass.feedback : "No feedback"}</td>
                        </tr>
                        )}
                       
                       </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;