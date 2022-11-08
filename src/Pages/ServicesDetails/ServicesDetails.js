import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const service = useLoaderData()
    const {serviceUrl, serviceName, serviceDes, servicePrice} = service;
    return (
        <div className='container border rounded shadow bg-danger p-3'>
            <div class="card mb-3">
                <img src={serviceUrl} class="card-img-top" alt="..." />
                <hr />
                <div class="card-body">
                    <h5 className='text-danger'>Price: ${servicePrice}</h5>
                    <h5 class="card-title">{serviceName}</h5>
                    <p class="card-text">{serviceDes}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;