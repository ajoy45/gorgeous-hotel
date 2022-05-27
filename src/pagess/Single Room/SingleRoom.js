import React from 'react';
import image1 from"../../images/single room/interior-bedroom-white-creamy-tones.jpg";
import image2 from"../../images/single room/one-king-size-bed-hotel-room.jpg";
const SingleRoom = () => {
    return (
        <div className='mb-4 p-4'>
            <h1 className='text-center text-uppercase p-4 text-primary'>this is single room</h1>
            <img src={image1}alt='singlr room'></img>
            <img src={image2}alt='single room'></img>
        </div>
    );
};

export default SingleRoom;
