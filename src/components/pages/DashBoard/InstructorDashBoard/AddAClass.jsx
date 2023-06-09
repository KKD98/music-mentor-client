import React from 'react';
import { Helmet } from 'react-helmet-async';
import {useForm} from 'react-hook-form';


const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddAClass = () => {
    
    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = data => {
        console.log(data);
        
    }

    console.log(image_hosting_token)

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
                    <select defaultValue="Pick one" className="select select-bordered"  {...register("class_name", {required: true})}>
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
                         {...register("class_image", {required: true})}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Available Seats*</span>
                    </label>
                    <input type="text" placeholder="Available Seats" className="input input-bordered w-full max-w-xs" 
                        {...register("available_seats", {required: true})}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price*</span>
                    </label>
                    <input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" 
                         {...register("price", {required: true})}
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