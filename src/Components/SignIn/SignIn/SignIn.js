import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import '../../Home/Banner/Banner.css'
import googleIcon from '../../images/login/google.png'
import githubIcon from '../../images/login/github.png'

const SignIn = () =>
{
    const { formAction,signInWithGoogle,error } = useAuth();
    return (
        <div className='text-center banner'>
            <h3 className='text-red-600 text-center'>{error}</h3>
            <form onSubmit={formAction} className='m-auto w-1/4'><input placeholder='Name' className='bg-gray-200 border-none w-full px-3 py-2 rounded text-lg my-3' type="text" /><br />
                <input placeholder='Email' className='bg-gray-200 border-none w-full px-3 py-2 rounded text-lg my-3' type="email" /><br />
                <input className='bg-red-500 text-white cursor-pointer w-full border-none px-3 py-2 rounded text-lg my-3' type="submit" value='Sign in' />
            </form>
            <div onClick={signInWithGoogle} className='bg-white cursor-pointer my-3 flex justify-center m-auto py-3 rounded-full w-1/4'>
                <img className='w-10' src={googleIcon} alt="Google" />
                <h3 className='px-3 text-2xl'>Continue with google</h3>
            </div>
            <div className='bg-white cursor-pointer my-3 flex justify-center m-auto py-3 rounded-full w-1/4'>
                <img className='w-10' src={githubIcon} alt="Google" />
                <h3 className='px-3 text-2xl'>Continue with github</h3>
            </div>
            <NavLink className='text-red-500' to='/create-new-account'>Don't have account?'?</NavLink>
        </div>
    );
};

export default SignIn;