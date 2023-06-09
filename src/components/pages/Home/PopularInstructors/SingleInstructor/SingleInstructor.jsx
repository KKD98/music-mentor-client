import React from 'react';

const SingleInstructor = ({ singleInstructor }) => {
    const { instructorImage, name, instructor_class } = singleInstructor;
    return (
        <div className="flex items-center bg-black text-white">
            <div className='w-1/2'>
                <img className='w-[60%]' src={instructorImage} alt="" />
            </div>
            <div className='w-1/2'>
                <p>Instructor Name: {name}</p>
                {
                    instructor_class.map(item => <p key={item}>{item}</p>)
                }
            </div>
        </div>
    );
};

export default SingleInstructor;