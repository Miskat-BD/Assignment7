import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
    const {id, name, picture, days_since_contact, status, tags} = friend;
    // console.log(id, 'id');
    return (
        <Link to={`/friend-details/${id}`} className='p-6 rounded-2xl border text-center shadow space-y-3'>
            <div className="flex justify-center">
            <img src={picture} alt="" className=''/>

            </div>
            <h1 className='text-[20px] font-semibold text-[#1F2937]'>{name}</h1>
            <p className='text-[12px] text-[#64748B]'>{days_since_contact}d ago</p>
            <div className="">
            {
                tags.map((tag, i) => <div key={i} className="badge font-medium mr-2 bg-[#CBFADB] text-[#244D3F]">{tag.toUpperCase()}</div>)
            }
            </div>
            <div className={`badge text-white ${status == 'overdue' ? 'bg-red-500' : status == 'on-track' ? 'bg-green-700' : 'bg-amber-400'}`}>{status == 'overdue'? 'Overdue' : status == 'on-track' ? 'On-Track': 'Almost Due'} </div>
        </Link>
    );
};

export default FriendsCard;