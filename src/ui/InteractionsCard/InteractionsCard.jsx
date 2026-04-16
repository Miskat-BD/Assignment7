import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const InteractionsCard = () => {
    const { timeline } = useContext(FriendsContext)
    const call = timeline.filter(item => item.type == 'Call')
    const text = timeline.filter(item => item.type == 'Text')
    const video = timeline.filter(item => item.type == 'Video')
    const data = [
        { name: 'Call', value: call.length, fill: '#0088FE' },
        { name: 'Text', value: text.length, fill: '#00C49F' },
        { name: 'Video', value: video.length, fill: '#FFBB28' }
    ];
    return (
        <div>
            <div className="border rounded-xl border-gray-400 p-10">
                <h1 className='text-[#244D3F] text-xl font-medium'>By Interaction Type</h1>
                <div className='flex justify-center items-center '>
                    <PieChart style={{ width: '50%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                        <Pie
                            data={data}
                            innerRadius="80%"
                            outerRadius="100%"
                            // Corner radius is the rounded edge of each pie slice
                            cornerRadius="50%"
                            fill="#8884d8"
                            // padding angle is the gap between each pie slice
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        />
                        <Legend />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default InteractionsCard;