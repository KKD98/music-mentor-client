import React from 'react';
import { Link } from 'react-router-dom';

const SingleClass = ({ classItem }) => {
    const { className, classImage, amount,  enroll_total_student, instructorName, totalStudent } = classItem;
    return (
        <div className="card w-full bg-black text-white shadow-xl">
            <figure className="px-0 pt-0">
                <img  src={classImage} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{className}</h2>
                <div className='flex gap-3 justify-between w-full my-2'>
                <p>Amount: ${amount}</p>
                <p>Total Student: {totalStudent}</p>
                </div>
                <div className="card-actions">
                   <Link to="/allclasses"> <button className="btn bg-rose-700 border-none text-white hover:bg-rose-900">See All Classes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;