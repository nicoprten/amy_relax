import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FormReservation } from './FormReservation';

export const FinalReservation = () => {

    const currentUser = useSelector(state => state.user);
    const reservation = useSelector(state => state.reservation);
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [currentUser])
    

  return (
    <div className="relative mx-auto py-20">
        {user ?
            <>
                <FormReservation />
                <div>
                    <p>{reservation.day}</p>
                </div>
            </>
        :
            <p>cargando...</p>
        }
    </div>
  )
}
