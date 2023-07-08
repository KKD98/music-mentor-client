import React from 'react';
import img from '../../../../assets/extraimage.jpg'
import { Link } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';


const ExtraSection = () => {
    return (
        <div className="my-4 relative">
      <div className="relative">
        <img src={img} alt="Extra Image" className='md:h-screen w-full'/>
        <div className="slider-text absolute top-0 lg:top-14 left-0 p-8 text-white">
        <Slide>
          <p className="text-xl lg:text-4xl font-bold">
            Let's start your class & become a great musician
          </p>
          </Slide>
          <Fade delay={1e3} cascade damping={1e-1}>
          <p className="my-2 lg:mt-4 lg:mb-6 font-bold text-md lg:text-2xl text-rose-800">
            For Start Your Course At Music Mentor
          </p>
          </Fade>
         
         <Link to="/signup">
         <button className="btn bg-rose-700 border-none text-white hover:bg-rose-900">
            Please Register
          </button>
         </Link>
    
        </div>
      </div>
    </div>
    );
};

export default ExtraSection;