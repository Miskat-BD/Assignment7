import React, { useEffect, useState } from 'react';


const useFriendData = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const friendsData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            // console.log(data);
            setFriends(data)
            setLoading(false)
        }
        friendsData();
    }, [])
    return {friends, loading}

};

export default useFriendData;