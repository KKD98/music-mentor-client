import React from 'react';

const ChooseUsSection = () => {
    return (
        <div className='my-3'>
             <h1 className='text-center text-3xl font-semibold mt-12 mb-5 text-black'>---Why Choose <span className='text-rose-700'>Us?</span>
            ---</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-4/5 mx-auto'>
            <div className='shadow-lg shadow-black p-5 border-2 border-rose-800'>
                    <p className='text-black text-2xl mb-3'>Best Teachers</p>
                    <p className='text-gray-700 text-xl'>Our goal is to make the performing arts approachable and affordable to students of every skill level and every age,help you to explore your creativity.</p>
                </div>
                <div className='shadow-lg shadow-black p-5 border-2 border-rose-800'>
                    <p className='text-black text-2xl mb-3'>Award-Winning Process</p>
                    <p className='text-gray-700 text-xl'>Whether you are taking your first steps into music and dance, returning to an old passion, or looking to hone your talents to a professional level.</p>
                </div>
                <div className='shadow-lg shadow-black p-5 border-2 border-rose-800'>
                    <p className='text-black text-2xl mb-3'>Great Community</p>
                    <p className='text-gray-700 text-xl'>Research has shown that young people who study music outperform in academics due to the enhanced brain development and focus, can help build confidence.</p>
                </div>
            </div>
                
        </div>
    );
};

export default ChooseUsSection;