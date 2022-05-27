import React, { useEffect, useState } from 'react';
import Service from '../service/Service';
import"./Services.css"
const Services = () => {
    const[services,setServices]=useState([]);
    // console.log(services)
    useEffect(()=>{
        fetch("fackData.json")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-center p-5'>Hotel Room Display Here</h1>
            <div className='services-container mb-4'> 
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                ></Service>)
            }

            </div>
           
        </div>
    );
};

export default Services;