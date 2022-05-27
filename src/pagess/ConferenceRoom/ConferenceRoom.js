import React from 'react';
import image from"../../images/conference/room-business-meeting.jpg"
const ConferenceRoom = () => {
    return (
        <div>
            <h1 className='text-center text-uppercase p-4'>this conference room</h1>
            <img className='w-100 mb-5 ' src={image}alt='conference'></img>
        </div>
    );
};

export default ConferenceRoom;