import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const { handleGoogleSignIn  } = useContext(AuthContext);
    const signInWithGoogle = () => {
        handleGoogleSignIn();
        navigate(from , {replace: true});
    }
    return (
        <div className='text-center my-3'>
            <button onClick={signInWithGoogle}>
                <FaGoogle className='text-blue-600 text-2xl'></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;