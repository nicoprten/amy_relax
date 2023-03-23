import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from './../actions/index.js';

import { ProfileMenu } from './ProfileMenu.js';

export const NavBar = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);
  
  return (
    <div className='fixed z-10 w-full top-0 h-[4em] flex justify-between bg-black py-8 px-14 items-center shadow-lg text-white0 text-sm'>
        <p className='p-2' onClick={(e) => scrollLink(e)}>LOGO</p>
        <ul className='flex gap-10 list-none'>
            <li><button className='border-b-1 border-black hover:border-white duration-200' onClick={(e) => scrollLink(e)}>ABOUT ME</button></li>
            <li><button className='border-b-1 border-black hover:border-white duration-200' onClick={(e) => scrollLink(e)}>MASSAGES</button></li>
            <li><button className='border-b-1 border-black hover:border-white duration-200' onClick={(e) => scrollLink(e)}>RESERVE</button></li>
        </ul>
        {currentUser ? 
          <ProfileMenu user={currentUser}/>
        :
          <button className='flex gap-2 bg-black border-1 border-white0 text-white0 text-sm p-2 border-1 border-black rounded hover:bg-white0 hover:text-black duration-200' onClick={() => dispatch(logIn())}>
            <span>Login with</span>
            <img className='w-[20px] object-fit' src='./img/google-logo.png' alt='google'/>
          </button>
        }
    </div>
  )
}
