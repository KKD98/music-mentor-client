import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../providers/AuthProvider';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;


const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const {displayName, email, photoURL} = user;
    console.log(user)

    const { register, handleSubmit, formState: { errors } } = useForm();
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
                    console.log(newClass)
                }
            });
    };

    return (
        <div className='w-full'>
            <Helmet>
                <title>AddAClass | MusicMentor</title>
            </Helmet>
            <p className='text-rose-700 text-4xl text-center font-semibold my-4'>Add a class</p>

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select Class Name*</span>
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
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Class Image*</span>
                        </label>
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs"
                            {...register("class_image", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Available Seats*</span>
                        </label>
                        <input type="text" placeholder="Available Seats" className="input input-bordered w-full max-w-xs"
                            {...register("available_seats", { required: true })}
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs"
                            {...register("price", { required: true })}
                        />
                    </div>
                    <div className='my-4 flex justify-center'>
                        <input className='btn btn-sm bg-rose-700 hover:bg-rose-900 text-white ' type="submit" value="Add Class" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;











