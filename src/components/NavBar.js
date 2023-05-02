import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logIn } from './../actions/index.js';

import { ProfileMenu } from './ProfileMenu.js';

export const NavBar = () => {

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user)
  
  return (
    <div className='fixed z-50 w-full top-0 h-[4em] flex justify-between bg-brown py-8 px-14 items-center shadow-lg text-brown-dark text-sm'>
        <Link to='./' className='p-2' onClick={() => console.log('./')}><img className='w-full h-[50px] object-fit' src='./img/lotus-flower-brown-dark.png' alt='Lotus flower icon'/></Link>
        {/* <ul className='hidden flex gap-10 list-none sm:inline-flex'>
            <li><button className='border-b-1 border-brown hover:border-brown-dark duration-200' onClick={() => s}>ABOUT ME</button></li>
            <li><button className='border-b-1 border-brown hover:border-brown-dark duration-200' onClick={() => s}>MASSAGES</button></li>
            <li><button className='border-b-1 border-brown hover:border-brown-dark duration-200' onClick={() => s}>RESERVE</button></li>
        </ul> */}
        {currentUser ? 
          <ProfileMenu user={currentUser}/>
        :
          <button className='flex gap-2 bg-black border-1 border-black text-white0 text-sm p-2 border-1 border-black rounded hover:bg-brown hover:text-black duration-200' onClick={() => dispatch(logIn())}>
            <span>Login with</span>
            <img className='w-[20px] object-fit' src='./img/google-logo.png' alt='google'/>
          </button>
        }
    </div>
  )
}
