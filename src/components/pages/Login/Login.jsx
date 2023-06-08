import React, { useContext, useState } from 'react';
import img from '../../../assets/login.jpg';
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
        console.log(data);
        reset();
        
        signIn(data.email , data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
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
            <div className="hero min-h-screen bg-base-200">
           
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className='flex items-center'>
                                    <input type={showPassword ? "text" : "password"} {...register("password")} placeholder="password" className="input input-bordered w-[90%]" />
                                    <FontAwesomeIcon className='ml-3 h-5 w-5 text-gray-700'
                                        icon={showPassword ? faEyeSlash : faEye}
                                        onClick={handleTogglePassword}
                                    />
                                </div>

                            </div>
                            <div className="form-control mt-6">
                            <input type="submit" className="btn bg-rose-700 text-white hover:bg-rose-900" value="Login" />
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <GoogleLogin></GoogleLogin>
                        <p className='text-center mb-4 text-sm '>Dont't have an account? <Link to="/signup"><span className='text-rose-700 text-md font-semibold'>Please Sign Up!!!</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;