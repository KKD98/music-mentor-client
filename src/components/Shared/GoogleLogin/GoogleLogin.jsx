import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const { signInWithGoogle  } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedInUser = result.user;

            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email, image: loggedInUser.photoURL, role: "student"};

            fetch('https://music-mentor-server.vercel.app/users' , {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(() => {
                    navigate(from , {replace: true});
              })
        })
        
    }
    return (
        <div className='text-center my-3'>
            <button onClick={handleGoogleSignIn}>
                <FaGoogle className='  text-2xl'></FaGoogle>
            </button>
        </div>
    );
};

export default GoogleLogin;