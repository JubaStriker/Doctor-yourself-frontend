import React from 'react';

const HowProgramWorks = () => {
    return (
        <div className='bg-slate-100 py-20'>
            <h1 className='text-center font-bold text-5xl'>How the Program Works</h1>

            <div className='flex justify-center gap-10 items-center mt-16'>
                <div>
                    <h1 className='my-2 ml-2 font-medium'>Step - 1</h1>
                    <div className='rounded-xl bg-indigo-500 hover:scale-105 duration-500 hover:bg-purple-300 py-10 max-w-lg flex flex-col justify-center items-center px-10 h-[400px]'>
                        <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/step1.svg" alt="" className='h-48 w-48' />
                        <h1 className='max-w-[200px] text-center mt-6 mb-2 font-bold text-lg'>Clarity Call</h1>
                        <p className='max-w-[200px]'>Have a call with us to know how we work. Make program payment. Start program from comfort of your home.</p>
                    </div>
                </div>
                <div>
                    <h1 className='my-2 ml-2 font-medium'>Step - 2</h1>
                    <div className='rounded-xl bg-indigo-500 hover:scale-105 duration-500 hover:bg-purple-300 py-10 max-w-lg flex flex-col justify-center items-center px-10 h-[400px]'>
                        <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/step2.svg" alt="" className='h-48 w-48' />
                        <h1 className='max-w-[200px] text-center mt-6 mb-2 font-bold text-lg'>Register to one of our program</h1>
                        <p className='max-w-[200px]'>On your diet, supplements, lifestyle, etc. Explanations sent via text, images & videos.</p>
                    </div>
                </div>
                <div>
                    <h1 className='my-2 ml-2 font-medium'>Step - 3</h1>
                    <div className='rounded-xl bg-indigo-500 hover:scale-105 duration-500 hover:bg-purple-300 py-10 max-w-lg flex flex-col justify-center items-center px-10 h-[400px]'>
                        <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/step3.svg" alt="" className='h-48 w-48' />
                        <h1 className='text-center max-w-[200px] mt-6 mb-2 font-bold text-lg'>Connecting the medical history</h1>
                        <p className='max-w-[200px]'>Fill out a medical history form, do a blood test and have a detailed call with our medical expert.</p>
                    </div>
                </div>
                <div>
                    <h1 className='my-2 ml-2 font-medium'>Step - 4</h1>
                    <div className='rounded-xl bg-indigo-500 hover:scale-105 duration-500 hover:bg-purple-300 py-10 max-w-lg flex flex-col justify-center items-center px-10 h-[400px]'>
                        <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/step4.svg" alt="" className='h-48 w-48' />
                        <h1 className='text-center max-w-[200px] mt-6 mb-2 font-bold text-lg'>Follow Up Consults</h1>
                        <p className='max-w-[200px]'>happen each month. Health progress reviewed. Changes made, when needed.

                            Ask questions on chat/mail. (working hours only please)</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default HowProgramWorks;