import React from 'react';

const FriendsCard = ({friend}) => {
    const {name, picture, days_since_contact, status, tags} = friend;
    return (
        <div>
            <h1>name: {name}</h1>
            <img src={picture} alt="" />
        </div>
    );
};

export default FriendsCard;