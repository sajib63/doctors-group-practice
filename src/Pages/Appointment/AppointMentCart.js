import React from 'react';

const AppointMentCart = ({ option, setTreatMent }) => {
    const { name, slots } = option;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary text-center font-bold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'Space'} Available</p>
                <div className="card-actions justify-center">


                    <label onClick={() => setTreatMent(option)} disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointMentCart;