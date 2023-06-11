import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageAllClasses = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [axiosSecure] = useAxiosSecure();


    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclass');
        return res.data;
    });

    const handleApprove = classItem => {
        console.log(classItem)
        const status = "approved";
        const classId = classItem._id;
        console.log(classId)
        setButtonDisabled(classId);
        fetch(`http://localhost:5000/allclass/${classId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Class approved successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
    const handleDeny = classItem => {
        console.log(classItem)
        const status = "deny";
        const classId = classItem._id;
        setButtonDisabled(classId);
        fetch(`http://localhost:5000/allclass/${classId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Class denied successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }
    const setButtonDisabled = id => {
        setDisabledButtons(prevState => [...prevState, id]);
    };

    const isButtonDisabled = id => {
        return disabledButtons.includes(id);
    };

    return (
        <div className='w-full'>
         <Helmet>
                <title>ManageAllClasses | MusicMentor</title>
            </Helmet>
            <p className='text-4xl text-center font-semibold text-rose-700'>Total Classes: {allclass.length}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ClassImage</th>
                            <th>ClassName</th>
                            <th>InstructorName</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allclass.map(singleClass =>
                            <tr key={singleClass._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.class_name}</td>
                                <td>{singleClass.instructor_name}</td>
                                <td>{singleClass.available_seats}</td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.status === 'approved' ? 'approved' : singleClass.status === 'deny' ? 'deny' : 'pending'}</td>
                                <th>
                                    <div className='flex gap-2'>
                                    {
                                    singleClass?.status !== "pending" ?   <button className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled
                                    >Approved</button> : 
                                     <button
                                        onClick={() => handleApprove(singleClass)}
                                        className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled={isButtonDisabled(singleClass._id)}
                                    >Approved</button>
                                   }
                                   {
                                    singleClass?.status !== "pending" ? <button className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled
                                    >Deny</button> :
                                       <button
                                        onClick={() => handleDeny(singleClass)}
                                        className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled={isButtonDisabled(singleClass._id)}
                                    >Deny</button>
                                    }
                                       <Link to={`/dashboard/feedback/${singleClass._id}`}> <button className="btn bg-rose-700 text-white btn-xs">Feedback</button></Link>
                                    </div>
                                </th>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllClasses;
