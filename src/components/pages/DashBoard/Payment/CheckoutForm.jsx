import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../../../../providers/AuthProvider';
import './CheckoutForm.css'



const CheckoutForm = ({classItem}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret , setClientSecret] = useState('');
    const [processing , setProcessing] = useState(false);
    const [transactionId , setTransactionId] = useState('');

    const {price} = classItem;
    console.log("Class Item:" , classItem)

    useEffect(() => {
        console.log(price)
        axiosSecure.post('/create-payment-intent', {classItem})
        .then(res =>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setCardError(error)
        }
        else {
            setCardError(''); 
        }

        setProcessing(true)

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details:{
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if(confirmError){
            console.log(confirmError)
        }
        console.log("paymentIntent: ", paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
            console.log("paymentIntent.id:" , paymentIntent.id)
            setTransactionId(paymentIntent.id);
            let {_id, ...classItemDetails} = classItem;
            const payment = {email: user?.email, transactionId: paymentIntent.id, ...classItemDetails }
            axiosSecure.post('/payments', payment)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){

                }
            })
        }

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn bg-rose-700 hover:bg-rose-900 text-white btn-sm mt-4 ' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-700'>{cardError.message}</p>
            }
            {transactionId && <p className='text-green-700'>Transaction complete with transactionID: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;