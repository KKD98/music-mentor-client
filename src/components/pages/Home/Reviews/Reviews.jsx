import React from 'react';
import image1 from '../../../../assets/pic1.jpg';
import image2 from '../../../../assets/pic2.jpg';
import image3 from '../../../../assets/pic3.jpg';

const Reviews = () => {
    return (
        <div className='my-4'>
         <h1 className='text-center text-3xl font-semibold my-12 text-black'>---Reviews from <span className='text-rose-700'>Students</span>
                ---</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-[90%] md:w-4/5  mx-auto mb-8'>
                    <div className='flex flex-col gap-3 p-5 border-2 border-rose-700 shadow-black shadow-lg'>
                        <p className='text-black font-bold text-xl'>Exceptional Online Music Education!</p>
                        <p className='text-md text-gray-600 font-semibold'>Outstanding online music school with highly skilled instructors, comprehensive curriculum, and user-friendly platform. Truly exceptional!</p>
                        <div className='flex gap-3 items-center'>
                            <img src={image1} alt="" className='rounded-full border-2 border-black w-[20%]'/>
                            <div>
                                <p className='text-gray-600 text-sm font-medium'>Amie</p>
                                <p className='text-gray-600 text-sm font-medium'>Student</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 p-5 border-2 border-rose-700 shadow-black shadow-lg'>
                        <p className='text-black font-bold text-xl'>A Game-Changer for Aspiring Musicians!</p>
                        <p className='text-md text-gray-600 font-semibold'>Flexible and engaging online music school with professional instructors, personalized feedback, and diverse course content. Highly recommended!</p>
                        <div className='flex gap-3 items-center'>
                            <img src={image2} alt="" className='rounded-full border-2 border-black w-[20%]'/>
                            <div>
                                <p className='text-gray-600 text-sm font-medium'>Milan</p>
                                <p className='text-gray-600 text-sm font-medium'>Student</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 p-5 border-2 border-rose-700 shadow-black shadow-lg'>
                        <p className='text-black font-bold text-xl'>Convenience and Excellence in One!</p>
                        <p className='text-md text-gray-600 font-semibold'>Perfect blend of flexibility and quality instruction in this online music school. Highly qualified teachers and seamless platform. Highly recommended!</p>
                        <div className='flex gap-3 items-center'>
                            <img src={image3} alt="" className='rounded-full border-2 border-black w-[20%]'/>
                            <div>
                                <p className='text-gray-600 text-sm font-medium'>Alex</p>
                                <p className='text-gray-600 text-sm font-medium'>Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Reviews;