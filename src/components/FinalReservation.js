import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signOut } from "firebase/auth";

import { Phone, Envelope } from 'phosphor-react';

export const FinalReservation = () => {
    const navigate = useNavigate();
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

    function handleShowMenu(){
        
    }

  return (
    <div className="relative">
        <div className='flex items-center justify-between w-[60vw] mx-auto'>
            <div>
                <button onClick={() => navigate('/')}>Amalia Masajes</button>
            </div>
            <div className='w-max flex gap-2 justify-items-end items-center p-2 rounded text-green hover:bg-green hover:cursor-pointer hover:text-white duration-200' onClick={() => handleShowMenu()}>
                <img className='w-[50px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user.name}`} />
                <p className='text-sm'>{user.name}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4 absolute top-[20px] right-[20px] bg-white0 p-2 rounded'>
            <img className='w-[75px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user.name}`} />
            <div className='flex flex-col items-left bg-green text-white0 rounded p-2'>
                <div className='flex gap-2 items-center'>
                    <Envelope size={28}/>
                    <p className='text-sm'>{user.email}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <Phone size={28}/>
                    <p className='text-sm'>{user.phone}</p>
                </div>
            </div>
            <div className='flex flex-col gap-2 w-full'>
                <button className='border-1 border-black rounded p-2 text-sm hover:bg-green hover:text-white duration-200' onClick={() => console.log('mis reservas direction')}>Mis reservas</button>
                <button className='border-1 border-black rounded p-2 text-sm hover:bg-green hover:text-white duration-200' onClick={() => handleLogOut()}>Cerrar sesión</button>
            </div>
        </div>
    </div>
  )
}
