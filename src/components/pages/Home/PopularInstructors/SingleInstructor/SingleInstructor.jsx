import React from 'react';

const SingleInstructor = ({ singleInstructor }) => {
    const { image, instructor_name, class_names} = singleInstructor;
    return (
        <div className="flex items-center p-3 bg-white text-black rounded-lg border-2 border-rose-700 shadow-lg shadow-black">
            <div className='w-1/2'>
                <img className='w-[70%] rounded-full border-2 border-rose-700' src={image} alt="" />
            </div>
            <div className='w-1/2 flex-1'>
                <p className='text-black font-semibold text-xl w-full mb-2'>{instructor_name}</p>
                <div className='text-gray-700 text-md'>
                    <p>Classes taken by {instructor_name} are:</p>
                    {
                        class_names.map((name, index) => <p key={index}>{index+1}. {name}</p>)
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;