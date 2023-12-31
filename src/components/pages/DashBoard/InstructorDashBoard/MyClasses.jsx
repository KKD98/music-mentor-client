import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyClasses = () => {
    const [classes, setClasses] = useState([]);
    const {user} = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://music-mentor-server.vercel.app/myclass/${user?.email}`)
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(myClass => 
                            <tr key={myClass._id}>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myClass.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                               {myClass.class_name}
                            </td>
                            <td>{myClass.price}</td>
                            <td>{myClass.status}</td>
                            <td>{myClass.feedback? myClass.feedback : "No feedback"}</td>
                            <th>
                                   <Link to={`/dashboard/classupdate/${myClass._id}`}> <button className="btn bg-rose-700 hover:bg-rose-900 text-white btn-xs">Update</button></Link>
                                </th>
                        </tr>
                        )}
                       
                       </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;