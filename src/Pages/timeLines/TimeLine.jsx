import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import TimelinesCard from '../../ui/TimelinesCard/TimelinesCard';
import EmptyTimeline from '../../ui/EmptyTimeline/EmptyTimeline';

const TimeLine = () => {
    const { timeline } = useContext(FriendsContext)
    const [filterTimeline, setFilterTimeline] = useState([...timeline])
    // console.log(timeline, 'timeline');
    const handleFilter = (click) => {
        if (click == 'All') {
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

            <br />
            <select defaultValue="All" className="select mb-7 ml-3" onChange={(e) => handleFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Call">Call</option>
                <option value="Text">Text</option>
                <option value="Video">Video</option>
            </select>

            {/* <select defaultValue="All" className="select mb-7 ml-3">

                <option onClick={() => handleFilter('All')}>All</option>
                <option onClick={() => handleFilter('Call')}>Call</option>
                <option onClick={() => handleFilter('Text')}>Text</option>
                <option onClick={() => handleFilter('Video')}>Video</option>
            </select> */}
            {
                filterTimeline.length == 0 ? (
                    <EmptyTimeline text={'No Activity Yet'} />
                ) :
                    (filterTimeline.map((card, i) => <TimelinesCard key={i} card={card}></TimelinesCard>))
            }
        </div>
    );
};

export default TimeLine;