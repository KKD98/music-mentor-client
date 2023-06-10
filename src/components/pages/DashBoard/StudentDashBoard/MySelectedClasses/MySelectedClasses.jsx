import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const [selectedClasses, setSelectedClasses] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(selectedClasses)

    useEffect(() => {
        fetch(`http://localhost:5000/myselectedclass/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSelectedClasses(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);

    const handleDeleteClass = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myselectedclass/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your class has been deleted.',
                            'success'
                          )
                          const remainingClasses = selectedClasses.filter(classItem => classItem._id !== id);
                          setSelectedClasses(remainingClasses);
                    }
                })
              
            }
          })
    }

    return (
        <div className='w-full'>
            <p className='text-center text-4xl text-rose-700 font-semibold my-4'>My selected classes</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Price</th>
                            <th>Available seat</th>
                            <th>Action</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClasses.map(classItem =>
                            <tr key={classItem._id}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classItem.class_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {classItem.class_name}
                                </td>
                                <td>{classItem.instructor_name}</td>
                                <td>${classItem.price}</td>
                                <td>{classItem.available_seats}</td>
                                <th>
                                    <button onClick={() => handleDeleteClass(classItem._id)} className="btn bg-rose-700 hover:bg-rose-900 text-white btn-xs">Delete</button>
                                </th>
                                <th>
                                    <button className="btn bg-rose-700 hover:bg-rose-900 text-white btn-xs">Pay</button>
                                </th>
                            </tr>
                        )}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;