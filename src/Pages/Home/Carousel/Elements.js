import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
const Elements1 = () => {
    return (
        <div className='bg-slate-100 py-10 my-10 flex justify-center items-center gap-10'>
            <div className='flex flex-col'>
                <img src="https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?b=1&s=170667a&w=0&k=20&c=PNz3dsppr_Q0s_dNI_LaZdoY0oQtH812tvwZ13n-ods=" alt="" className='rounded-xl' />
                <div className='flex gap-5 mt-5'>
                    <AiFillFacebook className='text-3xl ' />
                    <AiFillInstagram className='text-3xl ' />
                    <AiFillLinkedin className='text-3xl ' />

                </div>
            </div>
            <div>
                <h1 className='text-3xl font-medium text-left max-w-lg my-5'>DEEPTA MANOHAR
                    TRANSFORMATION STORIES</h1>

                <p className='max-w-xl'>
                    I was Suffering from digestion issues from past 5 years faced, acidity,
                    bloating along with digestion issues, I had hair fall and acne problem
                    which gave me stress and anxiety and frequently used to suffer from
                    fever So in January 3rd week of this I started taking treatment from
                    Deepta. After Starting the treatment, I slowly started recovering from
                    digestive issues that too without medicines from past few years I was
                    under ayurvedic medicines for digestion. It was very difficult for me to
                    live without medicines with the help of Deepta from guidance Kd
                    healing. And diet my acidity improved. My acne reduced and startled
                    regrowing my hair for which I took number of Supplements and along
                    with that My mind is also clear I'm a happy & healthy person now.
                </p>
            </div>
        </div>
    );
};

export default Elements1;