import React from 'react';
import chair from '../../assets/images/chair.png'


const Banner = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col  lg:flex-row-reverse ">
                <img src={chair} alt='' className="rounded-lg lg:w-1/2 shadow-2xl mr-9" />
                <div className='lg:ml-12'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" >Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;