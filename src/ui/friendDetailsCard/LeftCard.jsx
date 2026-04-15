import React from 'react';

const LeftCard = ({ expectedFriend }) => {
    const { name, picture, email, status, tags,bio } = expectedFriend;

    return (
        <div className="">
            {/* up */}
            <div className="">
                <div className='p-6 rounded-2xl  text-center shadow space-y-3 mb-6'>
                    <div className="flex justify-center">
                        <img src={picture} alt="" className='' />

                    </div>
                    <h1 className='text-[20px] font-semibold text-[#1F2937]'>{name}</h1>

                    <div className={`badge text-white ${status == 'overdue' ? 'bg-red-500' : status == 'on-track' ? 'bg-green-700' : 'bg-amber-400'}`}>{status == 'overdue' ? 'Overdue' : status == 'on-track' ? 'On-Track' : 'Almost Due'} </div>

                    <div className="">
                        {
                            tags.map((tag, i) => <div key={i} className="badge font-medium mr-2 bg-[#CBFADB] text-[#244D3F]">{tag.toUpperCase()}</div>)
                        }
                    </div>
                    <p className='text-[#64748B]'><i>{bio}</i></p>
                    <p className='text-[#64748B] text[14px]'>Preferred: {email}</p>
                </div>
            </div>
            {/* down */}
            <div className="grid grid-cols-1 space-y-4">
                <button className='btn'>Snooze 2 weeks</button>
                <button className='btn'>Archive</button>
                <button className='btn'>Delete</button>
            </div>
        </div>
    );
};

export default LeftCard;