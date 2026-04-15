import React, { createContext, useState } from 'react';
export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const handleTimeline = (buttons, expectedFriend) => {
        const friend = {
            ...expectedFriend,
            type:buttons
        }
        // console.log(friend);
        setTimeline([...timeline, friend])
    }
    const data = {
        timeline,
        setTimeline,
        handleTimeline  
    }
    return (
        <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
    );
};

export default FriendsProvider;