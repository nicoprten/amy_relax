import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { FormReservation } from './FormReservation';
import { ResumeReservation } from './ResumeReservation';

export const FinalReservation = () => {

    const user = useSelector(state => state.user);
    const reservation = useSelector(state => state.reservation);

    const [error, setError] = useState(false)
    const [userData, setUserData] = useState({
        name: user?.name,
        phone: '',
        email: user?.email
    })

    useEffect(() => {
        if(reservation.hour !== 'default'){
            localStorage.setItem('reservation', JSON.stringify(reservation));
        }

        // return () => {

        // }
    }, [reservation])
    
    async function handleFinalReserve(){
        if(userData.email !== '' && userData.phone.toString().length > 8 && userData.name !== ''){
            console.log({
                ...JSON.parse(localStorage.getItem('reservation')),
                client: userData 
            })
        }else{
            setError(true)
        }
    }

  return (
    <div className="w-full sm:w-[70vw] mx-auto pt-16 pb-8 border-b-gray border-b-1 overflow-hidden">
        {user ?
            <>
                <p className='text-sm md:text-2xl text-center md:text-left text my-4 font-black'>Check the reservation and confirm</p>
                <div className='flex flex-wrap md:flex-nowrap my-4 gap-4 mx-4 sm:mx-0 justify-between'>
                    <ResumeReservation />
                    <FormReservation setUserData={setUserData} userData={userData} error={error} />
                </div>
                <p className='bg-violet-light text-black p-2 mx-4 sm:mx-0 rounded-xl w-max text-xs'>No advance payment is required</p>
                <div className='flex flex-wrap gap-2 my-4 mx-4 sm:mx-0'>
                    <button className='sm:w-1/4 w-full text-black border-1 border-black bg-transparent p-2 hover:bg-black hover:text-white0 duration-200' onClick={() => console.log('volver')}>Cancel</button>
                    <button className='sm:w-1/4 w-full text-black border-1 border-black bg-transparent p-2 hover:bg-black hover:text-white0 duration-200'  onClick={() => handleFinalReserve()}>Confirm</button>
                </div>
            </>
        :
            <p>cargando...</p>
        }
    </div>
  )
}
