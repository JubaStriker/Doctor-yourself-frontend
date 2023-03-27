import React, { useEffect, useState } from 'react';
import logo from '../Assets/Logo/Logo with name.png'

const Nav = () => {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 300) {
            setHasScrolled(true);
        } else {
            setHasScrolled(false);
        }
    };

    return (
        <div className='relative'>
            <div className={`z-10 bg-transparent fixed top-0 ${hasScrolled ? 'bg-white shadow-lg backdrop-filter bg-opacity-70 backdrop-blur-lg' : 'bg-transparent'} transition-colors duration-500 ease-in-out w-full flex justify-between items-center`}>
                <img src={logo} alt="" className='h-[60px] w-[100px] py-1 ml-24 mt-1' />
                <div className={`flex gap-5 font-semibold mr-24 ${hasScrolled ? 'text-black' : 'text-white'} hidden lg:flex`}>
                    <p className='hover:text-cyan-500 cursor-pointer'>OUR PROGRAM</p>
                    <p className='hover:text-cyan-500 cursor-pointer'>HOW WE WORK</p>
                    <p className='hover:text-cyan-500 cursor-pointer'>OUR TEAM</p>
                    <p className='hover:text-cyan-500 cursor-pointer'>ACCUTOCH</p>
                    <p className='hover:text-cyan-500 cursor-pointer'>ABOUT US</p>
                    <p className='hover:text-cyan-500 cursor-pointer'>CONTACT US</p>
                </div>
            </div>
        </div >
    );
};

export default Nav;