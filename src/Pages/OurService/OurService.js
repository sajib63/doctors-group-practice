import React from 'react';

import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import OurServiceCards from './OurServiceCards';

const OurService = () => {
    const services=[
        {
            id:1,
            icon:cavity,
            title:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:2,
            icon:fluoride,
            title:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id:3,
            icon:whitening,
            title:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='mt-40'>
            <h1 className='text-center text-1xl font-bold text-primary uppercase'>OUR SERVICES</h1>
            <p className='text-center text-3xl mb-16'>Services We Provide</p>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
                services.map(service=> <OurServiceCards key={service._id} service={service}></OurServiceCards>)
            }
           </div>
        </div>
    );
};

export default OurService;