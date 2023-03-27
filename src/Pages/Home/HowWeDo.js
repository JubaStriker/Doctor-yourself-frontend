import React from 'react';

const HowWeDo = () => {
    return (
        <div className='my-28'>
            <h1 className='text-center font-bold text-5xl'>HOW WE DO IT ?</h1>
            <p className='text-center mt-5 font-medium'>ACCUTOUCH THERAPY</p>




            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='relative w-1/2'>
                    <svg className='w-full h-full hidden md:block' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#75e9e5" d="M38.3,-58.1C52.5,-50.5,68.9,-44.7,76.1,-33.4C83.3,-22.1,81.4,-5.4,77,9.6C72.5,24.5,65.5,37.6,55,45.1C44.5,52.5,30.5,54.4,17,58.9C3.5,63.3,-9.6,70.3,-21.8,69.1C-33.9,67.8,-45.2,58.4,-54.7,47.4C-64.3,36.4,-72.1,24,-76.6,9.5C-81.1,-5.1,-82.3,-21.6,-76,-34.4C-69.7,-47.3,-55.9,-56.4,-42,-64.1C-28,-71.8,-14,-78.2,-1,-76.7C12.1,-75.2,24.1,-65.7,38.3,-58.1Z" transform="translate(100 100)" />
                    </svg>

                    <img src="https://media.istockphoto.com/id/961730934/photo/vegetarian-buddha-bowl-with-quinoa-and-fresh-vegetables-healthy-food-concept-vegan-salad-top.jpg?s=612x612&w=0&k=20&c=0r2VgC4VrKsSSafr-fQRiTWSntjEJdZOUJtlRN3d1qE=" alt='' className="border-10 w-3/5 left-36 top-[27%] absolute rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mb-10'>DIET</h1>
                    <p className='max-w-lg'>Right food is the basis of all health. We will work with
                        you to help you understand what to eat and what to
                        avoid.</p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Click Here</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-center items-center'>
                <div className='relative w-1/2'>
                    <svg className='w-full h-full hidden md:block' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#75e9e5" d="M42.1,-48.6C54.6,-39.6,64.9,-26.4,69.1,-10.9C73.3,4.6,71.4,22.4,63.6,37.4C55.7,52.4,41.1,64.6,25.6,70.6C9.4,76.6,-9.1,76.3,-26.8,71C-44.5,65.7,-61.2,55.4,-67.9,40.7C-74.5,26.1,-71.1,7.1,-63.9,-7.4C-56.7,-21.8,-45.9,-31.8,-34.6,-41C-23.3,-50.1,-11.9,-58.6,1.6,-60.4C14.8,-62.3,29.6,-57.6,42.1,-48.6Z" transform="translate(100 100)" />
                    </svg>

                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/3ojyyf2632223ekuqd259a7e-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/tile-3.jpg" alt='' className="border-10 w-3/5 left-36 top-[35%] absolute rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mb-10'>Healthy & Colorful
                        Recipes</h1>
                    <p className='max-w-lg'>In your kitchen sits the wisdom of Ayurvedic herbs and
                        ingredients for wellness. We tell you how to use them.</p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Click Here</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='relative w-1/2'>
                    <svg className='w-full h-full hidden md:block' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#75e9e5" d="M38.3,-58.1C52.5,-50.5,68.9,-44.7,76.1,-33.4C83.3,-22.1,81.4,-5.4,77,9.6C72.5,24.5,65.5,37.6,55,45.1C44.5,52.5,30.5,54.4,17,58.9C3.5,63.3,-9.6,70.3,-21.8,69.1C-33.9,67.8,-45.2,58.4,-54.7,47.4C-64.3,36.4,-72.1,24,-76.6,9.5C-81.1,-5.1,-82.3,-21.6,-76,-34.4C-69.7,-47.3,-55.9,-56.4,-42,-64.1C-28,-71.8,-14,-78.2,-1,-76.7C12.1,-75.2,24.1,-65.7,38.3,-58.1Z" transform="translate(100 100)" />
                    </svg>

                    <img src="http://www.deeptamanohar.life.s3-website.ap-south-1.amazonaws.com/3ojyyf2632223ekuqd259a7e-wpengine.netdna-ssl.com/wp-content/uploads/2020/12/tile-5.jpg" alt='' className="border-10 w-3/5 left-36 top-[27%] absolute rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold mb-10'>Lifestyle</h1>
                    <p className='max-w-lg'>We give you simple bio-hacks to give your health a head
                        start</p>
                    <button className='px-4 py-1 rounded-lg mt-7 hover:bg-cyan-600 bg-cyan-400 text-white'>Click Here</button>
                </div>
            </div>
        </div>
    );
};

export default HowWeDo;