import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from '../../../../assets/drums.jpg'
import img2 from '../../../../assets/guitar.jpg'
import img3 from '../../../../assets/piano.jpg'
import img5 from '../../../../assets/cello.jpg'


const Banner = () => {
    return (
        <div className='mb-8'>
            <AwesomeSlider>
                <div className='slider-item relative'>
                    <img src={img1} alt="Slide 1" />
                    <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    <div className="mt-8 lg:mt-0 slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <p className='text-xl lg:text-3xl font-bold'>Experience the Magic of Music With</p>
                        <p  className='my-2 lg:mt-4 lg:mb-6 font-bold text-xl lg:text-4xl text-rose-800'>Music Mentor</p>
                        <button className="btn w-[50%] lg:w-[30%] bg-rose-700 border-none text-white hover:bg-rose-900">Discover More</button>
                    </div>
                </div>
                <div className='slider-item relative'>
                    <img src={img2} alt="Slide 1" />
                    <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    <div className="mt-8 lg:mt-0 slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <p className='text-xl lg:text-3xl font-bold'>Discover the Joy of Music With</p>
                        <p  className='my-2 lg:mt-4 lg:mb-6 font-bold text-xl lg:text-4xl text-rose-800'>Music Mentor</p>
                        <button className="btn w-[50%] lg:w-[35%] bg-rose-700 border-none text-white hover:bg-rose-900">Discover More</button>
                    </div>
                </div>
                <div className='slider-item relative'>
                    <img src={img3} alt="Slide 1" />
                    <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    <div className="mt-8 lg:mt-0 slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <p className='text-xl lg:text-3xl font-bold'>Uncover Your Musical Potential With</p>
                        <p  className='my-2 lg:mt-4 lg:mb-6 font-bold text-xl lg:text-4xl text-rose-800'>Music Mentor</p>
                        <button className="btn w-[50%] lg:w-[30%] bg-rose-700 border-none text-white hover:bg-rose-900">Discover More</button>
                    </div>
                </div>
                <div className='slider-item relative'>
                    <img src={img5} alt="Slide 1" />
                    <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                    <div className="mt-8 lg:mt-0 slider-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        <p className='text-xl lg:text-3xl font-bold'>Elevate Your Musical Journey With</p>
                        <p  className='my-2 lg:mt-4 lg:mb-6 font-bold text-xl lg:text-4xl text-rose-800'>Music Mentor</p>
                        <button className="btn w-[50%] lg:w-[30%] bg-rose-700 border-none text-white hover:bg-rose-900">Discover More</button>
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;

