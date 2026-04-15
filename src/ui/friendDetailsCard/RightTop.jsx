import React from 'react';

const RightTop = ({ expectedFriend }) => {
    const {days_since_contact,goal, next_due_date } = expectedFriend;
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-4 text-center'>
                <div className="border border-gray-200 rounded-2xl px-6 py-12">
                    <h1 className='sm:text-3xl text-[#244D3F] font-semibold'>{days_since_contact}</h1>
                    <p className='text-[#64748B]'>Days Since Contact</p>
                </div>
                <div className="border border-gray-200 rounded-2xl px-8 py-12">
                    <h1 className='sm:text-3xl text-[#244D3F] font-semibold'>{goal}</h1>
                    <p className='text-[#64748B]'>Goal (Days)</p>
                </div>
                <div className="border border-gray-200 rounded-2xl px-8 py-12">
                    <h1 className='sm:text-3xl text-[#244D3F] font-semibold'>{next_due_date}</h1>
                    <p className='text-[#64748B]'>Next Due</p>
                </div>
            </div>
        </div>
    );
};

export default RightTop;