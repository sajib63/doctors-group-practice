import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

import { AuthContext } from '../../Context/AuthProvider';

const Modal = ({ treatMent, selected, setTreatMent, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name, slots } = treatMent;
    const date = format(selected, 'PP')

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const slot = form.slot.value;
        const number = form.number.value;
        const booking = { name, date, userName, email, slot, number };

        fetch('http://localhost:8000/bookings',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                setTreatMent(null)
                toast.success('appointment booked')
                refetch();

            }
            else{
                toast.error(data.message)
            }
          
        })
        .catch(error=>{
            console.log(error);
        })
       

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />

                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots?.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }

                        </select>

                        <input type="text" name='name' disabled defaultValue={user?.displayName} className="input input-bordered input-black w-full" />
                        <input type="email" name='email' disabled defaultValue={user?.email} className="input input-bordered input-black w-full" />
                        <input type="text" name='number' placeholder="PhoneNumber" className="input input-bordered input-black w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        </>
    );
};

export default Modal;