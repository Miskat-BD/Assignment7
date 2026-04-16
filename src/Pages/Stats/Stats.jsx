import React, { useContext } from 'react';

import EmptyTimeline from '../../ui/EmptyTimeline/EmptyTimeline';
import InteractionsCard from '../../ui/InteractionsCard/InteractionsCard';
import { FriendsContext } from '../../context/FriendsContext';

const Stats = () => {
    const { timeline } = useContext(FriendsContext)
    // console.log(call.length, text.length, video.length, 'stats');
    // console.log(timeline);

    return (
        <div className=' container mx-auto  my-12'>
            <h1 className='text-[#1F2937] text-3xl font-bold sm:text-5xl mb-7'>Friendship Analytics</h1>

            {
                timeline.length == 0 ? (
                    <EmptyTimeline text={'No Interactions Here'} />
                ) : <InteractionsCard />

            }
        </div>
    );
};

export default Stats;