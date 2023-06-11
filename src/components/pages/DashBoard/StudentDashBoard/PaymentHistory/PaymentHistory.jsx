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
        <div>
            <p>payment history: {paymentedClasses.length}</p>
        </div>
    );
};

export default PaymentHistory;