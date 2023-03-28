import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FormReservation } from './FormReservation';
import { ResumeReservation } from './ResumeReservation';

export const FinalReservation = () => {

    const currentUser = useSelector(state => state.user);
    const reservation = useSelector(state => state.reservation);
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        if(reservation.hour !== 'default'){
            localStorage.setItem('reservation', JSON.stringify(reservation));
        }

        // return () => {

        // }
    }, [currentUser])
    

  return (
    <div className="w-[60vw] mx-auto py-20">
        {user ?
            <>
                <p className='text-2xl text my-4 font-black'>Check the reservation and confirm</p>
                <div className='flex'>
                    <FormReservation />
                    <ResumeReservation />
                </div>
                <div className='flex gap-2 my-2'>
                    <button className='w-1/4 text-brown border-1 border-black bg-black p-2 rounded hover:bg-blue hover:text-white0 duration-200' onClick={() => console.log('volver')}>Cancelar</button>
                    <button className='w-1/4 text-brown border-1 border-black bg-black p-2 rounded hover:bg-blue hover:text-white0 duration-200'  onClick={() => console.log('fin reserva')}>Confirmar reserva</button>
                </div>
            </>
        :
            <p>cargando...</p>
        }
    </div>
  )
}
