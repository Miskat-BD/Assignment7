import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
    const [timeline, setTimeline] = useState([]);
    const handleTimeline = (buttons, expectedFriend) => {
        const friend = {
            ...expectedFriend,
            type:buttons
        }
        // console.log(friend);
        toast.success(`${friend.type} with ${friend.name}!`)
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