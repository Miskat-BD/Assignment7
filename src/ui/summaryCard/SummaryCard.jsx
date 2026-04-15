import React from 'react';
import useFriendData from '../../hooks/useFriendsData/useFriendData';

const SummaryCard = () => {
    const {friends} = useFriendData();
    // console.log(friends, 'banner');
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center'>
            <div className="border border-gray-200 rounded-2xl px-6 py-12">
                <h1 className='text-3xl text-[#244D3F] font-semibold'>{friends.length}</h1> 
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div className="border border-gray-200 rounded-2xl px-8 py-12">
                <h1 className='text-3xl text-[#244D3F] font-semibold'>4</h1>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className="border border-gray-200 rounded-2xl px-8 py-12">
                <h1 className='text-3xl text-[#244D3F] font-semibold'>6</h1>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className="border border-gray-200 rounded-2xl px-8 py-12">
                <h1 className='text-3xl text-[#244D3F] font-semibold'>12</h1>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default SummaryCard;