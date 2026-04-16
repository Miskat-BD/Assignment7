import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import TimelinesCard from '../../ui/TimelinesCard/TimelinesCard';
import EmptyTimeline from '../../ui/EmptyTimeline/EmptyTimeline';

const TimeLine = () => {
    const { timeline } = useContext(FriendsContext)
    const [filterTimeline, setFilterTimeline] = useState([...timeline])
    // console.log(timeline, 'timeline');
    const handleFilter = (click) => {
        if(click == 'All'){
            setFilterTimeline(timeline)
            return;
        }
        const newItem = timeline.filter(item => item.type == click)
        // console.log(newItem);
        setFilterTimeline(newItem)
        
    }
    return (
        <div className="container mx-auto my-10">
            <div className='text-5xl font-bold text-[#1F2937] mb-7'>
                <h2>Timeline</h2>
            </div>
           
            <div className="dropdown dropdown-start my-4">
                <div tabIndex={0} role="button" className="btn m-1">All ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleFilter('All')}><a>All</a></li>
                    <li onClick={() => handleFilter('Call')}><a>Call</a></li>
                    <li onClick={() => handleFilter('Text')}><a>Text</a></li>
                    <li onClick={() => handleFilter('Video')}><a>Video</a></li>
                    
                </ul>
            </div>
            {
                filterTimeline.length == 0 ? (
                    <EmptyTimeline text={'No Activity Yet'}/>
                ) :
                    (filterTimeline.map((card, i) => <TimelinesCard key={i} card={card}></TimelinesCard>))
            }
        </div>
    );
};

export default TimeLine;