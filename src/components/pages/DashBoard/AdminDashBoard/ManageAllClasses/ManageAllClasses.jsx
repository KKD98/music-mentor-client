import React, { useEffect, useState } from 'react';

const ManageAllClasses = () => {
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
        <div>
            <p className='text-4xl text-center font-semibold text-rose-700'>Total Classes: {classes.length}</p>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ClassImage</th>
                            <th>ClassName</th>
                            <th>InstructorName</th>
                            <th>InstructorEmail</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className='text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(singleClass =>
                            <tr key={singleClass._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={singleClass.classImage} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{singleClass.className}</td>
                                <td>{singleClass.instructorName}</td>
                                <td>{singleClass.instructorEmail}</td>
                                <td>{singleClass.available_seats}</td>
                                <td>{singleClass.price}</td>
                                <td>{singleClass.status}</td>
                                <th>
                                    <div className='flex gap-2'>
                                        <button className="btn bg-rose-700 text-white btn-xs">Approved</button>
                                        <button className="btn bg-rose-700 text-white btn-xs">Deny</button>
                                        <button className="btn bg-rose-700 text-white btn-xs">Feedback</button>
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
