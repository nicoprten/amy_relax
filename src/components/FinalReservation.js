import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { ProfileMenu } from './ProfileMenu';
import { FormReservation } from './FormReservation';

export const FinalReservation = () => {

    const currentUser = useSelector(state => state.user);
    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [currentUser])
    

  return (
    <div className="relative mx-auto py-20">
        {user ?
            <>
                <FormReservation />
            </>
        :
            <p>cargando...</p>
        }
    </div>
  )
}
