import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from './../actions/index.js';

export const ProfileMenu = ({ user }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showProfileCard, setShowProfileCard] = useState(false);

    function handleLogOut(){
        dispatch(logOut());
        setShowProfileCard(false)
        navigate('/');
    }

    return(
        <div className='relative'>
            {/* NAVBAR */}
            <div className={showProfileCard ? 'w-max flex gap-2 justify-items-end items-center p-1 rounded-full border-1 border-black bg-white hover:cursor-pointer' : 'w-max flex gap-2 justify-items-end items-center p-1 rounded-full border-1 hover:cursor-pointer hover:bg-white hover:text-blue duration-200'} onClick={() => setShowProfileCard(!showProfileCard)}>
                <img className='w-[40px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user?.name}`} referrerPolicy='no-referrer' />
                {/* <p className='text-sm'>{user?.name}</p> */}
            </div>
            {/* MENU PROFILE */}
            {showProfileCard &&
                <div className='flex flex-col items-center gap-4 text-brown absolute top-[60px] right-[-20px] bg-brown-dark px-2 py-4 rounded shadow-xl border-1 border-black md:w-[200px]'>
                    <img className='w-[75px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user?.name}`} />
                    <div className='flex flex-col items-center border-b-1 border-blue pb-2'>
                        <p className='text-xl'>{user?.name}</p>
                        <p className='text-xs'>Te uniste el {user.creado.split('-')[0]}/{user?.creado.split('-')[1]} de {user.creado.split('-')[2]}</p>
                    </div>
                    <p className='text-xs'>{user?.email}</p>
                    <div className='flex flex-col gap-2 w-full'>
                        <button className='border-1 border-blue bg-blue rounded p-2 text-sm text-brown hover:text-white0 duration-200' onClick={() => console.log('mis reservas direction')}>Mis reservas</button>
                        <button className='border-1 border-blue bg-blue rounded p-2 text-sm text-brown hover:text-white0 duration-200' onClick={() => handleLogOut()}>Cerrar sesión</button>
                    </div>
                </div>
            }    
        </div>
    )
}