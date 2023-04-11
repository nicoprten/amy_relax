import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logOut } from './../actions/index.js';
import useComponentVisible from '../utilities/UseComponentVisible.js';

export const ProfileMenu = ({ user }) => {

    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleLogOut(){
        dispatch(logOut());
        setIsComponentVisible(false)
        navigate('/');
    }    

    return(
        <div className='relative' ref={ref}>
            {/* NAVBAR */}
            <div className={isComponentVisible ? 'w-max flex gap-2 justify-items-end items-center p-1 rounded-full border-1 border-black bg-brown-dark hover:cursor-pointer' : 'w-max flex gap-2 justify-items-end items-center p-1 rounded-full border-1 hover:cursor-pointer hover:bg-brown-dark hover:text-blue duration-200'} onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <img className='w-[40px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user?.name}`} referrerPolicy='no-referrer' />
                {/* <p className='text-sm'>{user?.name}</p> */}
            </div>
            {/* MENU PROFILE */}
            {(isComponentVisible) &&
                <div className='flex flex-col items-center gap-4 text-black absolute top-[60px] right-[-20px] bg-white0 p-4 rounded shadow-xl border-1 border-gray md:w-[200px]'>
                    <img className='w-[75px] rounded-full' src={user?.image} alt={`Foto de perfil de ${user?.name}`} />
                    <div className='flex flex-col items-center border-b-1 border-blue pb-2'>
                        <p className='text-xl text-center my-1'>{user?.name}</p>
                        <p className='text-xs'>Joined {user.creado.split('-')[0]}/{user?.creado.split('-')[1]} de {user.creado.split('-')[2]}</p>
                    </div>
                    <p className='text-xs'>{user?.email}</p>
                    <div className='flex flex-col gap-2 w-full text-white0'>
                        <button className='border-1 border-black bg-black p-2 text-sm rounded hover:bg-white0 hover:text-black duration-200' onClick={() => navigate('./reservations')}>Reservations</button>
                        <button className='border-1 border-black bg-black p-2 text-sm rounded hover:bg-white0 hover:text-black duration-200' onClick={() => handleLogOut()}>Log out</button>
                    </div>
                </div>
            }    
        </div>
    )
}