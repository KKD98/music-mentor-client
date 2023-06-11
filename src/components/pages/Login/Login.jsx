import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from '../../Shared/GoogleLogin/GoogleLogin';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {signIn} = useContext(AuthContext);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = data => {

        reset();
        
        signIn(data.email , data.password)
        .then(result => {
            const user = result.user;
            Swal.fire({
                title: 'User login Successfully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              });
              navigate(from, {replace: true});
        })
    }
    return (
        <div>
         <Helmet>
            <title>Login | MusicMentor</title>
        </Helmet>
        <p className='text-center text-4xl font-semibold bg-rose-800 p-3 text-white'>Please Login!!!</p>


        <div className='flex justify-center my-5'>
        <div className="w-[40%] shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body -mt-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered -mt-1" />
                            </div>
                            <div className="form-control -mt-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center'>
                                    <input type={showPassword ? "text" : "password"} {...register("password")} placeholder="password" className="input input-bordered w-full -mt-1" />
                                    <FontAwesomeIcon className='ml-3 h-5 w-5 text-gray-700'
                                        icon={showPassword ? faEyeSlash : faEye}
                                        onClick={handleTogglePassword}
                                    />
                                </div>

                            </div>
                            <div className="form-control ">
                            <input type="submit" className="btn bg-rose-700 text-white hover:bg-rose-900 " value="Login" />
                            </div>
                        </form>
                        <div className="divider -mt-16">OR</div>
                        <GoogleLogin></GoogleLogin>
                        <p className='text-center mb-4 text-sm '>Do not have an account? <Link to="/signup"><span className='text-rose-700 text-md font-semibold'>Please Sign Up!!!</span></Link></p>
                    </div>
        </div>

        </div>
    );
};

export default Login;