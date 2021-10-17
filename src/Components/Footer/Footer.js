import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Container/Container.css'
import logo from '../images/header/logo.png'

const Footer = () => {
    return (
        <div className='bg-gray-700 py-10'>
            <div className='text-white container flex justify-between pb-16'>
                <div>
                    <img as NavLink='/home' className='w-2/5' src={logo} alt="Logo" />
                </div>
                <div>
                    <NavLink className='block' to='/about'>About online food</NavLink>
                    <NavLink className='block' to='/blog'>Read our blog</NavLink>
                    <NavLink className='block' to='/create-new-account'>Sign up to deliver</NavLink>
                    <NavLink className='block' to='/add-restaurant'>Add your restaurant</NavLink>
                </div>
                <div>
                    <NavLink className='block' to='/help'>Get Help</NavLink>
                    <NavLink className='block' to='/faqs'>Read FAQS</NavLink>
                    <NavLink className='block' to='/client'>View all client</NavLink>
                    <NavLink className='block' to='/find-restaurant'>Restaurant near me</NavLink>
                </div>
            </div>
            <div className='flex justify-center text-white'>
                <NavLink className='px-10' to='privacy-policy'>Privacy policy</NavLink>
                <NavLink className='px-10' to='term-of-use'>Term of use</NavLink>
                <NavLink className='px-10' to='pricing'>Pricing</NavLink>
            </div>
        </div>
        
    );
};

export default Footer;