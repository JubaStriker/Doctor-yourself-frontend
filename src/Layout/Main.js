import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Navbar/Nav';

const Main = () => {
    return (
        <>
            <div className='relative'>
                <div>
                    <Nav />
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Main;