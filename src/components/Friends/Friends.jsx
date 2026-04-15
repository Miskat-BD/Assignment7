import React from 'react';
import useFriendData from '../../hooks/useFriendsData/useFriendData';
import { BounceLoader } from 'react-spinners';
import FriendsCard from '../../ui/friendsCard/FriendsCard';

const Friends = () => {
    const { friends, loading } = useFriendData();
    // console.log(friends, 'friends');
    // console.log(loading, 'loading');
    return (
        <div className='container mx-auto my-14'>
            <h1 className='text-2xl font-semibold text-[#1F2937]'>Your Friends</h1>

            {
                loading ? (
                    <div className="flex justify-center items-center h-[50vh]">
                        <BounceLoader />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
                        {
                            friends.map(friend => (
                                <FriendsCard key={friend.id} friend={friend} />
                            ))
                        }
                    </div>
                )
            }

        </div>
    );
}

export default Friends;