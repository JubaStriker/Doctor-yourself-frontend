import React from 'react';
import philosophy from '../../Assets/Banner/Our Philosophy.png'

const Clients = () => {
    return (
        <div className='relative bg-gradient-to-br from-cyan-300 via-teal-200 to-sky-100 py-32 pb-80 rounded-tr-[80px] rounded-bl-[80px]'>
            <h1 className='text-center font-bold text-4xl'>We are hear to Serve People to Return Back to Health</h1>
            <p className='text-center font-medium text-2xl mt-5'>Our clients have been</p>

            <div className='flex justify-center gap-10 items-center mt-16'>
                <div className='rounded-tr-[80px] rounded-bl-[80px] bg-white py-10 max-w-lg flex flex-col justify-center items-center px-10 hover:shadow-2xl h-[400px]'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-1.svg" alt="" className='h-48 w-48' />
                    <h1 className='mt-6 mb-2 font-bold text-lg'>Upto 2-3 inch loss</h1>
                    <p className='max-w-[150px]'>with diet and natural supplements</p>
                </div>
                <div className='rounded-tr-[80px] rounded-bl-[80px] bg-white py-10 max-w-lg flex flex-col justify-center items-center px-10 hover:shadow-2xl h-[400px]'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-2.svg" alt="" className='h-48 w-48' />
                    <h1 className='mt-6 mb-2 font-bold text-lg'>Up to 10 kgs weight
                        loss</h1>
                    <p className='max-w-[150px]'>with diet and natural supplements</p>
                </div>
                <div className='rounded-tr-[80px] rounded-bl-[80px] bg-white py-10 max-w-lg flex flex-col justify-center items-center px-10 hover:shadow-2xl h-[400px]'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-3.svg" alt="" className='h-48 w-48' />
                    <h1 className='mt-6 mb-2 font-bold text-lg max-w-[190px] mx-auto text-center'>Relief from hot flashes
                        & mood swings</h1>
                    <p className='max-w-[150px]'>with diet and natural supplements</p>
                </div>
            </div>


            <div className='flex justify-center gap-10 items-center mt-16'>
                <div className='rounded-tr-[80px] rounded-bl-[80px] bg-white py-10 max-w-lg flex flex-col justify-center items-center px-10 hover:shadow-2xl h-[400px]'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-4.svg" alt="" className='h-48 w-48' />
                    <h1 className='mt-6 mb-2 font-bold text-lg'>Upto 2-3 inch loss</h1>
                    <p className='max-w-[150px]'>with diet and natural supplements</p>
                </div>
                <div className='rounded-tr-[80px] rounded-bl-[80px] bg-white py-10 max-w-lg flex flex-col justify-center items-center px-10 hover:shadow-2xl h-[400px]'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/tileIcon-5.svg" alt="" className='h-48 w-48' />
                    <h1 className='mt-6 mb-2 font-bold text-lg'>Up to 10 kgs weight
                        loss</h1>
                    <p className='max-w-[150px]'>with diet and natural supplements</p>
                </div>


            </div>
            <div className='absolute left-[35%]'>
                <img src={philosophy} alt="" className='h-[700px] mt-20 shadow-2xl' />
            </div>
        </div>
    );
};

export default Clients;