import React from 'react';
import Banner from '../../components/Banner/Banner';
import SummaryCard from '../../ui/summaryCard/SummaryCard';
import Friends from '../../components/Friends/Friends';

const HomePage = () => {
    return (
        <div>
            <Banner/>
            <SummaryCard />
            <Friends/>
        </div>
    );
};

export default HomePage;