import React from 'react';

const SingleInstructor = ({ singleInstructor }) => {
    const { image, instructor_name, class_names} = singleInstructor;
    return (
        <div className="flex items-center p-3 bg-black text-white rounded-lg">
            <div className='w-1/2'>
                <img className='w-[70%] rounded-full border-2 border-rose-800' src={image} alt="" />
            </div>
            <div className='w-1/2 flex-1'>
                <p className='text-rose-700 text-xl mb-2'>Instructor Name: {instructor_name}</p>
                <div>
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