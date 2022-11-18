import React from 'react';
import Banner from '../../Banner/Banner';
import ContactUsHome from '../../ContactUsHome/ContactUsHome';
import Exceptional from '../../Exceptional/Exceptional';
import HomeCard from '../../HomeCard/HomeCard';
import MakeAppoinment from '../../MakeAppoinment/MakeAppoinment';
import OurService from '../../OurService/OurService';
import Testimonial from '../../Testimonial/Testimonial';
import bgChair from '../../../assets/images/bg.png'
const Home = () => {
    return (
        <div className='mx-5'>
            <div style={{ backgroundImage: `url(${bgChair})` }}>
                <Banner></Banner>
            
                <HomeCard></HomeCard>
            </div>

            <div>
                <OurService></OurService>
            </div>

            <div>
                <Exceptional></Exceptional>
            </div>

            <div>
                <MakeAppoinment></MakeAppoinment>
            </div>

            <div>
                <Testimonial></Testimonial>
            </div>

            <div>
                <ContactUsHome></ContactUsHome>
            </div>
        </div>
    );
};

export default Home;