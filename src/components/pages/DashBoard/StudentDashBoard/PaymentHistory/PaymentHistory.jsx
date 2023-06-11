import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { useEffect } from 'react';

const PaymentHistory = () => {
    const [paymentedClasses, setPaymentedClasses] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(paymentedClasses)

    useEffect(() => {
        fetch(`http://localhost:5000/payments/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setPaymentedClasses(data);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
    }, []);
    return (
        <div className='w-full'>
        <p className='text-center text-4xl text-rose-700 font-semibold my-4'>My Payments</p>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        <th>Transaction Id</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentedClasses.map(classItem =>
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
                            <td>{classItem.transactionId}</td>
                        </tr>
                    )}


                </tbody>

            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;