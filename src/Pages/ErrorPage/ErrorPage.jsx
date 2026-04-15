import React from 'react';
import { ImHome } from 'react-icons/im';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center p-28 space-y-4'>
            <h1 className='font-bold text-7xl text-[#244D3F]'>404</h1>
            <p className='text-[#1e2938] font-bold text-2xl'>Page Not Found</p>
            <p>Looks like this friendship link is brokon. The page <br /> you're looking for doesn't exist or has been moved.</p>
            <Link to={'/'}><button className='btn text-white bg-[#244D3F] '><ImHome></ImHome> Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;