import React from 'react';
import { FaPhoneAlt, FaRegClock, FaSearchLocation } from 'react-icons/fa';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const HomeCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

            <div className="card w-full bg-gradient-to-r from-primary to-secondary   text-white">
                <div className="card-body items-center text-center">
                   <div className='flex justify-center items-center  '>
                  
                  <img className='mx-4' src={clock} alt="" />
                
                   
                   <div>
                   <h1 className='font-bold sm:text-sm'>Opening Hours</h1>
                    <p>Open 9AM to 4PM everyday</p>
                   </div>
                    </div>
                </div>
            </div>









            <div className="card w-full bg-gray-600 text-white">
                <div className="card-body items-center text-center">


                <div className='flex justify-center items-center'>
                    <img className='mx-4' src={location} alt="" />
                   
                   <div>
                   <h1 className='font-bold'>Visit our location</h1>
                    <p>Brooklyn, NY 10036, United States</p>
                   </div>
                    </div>
      
                </div>
            </div>




            <div className="card w-full bg-gradient-to-r from-primary to-secondary   text-white">
                <div className="card-body items-center text-center">
                <div className='flex justify-center items-center'>
                    <img className='mx-4' src={phone} alt="" />
                   
                   <div>
                   <h1 className='font-bold'>Contact us now</h1>
                    <p>+000 123 456789</p>
                   </div>
                    </div>
      
                </div>
            </div>




          
        </div>
    );
};

export default HomeCard;