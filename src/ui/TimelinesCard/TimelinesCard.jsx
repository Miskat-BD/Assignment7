import React from 'react';
import callImg from '../../assets/images/call.png'
import textImg from '../../assets/images/text.png'
import videoImg from '../../assets/images/video.png'
const TimelinesCard = ({ card }) => {
    const { name, type } = card;

    return (
        <div className="flex gap-6 items-center p-6 mb-4 border border-gray-200 rounded-2xl">
            <div>
                <img src={type == 'Text' ? textImg : type == 'Call' ? callImg : videoImg} className='max-sm:w-7' />
            </div>
            <div className="">
                <h1><span className='font-medium text-xl'>{type}</span> with {name}</h1>
                <p>
                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][new Date().getMonth()]}{" "}
                    {new Date().getDate()}, {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default TimelinesCard;