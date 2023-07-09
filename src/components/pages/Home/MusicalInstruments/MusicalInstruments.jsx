import React from 'react';
import { FaGuitar } from 'react-icons/fa';
import guitar from '../../../../assets/guitaricon.png'
import piano from '../../../../assets/pianoicon.png'
import tabla from '../../../../assets/tablaicon.png'
import tanpura from '../../../../assets/tanpuraicon.png'
import harmonium from '../../../../assets/harmoniumicon.png'
import flute from '../../../../assets/fluteicon.png'
import cello from '../../../../assets/celloicon.png'
import drums from '../../../../assets/drumsicon.png'

const MusicalInstruments = () => {
    return (
        <div>
              <h1 className='text-center text-3xl font-semibold my-12 text-black'>---Musical Instruments <span className='text-rose-700'>Classes</span>
                ---</h1>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-3 w-[90%] md:w-4/5 mx-auto'>
                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={guitar} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Guitar</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Strum your way to musical expression with the captivating sound and versatility of the guitar.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={piano} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Piano</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Unleash your musical creativity with the timeless elegance and versatility of the piano.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={tabla} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Tabla</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Discover the rhythmic magic of the tabla, the soulful heartbeat of Indian classical music.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={tanpura} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Tanpura</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Indulge in the enchanting drones of the tanpura, adding a harmonious essence to your musical exploration.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={flute} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Flute</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Embark on a melodious journey as the enchanting notes of the flute transport you to a world of serene beauty.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={cello} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Cello</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Let the soulful resonance of the cello captivate your heart and evoke profound emotions with each bow stroke.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={harmonium} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Harmonium</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Experience the harmonic bliss and cultural richness of the harmonium, an instrument that breathes life into traditional melodies.</p>
                    </div>

                    <div className='flex flex-col items-center gap-2 border-2 border-rose-700 shadow-lg shadow-black p-2 md:p-5'>
                    <div className='border-2 border-rose-800 rounded-full p-5 w-[70%]'>
                    <img src={drums} alt="" />
                    </div>
                       <p className='text-xl text-black font-semibold'>Drums</p>
                       <p  className='text-md text-gray-600 font-medium text-center'>Unleash your rhythm and feel the heartbeat of the music with the powerful and dynamic sound of drums.</p>
                    </div>
                   
                </div>

        </div>
    );
};

export default MusicalInstruments;