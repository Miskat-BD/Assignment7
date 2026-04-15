import React from 'react';

const RightMid = ({expectedFriend}) => {
    const { goal } = expectedFriend;
    return (
        <div className='flex justify-between items-center border border-gray-200 rounded-2xl px-6 py-12 my-4'>
            <div className="">
                <h1 className='text-xl text-[#244D3F] font-medium mb-5'>Relationship Goal</h1>
                <p className='text-[#64748B]'>Connect every <span className='text-[#1F2937] font-bold'>{goal} days</span></p>
            </div>
            <button className='btn'>Edit</button>
        </div>
    );
};

export default RightMid;