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
            <div className={showProfileCard ? 'w-max flex gap-2 justify-items-end items-center p-2 rounded-t text-blue border-1 border-brown border-b-0 bg-brown hover:cursor-pointer' : 'w-max flex gap-2 justify-items-end items-center p-2 rounded-t text-brown border-1 border-brown border-b-0 hover:cursor-pointer hover:bg-brown hover:text-blue duration-200'} onClick={() => setShowProfileCard(!showProfileCard)}>
                <img className='w-[40px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user?.name}`} />
                <p className='text-sm'>{user?.name}</p>
            </div>
            {/* MENU PROFILE */}
            {showProfileCard &&
                <div className='flex flex-col items-center gap-4 absolute top-[60px] right-[-25px] bg-brown p-2 rounded-b shadow-xl border-x-1 border-b-1 border-brown'>
                    <img className='w-[75px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user?.name}`} />
                    <div className='flex flex-col items-center border-b-1 border-blue pb-2'>
                        <p className='text-brown-dark text-xl'>{user?.name}</p>
                        <p className='text-xs text-blue'>Te uniste el {user.creado.split('-')[0]}/{user?.creado.split('-')[1]} de {user.creado.split('-')[2]}</p>
                    </div>
                    <div className='flex flex-col items-left text-green rounded p-2'>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm text-brown-dark'>{user?.email}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='text-sm'>{user?.phone}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <button className='border-1 border-blue rounded p-2 text-sm hover:bg-blue hover:text-brown duration-200' onClick={() => console.log('mis reservas direction')}>Mis reservas</button>
                        <button className='border-1 border-blue rounded p-2 text-sm hover:bg-blue hover:text-brown duration-200' onClick={() => handleLogOut()}>Cerrar sesión</button>
                    </div>
                </div>
            }    
        </div>
    )
}