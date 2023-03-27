import React from 'react';

const MobileApp = () => {
    return (
        <div className='mt-[600px]'>
            <div className='bg-cyan-400 py-10 max-w-6xl mx-auto rounded-lg'>
                <h1 className='text-center font-bold text-4xl'>Our Mobile App</h1>

                <div className='flex items-center justify-center space-x-10 mt-10'>
                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/app.jpeg" alt="" className='h-96 w-72 rounded-xl' />
                    <div>
                        <h1 className='text-2xl my-4 font-semibold'>Want to know more about programs ?</h1>
                        <p className='text-2xl my-4 font-semibold'>Install our app from the playstore
                            now!</p>

                        <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/images/playstore.png" alt="" className='w-56 mt-8 hover:scale-110 duration-300' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileApp;