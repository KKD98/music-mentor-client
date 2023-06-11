import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const Feedback = () => {
    const [axiosSecure] = useAxiosSecure();
    const location = useLocation();
    const classId = location.pathname.split('/').pop();
    console.log(classId);

    const { handleSubmit, reset, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data.feedback);


        axiosSecure.patch(`/classfeedback/${classId}`, {feedback: data.feedback})
        .then(data => {
            console.log(data)
            if(data.data.modifiedCount){
                console.log('data:', data.data);
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Feedback added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };

    return (
        <div>
            <p className='text-4xl text-center font-semibold text-rose-700'>Give Feedback</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Your feedback</span>
                    </label>
                    <textarea
                        className={`textarea textarea-bordered h-24 ${errors.feedback ? 'border-red-500' : ''}`}
                        placeholder="Feedback"
                        {...register('feedback', { required: true })}
                    ></textarea>
                    {errors.feedback && <span className="text-red-500">{errors.feedback.message}</span>}
                    <input type="submit" value="Send feedback" className='bg-rose-700 text-white' />
                </div>
            </form>
        </div>
    );
};

export default Feedback;