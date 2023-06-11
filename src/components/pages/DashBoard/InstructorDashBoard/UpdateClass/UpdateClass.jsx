import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const classId = location.pathname.split('/').pop();
    console.log(classId);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        axiosSecure.patch(`/updateclass/${classId}`, {available_seats: data.available_seats , price: data.price})
        .then(data => {
            console.log(data)
            if(data.data.modifiedCount){
                console.log('data:', data.data);
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Class updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div className='bg-black flex flex-col justify-center p-3'>
           <p className='text-rose-700 text-2xl text-center font-semibold -mb-16 pt-4'>Update Class Information</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs -mb-5">
                    <label className="label -mb-2">
                        <span className="label-text text-white">Available Seats*</span>
                    </label>
                    <input type="text" placeholder="Available Seats" className="input input-bordered w-full max-w-xs"
                        {...register("available_seats", { required: true })}
                    />
                </div>
                <div className="form-control w-full max-w-xs -mb-5">
                        <label className="label -mb-2">
                            <span className="label-text text-white">Price*</span>
                        </label>
                        <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs"
                            {...register("price", { required: true })}
                        />
                    </div>
                    <div className='my-4 flex justify-center'>
                        <input className='btn btn-sm w-[70%] bg-rose-700 hover:bg-rose-900 text-white ' type="submit" value="Update Class" />
                    </div>
            </form>
        </div>
    );
};

export default UpdateClass;