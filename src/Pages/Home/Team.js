import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Team = () => {
    return (
        <div className='bg-sky-300 py-28 relative'>
            <h1 className='text-center font-bold text-4xl'>Your Expert Care Team</h1>
            <p className='text-center font-medium text-2xl mt-5'>Finest care from our top care specialists</p>

            <div className='flex justify-around mt-16 absolute left-[24%] bg-transparent'>
                <div className='flex flex-col mr-20  bg-white pb-5 shadow-xl'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/deepta.jpg" alt="" className='h-96 w-96 border-[30px] border-white ' />
                    <h1 className='text-3xl font-extrabold text-center'>DEEPTA MANOHAR</h1>
                    <p className='text-sm max-w-sm my-2 mx-auto text-center text-gray-600'>
                        Acutouch Therapist and
                        Self Mastery Coach
                    </p>
                    <div className='flex gap-5 mt-5 justify-center'>
                        <AiFillFacebook className='text-3xl ' />
                        <AiFillInstagram className='text-3xl ' />
                        <AiFillLinkedin className='text-3xl ' />

                    </div>
                </div>
                <div className='flex flex-col bg-white pb-5 shadow-xl'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/gowtham.jpeg" alt="" className='h-96 w-96 border-[30px] border-white ' />
                    <h1 className='text-3xl font-extrabold text-center'>GOWTHAM KUMAR D</h1>
                    <p className='text-sm max-w-sm my-2 mx-auto text-center text-gray-600'>
                        Acutouch Therapist and
                        Self Mastery Coach
                    </p>
                    <div className='flex gap-5 mt-5 justify-center'>
                        <AiFillFacebook className='text-3xl ' />
                        <AiFillInstagram className='text-3xl ' />
                        <AiFillLinkedin className='text-3xl ' />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;