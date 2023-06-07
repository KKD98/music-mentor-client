import React from 'react';
import errorImg from '../../assets/errorimage.png'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto my-6' src={errorImg} alt="" />
            <div className='flex justify-center'>
                <Link to="/">
                    <button className="btn bg-rose-700 border-none text-white hover:bg-rose-900">Go to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;