import React from 'react';
import { useParams } from 'react-router';
import useFriendData from '../../hooks/useFriendsData/useFriendData';
import { BounceLoader } from 'react-spinners';
import LeftCard from '../../ui/friendDetailsCard/LeftCard';
import RightTop from '../../ui/friendDetailsCard/RightTop';
import RightMid from '../../ui/friendDetailsCard/RightMid';
import RightDown from '../../ui/friendDetailsCard/RightDown';

const FriendDetails = () => {
    const { id } = useParams();
    const { friends, loading } = useFriendData();
    // console.log(params, friends, loading, 'details');
    const expectedFriend = friends.find(friend => friend.id == id);
    // console.log(expectedFriend);
    if (loading) {
        <div className="flex justify-center items-center">
            <BounceLoader />
        </div>
        return;
    }
    return (
        <section className='my-20 grid gap-5 sm:grid-cols-3 container mx-auto'>
            {/* left */}
            <div className="sm:col-span-1">
                <LeftCard expectedFriend={expectedFriend} />
            </div>

            {/* right */}
            <div className="grid grid-cols-1 sm:col-span-2">
                <RightTop expectedFriend={expectedFriend} />
                <RightMid expectedFriend={expectedFriend} />
                <RightDown expectedFriend={expectedFriend}/>
            </div>

        </section>
    );
};

export default FriendDetails;