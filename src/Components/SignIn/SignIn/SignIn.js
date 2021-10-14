import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../Home/Banner/Banner.css'

const SignIn = () =>
{
    return (
        <div className='text-center banner'>
            <form className='m-auto w-1/4'><input placeholder='Name' className='bg-gray-200 border-none w-full px-3 py-2 rounded text-lg my-3' type="text" /><br />
                <input placeholder='Email' className='bg-gray-200 border-none w-full px-3 py-2 rounded text-lg my-3' type="email" /><br />
                <input className='bg-red-500 text-white cursor-pointer w-full border-none px-3 py-2 rounded text-lg my-3' type="submit" value='Sign in' />
            </form>
            <NavLink className='text-red-500' to='/create-new-account'>Don't have account?'?</NavLink>
        </div>
    );
};

export default SignIn;