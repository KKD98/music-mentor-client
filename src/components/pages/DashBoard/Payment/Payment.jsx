import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const classItem = JSON.parse(decodeURIComponent(queryParams.get('classItem')));
    return (
        <div className='w-[60%]'>
            <p className='text-4xl font-semibold text-rose-700 text-center my-6'>Payment</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm classItem={classItem}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;