import React from 'react';
import image1 from'../../images/double room/slider3 (1).png';
import image2 from'../../images/double room/slider3 (2).png';
import image3 from'../../images/double room/slider3.png';
const DoubleRoom = () => {
    return (
        <div className='text-center text-uppercase p-4 text-primary'>
            <h1>this is double room</h1>
             <img className='p-4' src={image1}alt='imag'></img>
             <img className='p-4' src={image2}alt='imag'></img>
             <img src={image3}alt='imag'></img>
        </div>
    );
};

export default DoubleRoom;