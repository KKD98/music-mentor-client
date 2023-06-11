import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../providers/AuthProvider';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {displayName, email, photoURL} = user;

    const { register, handleSubmit, reset } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.class_image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const imgURL = imgRes.data.display_url;
                    const { class_name, available_seats, price } = data;
                    const newClass = { instructor_name:displayName, instructor_email: email, instructor_image: photoURL, class_name, class_image: imgURL, available_seats: parseInt(available_seats), price: parseFloat(price), status: "pending" };
                    console.log("newClass:", newClass);
                    axiosSecure.post('/addclass', newClass)
                    .then(data => {
                        console.log('posting class:', data.data);
                        if(data.data.insertedId){
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Class added successfully',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            });
    };

    return (
        <div className=' bg-black w-[90%] h-[620px]'>
            <Helmet>
                <title>AddAClass | MusicMentor</title>
            </Helmet>
            <p className='text-white text-4xl text-center font-semibold -mb-16 pt-4'>Add a class</p>

            <div className='flex justify-center p-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs -mb-5">
                        <label className="label -mb-2">
                            <span className="label-text text-white">Select Class Name*</span>
                        </label>
                        <select defaultValue="Pick one" className="select select-bordered"  {...register("class_name", { required: true })}>
                            <option disabled>Pick one</option>
                            <option>Guitar</option>
                            <option>Piano</option>
                            <option>Tabla</option>
                            <option>Cello</option>
                            <option>Drums</option>
                            <option>Harmonium</option>
                            <option>Tanpura</option>
                            <option>Flute</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs -mb-5">
                        <label className="label -mb-2">
                            <span className="label-text text-white">Class Image*</span>
                        </label>
                        
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                            {...register("class_image", { required: true })}
                        />
                    </div>
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
                        <input className='btn btn-sm w-[50%] bg-rose-700 hover:bg-rose-900 text-white ' type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;











