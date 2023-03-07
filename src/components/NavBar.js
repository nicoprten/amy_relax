import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from './../actions/index.js';

export const NavBar = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user);

  return (
    <div className='flex justify-between bg-brown p-4 items-center'>
        <p className='p-2' onClick={(e) => scrollLink(e)}>LOGO</p>
        <ul className='flex gap-10 list-none text-green'>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>SOBRE MI</button></li>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>MASAJES</button></li>
            <li><button className='border-b-2 border-brown hover:border-green duration-200' onClick={(e) => scrollLink(e)}>TURNOS</button></li>
        </ul>
        <button className='p-2 border-1 border-black rounded hover:bg-black hover:text-white0 duration-200' onClick={() => dispatch(logIn())}>
          Login
        </button>
    </div>
  )
}
