import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="mt-20"  style={{ backgroundImage: `url(${bgImage})`, backgroundSize:'contain' }} >
            <div className="footer p-10  text-black">
                <div>
                    <span className="footer-title">Services</span>
                    <Link    className="link link-hover">Branding</Link >
                    <Link    className="link link-hover">Design</Link >
                    <Link    className="link link-hover">Marketing</Link >
                    <Link    className="link link-hover">Advertisement</Link >
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link    className="link link-hover">About us</Link >
                    <Link    className="link link-hover">Contact</Link >
                    <Link    className="link link-hover">Jobs</Link >
                    <Link    className="link link-hover">Press kit</Link >
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link    className="link link-hover">Terms of use</Link >
                    <Link    className="link link-hover">Privacy policy</Link >
                    <Link    className="link link-hover">Cookie policy</Link >
                </div>
            </div>
            <div className='mt-24 text-center mb-4'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;