import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ResumeReservation = () => {

    const [reservation, setReservation] = useState({})

    const user = useSelector(state => state.user);
    // const reservation = useSelector(state => state.reservation);

    useEffect(() => {
        setReservation(JSON.parse(localStorage.getItem('reservation')))
    }, [])
    
    return (
        <>
            <div className='w-2/3 bg-white0 border-1 border-gray rounded p-4 shadow-lg'>
                <p className='text-xl border-b-1 border-gray pb-2 font-black'>Reservation resume</p>
                <div className="flex justify-between border-b-1 border-gray p-2 m-2">
                    <p>Massage type</p>
                    <p className=''>{reservation.massage}</p>
                </div>
                <div className="flex justify-between border-b-1 border-gray p-2 m-2">
                    <p>Day</p>
                    <p className=''>{reservation.day}</p>
                </div>
                <div className="flex justify-between border-b-1 border-gray p-2 m-2">
                    <p>Hour</p>
                    <p className=''>{reservation.hour}</p>
                </div>
            </div>
        </>
    )
}
