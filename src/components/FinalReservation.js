import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signOut } from "firebase/auth";

import { FormReservation } from './FormReservation';

export const FinalReservation = () => {
    const navigate = useNavigate();
    const [showProfileCard, setShowProfileCard] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    function handleLogOut(){
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            localStorage.removeItem('user');
            navigate('/');
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

  return (
    <div className="relative mx-auto">
        {/* NAVBAR */}
        <div className='w-full flex items-center justify-between bg-black'>
            <div className='text-green m-2'>
                <button onClick={() => navigate('/')}>Amalia Masajes</button>
            </div>
            <div className='w-max flex gap-2 justify-items-end items-center p-2 m-2 rounded text-green border-1 border-green hover:bg-green hover:cursor-pointer hover:text-white duration-200' onClick={() => setShowProfileCard(!showProfileCard)}>
                <img className='w-[50px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user.name}`} />
                <p className='text-sm'>{user.name}</p>
            </div>
        </div>
        {/* MENU PROFILE */}
        {showProfileCard &&
            <div className='flex flex-col items-center gap-4 absolute top-[80px] right-[5px] bg-white0 p-2 rounded shadow-xl'>
                <img className='w-[75px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user.name}`} />
                <div className='flex flex-col items-center border-b-1 border-green pb-2'>
                    <p className='text-green text-xl'>{user.name}</p>
                    <p className='text-xs text-black'>Te uniste el {user.creado.split('-')[0]}/{user.creado.split('-')[1]} de {user.creado.split('-')[2]}</p>
                </div>
                <div className='flex flex-col items-left text-green rounded p-2'>
                    <div className='flex gap-2 items-center'>
                        <p className='text-sm'>{user.email}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <p className='text-sm'>{user.phone}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <button className='border-1 border-black rounded p-2 text-sm hover:bg-green hover:text-white duration-200' onClick={() => console.log('mis reservas direction')}>Mis reservas</button>
                    <button className='border-1 border-black rounded p-2 text-sm hover:bg-green hover:text-white duration-200' onClick={() => handleLogOut()}>Cerrar sesión</button>
                </div>
            </div>
        }
        <FormReservation user={user}/>
    </div>
  )
}