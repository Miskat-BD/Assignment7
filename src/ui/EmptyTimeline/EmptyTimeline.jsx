import React from 'react';
import emptyImg from '../../assets/images/empty.jpg'
import { Link } from 'react-router';
const EmptyTimeline = ({text}) => {
    return (
        <div className='container mx-auto pb-10 px-5 pt-5 border rounded-2xl text-center space-y-3.5'>
            <div className="flex justify-center items-center">
                <img src={emptyImg} alt="" />
            </div>
            <h1 className='text-3xl font-bold'>{text}</h1>
            <p className='text-gray-400'>You don't have any timeline activity right now. Start interacting with your friends to see updates here.</p>
            <Link to={'/'} className='btn bg-[#244D3F] text-white'>Add Activity</Link>
        </div>
    );
};

export default EmptyTimeline;