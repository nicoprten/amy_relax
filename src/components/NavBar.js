import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from './../actions/index.js';

import { ProfileMenu } from './ProfileMenu.js';

export const NavBar = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);
  console.log(currentUser)

  return (
    <div className='fixed z-10 w-full top-0 h-[8em] flex justify-between bg-brown p-4 px-14 items-center shadow-lg'>
        <p className='p-2' onClick={(e) => scrollLink(e)}>LOGO</p>
        <ul className='flex gap-10 list-none text-green'>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>SOBRE MI</button></li>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>MASAJES</button></li>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>TURNOS</button></li>
        </ul>
        {currentUser ? 
          <ProfileMenu user={currentUser}/>
        :
          <button className='p-2 border-1 border-black rounded hover:bg-black hover:text-white0 duration-200' onClick={() => dispatch(logIn())}>
            Login
          </button>
        }
    </div>
  )
}
