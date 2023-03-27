import React from 'react';
import banner from '../../Assets/Banner/mattia-faloretti-jbrR_ESWK2A-unsplash.jpg';
import HowWeDo from './HowWeDo';
import OurPrograms from './OurPrograms';

const Home = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img src={banner} alt="contact-banner" className='rounded-b-lg' />
                <div className='absolute top-[35%] right-[10%] text-white'>
                    <h1 className='text-2xl'>LEARN DEEPA MANOHAR'S WAY</h1>
                    <p className='text-6xl max-w-md font-semibold'>
                        A Healthy and a
                        safe journey of
                        healing for you
                    </p>
                    <div className='btn hover:cursor-pointer hover:bg-slate-500 text-center text-black font-medium rounded-3xl py-1 px-3 max-w-[12rem] mx-auto mt-10 bg-gray-400 hover:text-white'>LEARN MORE</div>
                </div>
            </div>

            <div>
                <OurPrograms />
            </div>
            <div>
                <HowWeDo />
            </div>
        </div>
    );
};

export default Home;