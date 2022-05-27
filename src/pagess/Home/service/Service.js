import React from 'react';

const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <div>
        
                <img src={img} alt='img'></img>
                <h1 className='text-primary text-uppercase fs-4'>{name}</h1>
                <p className='fs-4'>{description.slice(0, 100) + "..."}</p>
                <button className='btn btn-primary'>Click for Conference</button>
        

        </div>

    );
};

export default Service;