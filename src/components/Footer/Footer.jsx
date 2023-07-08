import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='mt-4'>
            <footer className="footer p-10 bg-black text-white">
                <div className='flex flex-col items-center'>
                    <img className='w-[30%] h-[60%]' src={logo} alt="" />
                    <p className='text-rose-800 text-2xl font-semibold'>Music Mentor</p>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Legal Notice</a>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className='flex gap-4 text-4xl'>
                        <FaFacebook className='bg-blue-700 text-white rounded-full border-none'></FaFacebook>
                        <FaInstagram className='bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-lg'></FaInstagram>
                        <FaTwitter className='bg-white text-sky-500 p-1 rounded-lg'></FaTwitter>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-black text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by Music Mentor</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;