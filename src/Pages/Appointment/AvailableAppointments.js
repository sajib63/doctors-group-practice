import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loader from '../../Shared/Loader';
import AppointMentCart from './AppointMentCart';
import Modal from './Modal';

const AvailableAppointments = ({ selected }) => {
    const [treatMent, setTreatMent]=useState(null);
    const date = format(selected, 'PP')

  
const {data:appointmentOption=[], refetch, isLoading}=useQuery({
    queryKey:['appointmentOptions', date],
    queryFn:()=>fetch(`http://localhost:8000/appointmentOptions?date=${date}`)
    .then(res=>res.json())
})

if(isLoading){
    return <Loader></Loader>
}
 

    return (
        <div className='my-28'>
            <p className='text-center text-secondary text-2xl font-bold'>Available Appointments on  {format(selected, 'PP')} </p>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    appointmentOption.map(option => <AppointMentCart 
                        option={option}
                        key={option._id}
                        setTreatMent={setTreatMent}
                    ></AppointMentCart>)
                }
            </div>

            <div>
        { 
        treatMent  &&
           <Modal
            treatMent={treatMent}
             selected={selected} 
             setTreatMent={setTreatMent}
             refetch={refetch}
             ></Modal>
           
           }
            </div>
        </div>
    );
};

export default AvailableAppointments;