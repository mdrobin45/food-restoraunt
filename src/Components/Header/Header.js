import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/header/logo2.png'
import cartIcon from '../images/header/shopping-cart.png'
import '../Container/Container.css'

const Header = () => {
    return (
        <div className='flex container py-4 items-center justify-between'>
            <div>
                <NavLink to='/home'>
                    <img className='w-1/5' src={logo} alt="Logo" />
                </NavLink>
            </div>
            <div className='flex items-center'>
                <img className='w-5' src={cartIcon} alt="Cart Icon" />
                <NavLink className='px-4 text-lg' to='/SignIn'>Sign in</NavLink>
                <NavLink className='px-4 text-lg bg-red-500 text-white rounded-full py-1' to='/create-new-account'>Sign up</NavLink>
            </div>
        </div>
    );
};

export default Header;