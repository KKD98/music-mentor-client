import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';

const ManageAllUsers = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
    });

    console.log(users)


    const handleMakeAdmin = user => {
        const role = "admin";
        const userId = user._id;
        setButtonDisabled(userId);
        fetch(`http://localhost:5000/users/${userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const handleMakeInstructor = user => {
        const role = "instructor";
        const userId = user._id;
        setButtonDisabled(userId);
        fetch(`http://localhost:5000/users/${userId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ role })
        })
        .then(res => res.json())
        .then(data => {
            console.log("54", data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const setButtonDisabled = userId => {
        setDisabledButtons(prevState => [...prevState, userId]);
    };

    const isButtonDisabled = userId => {
        return disabledButtons.includes(userId);
    };

    return (
        <div className='w-full '>
            <Helmet>
                <title>ManageAllUser | MusicMentor</title>
            </Helmet>
            <h1 className='text-center text-4xl text-rose-700 font-semibold my-4'>Manage All Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'admin' ? 'admin' : user.role === 'instructor' ? 'instructor' : 'student'}</td>
                                <td>
                                   {
                                    user?.role !== "student" ?   <button className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled
                                    >Make Admin</button> : 
                                     <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled={isButtonDisabled(user._id)}
                                    >Make Admin</button>
                                   }
                                </td>
                                <td>
                                    {
                                        user?.role !== "student" ? <button className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled>Make Instructor</button> :
                                        <button
                                        onClick={() => handleMakeInstructor(user)}
                                        className="btn btn-xs bg-rose-700 border-none text-white hover:bg-rose-900"
                                        disabled={isButtonDisabled(user._id)}>Make Instructor</button>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllUsers;