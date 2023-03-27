import React from 'react';
import pregnancy from '../../Assets/Programs/1.png'
import weightLoss from '../../Assets/Programs/2.png'
import thyroid from '../../Assets/Programs/3.png'
import menopose from '../../Assets/Programs/4.png'


const OurPrograms = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center font-bold text-5xl'>OUR PROGRAMS</h1>
            <p className='text-center mt-5 font-medium'>RETURN TO HEALTHY</p>

            <div className='grid grid-cols-2 justify-center items-center mt-16 mx-auto max-w-6xl'>
                <div className='mx-auto flex flex-col justify-start items-center'>
                    <img src={pregnancy} alt="" className='h-40 w-40' />
                    <h1 className='text-lg font-medium'>Healthy Pregnancy</h1>
                    <p className='max-w-xs text-center mt-2'>Make sure of good health for both mother and children</p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Learn More</button>
                </div>
                <div className='mx-auto flex flex-col justify-start items-center'>
                    <img src={weightLoss} alt="" className='h-40 w-40' />
                    <h1 className='text-lg font-medium'>Weight Loss</h1>
                    <p className='max-w-xs text-center mt-2'>Proper exercise guidance to loose extra weight </p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Learn More</button>
                </div>
                <div className='mx-auto flex flex-col justify-start items-center'>
                    <img src={thyroid} alt="" className='h-40 w-40' />
                    <h1 className='text-lg font-medium'>Thyroid</h1>
                    <p className='max-w-xs text-center mt-2'>Checkup programs and diet tips for preventing thyroid diseases</p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Learn More</button>
                </div>
                <div className='mx-auto flex flex-col justify-start items-center'>
                    <img src={menopose} alt="" className='h-40 w-40' />
                    <h1 className='text-lg font-medium'>Menupase</h1>
                    <p className='max-w-xs text-center mt-2'>Proper exercise and diet guidance to prevent early menupose in women</p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default OurPrograms;