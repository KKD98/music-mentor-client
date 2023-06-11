import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../Shared/GoogleLogin/GoogleLogin';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const signedInUser = result.user;
        console.log("signedInUser", signedInUser);

        updateUserProfile(data.name, data.photoUrl)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, image: data.photoUrl, role: "student" };
            fetch('http://localhost:5000/users', {
              method: "POST",
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate('/login')
                }
              })


          })
          .catch(error => console.log(error))

      })
  };

  const validateConfirmPassword = (value) => {
    const password = getValues('password');
    return value === password || 'Passwords do not match';
  };

  return (
    <div>
      <Helmet>
        <title>SignUp | MusicMentor</title>
      </Helmet>
      <p className='text-center text-4xl font-semibold bg-rose-800 p-3 text-white'>Please Sign Up!!!</p>
      <div className='flex justify-center'>
        <div className=" w-[40%]  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control -mt-12">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                className="input input-bordered w-full -mt-1"
              />
              {errors.name && (
                <span className="text-red-700">{errors.name.message}</span>
              )}
            </div>
            <div className="form-control -mt-6">
              <label className="label">
                <span className="label-text ">Email</span>
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Email"
                className="input input-bordered w-full -mt-1"
              />
              {errors.email && (
                <span className="text-red-700">{errors.email.message}</span>
              )}
            </div>
            <div className="form-control -mt-6">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                {...register('photoUrl', { required: 'Photo URL is required' })}
                placeholder="Photo URL"
                className="input input-bordered w-full -mt-1"
              />
              {errors.photoUrl && (
                <span className="text-red-700">{errors.photoUrl.message}</span>
              )}
            </div>
            <div className="form-control -mt-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters',
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message: 'Password must have at least one special character, one number, one uppercase, and one lowercase',
                  },
                })}
                placeholder="Password"
                className="input input-bordered w-full -mt-1"
              />
              {errors.password && (
                <span className="text-red-700">{errors.password.message}</span>
              )}
            </div>
            <div className="form-control -mt-6">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Confirm Password is required',
                  validate: validateConfirmPassword,
                })}
                placeholder="Confirm Password"
                className="input input-bordered w-full -mt-1"
              />
              {errors.confirmPassword && (
                <span className="text-red-700">{errors.confirmPassword.message}</span>
              )}
            </div>
            <div className="form-control -mt-3">
              <input type="submit" className="btn -mb-6 bg-rose-700 text-white hover:bg-rose-900 " value="Sign Up" />
            </div>
          </form>
          <div className="divider -mt-16">OR</div>
          <GoogleLogin />
          <p className="text-center mb-4 text-sm">
            Already have an account?
            <Link to="/login">
              <span className="text-rose-700 text-md font-semibold">
                Please Log In!!!
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;