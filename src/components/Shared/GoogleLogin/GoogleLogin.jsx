import React from 'react';
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
    return (
        <div className='text-center my-3'>
            <button>
                <FaGoogle className='text-blue-600 text-2xl'></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;