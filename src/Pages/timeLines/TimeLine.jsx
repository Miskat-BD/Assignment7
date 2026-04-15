import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import TimelinesCard from '../../ui/TimelinesCard/TimelinesCard';

const TimeLine = () => {
    const { timeline } = useContext(FriendsContext)
    // console.log(timeline);
    return (
        <div className="container mx-auto my-10">
            <div className='text-5xl font-bold text-[#1F2937] mb-7'>
                <h2>Timeline</h2>
            </div>
            {
                timeline.map((card, i) => <TimelinesCard key={i} card={card}></TimelinesCard>)
            }
        </div>
    );
};

export default TimeLine;