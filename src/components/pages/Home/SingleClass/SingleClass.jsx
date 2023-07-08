import React from 'react';
import { Link } from 'react-router-dom';

const SingleClass = ({ classItem }) => {
    const { class_name, class_image, price,  enrolled_student, instructor_name, } = classItem;
    return (
        <div className="card w-full text-white bg-black shadow-black border-2 border-rose-800 shadow-xl">
            <figure className="px-0 pt-0">
                <img className='p-4 h-56 w-full'  src={class_image} />
            </figure>
            <div className="card-body items-center text-center">
            <p className="text-xl">Instructor Name: {instructor_name}</p>
                <h2 className="text-xl">Class Name: {class_name}</h2>
                <div className='flex gap-3 justify-between w-full my-2'>
                <p>Price: ${price}</p>
                <p>Enrolled Student: {enrolled_student}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;